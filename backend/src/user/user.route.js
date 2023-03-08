const { Router } = require("express");
const jwt = require("jsonwebtoken");
const OtpModel = require("../otp/otp.model");
const userModel = require("./user.model");
const nodemailer = require("nodemailer");
const app = Router();

const emailuser = process.env.EMAILUSERNAME;
const emailpassword = process.env.EMAILPASSWORD;

app.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const findUser = await userModel.findOne({ email: email });
    if (findUser) {
      return res.status(200).send({ message: "user already exists" });
    }
    const user = await userModel.create(req.body);
    return res.status(201).send({ message: "user created successfully", user });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email: email });
    if (user) {
      const verifyemail = await OtpModel.findOne({ email: user.email });
      if (verifyemail) {
        return res.send({ message: "Otp already generated" });
      }
      const otp = Math.floor(100000 + Math.random() * 900000);
      const saveOtp = await OtpModel.create({ otp, email });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailuser,
          pass: emailpassword,
        },
      });

      const mailOptions = {
        from: "pharmeasy@gmail.com",
        to: email,
        subject: `OTP generated successfully`,
        text: `Dear ${user.firstName} the otp to login to your account id ${otp}`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log("ERROR", err);
        } else {
          console.log("EMAIL SEND" + info.response);
          res.send(`OTP SENDED SUCCESSFULLY`);
        }
      });

      return res
        .status(200)
        .send({ message: "OTP has been sent to your email" });
    } else {
      res
        .status(200)
        .send({ message: "You are not registered please register" });
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/verify", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const verify = await OtpModel.findOne({ otp, email });

    if (!verify) {
      return res.status(404).send("invalid otp");
    } else {
      const user = await userModel.findOne({ email }, { password: 0 });
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      const deleteotp = await OtpModel.findOneAndDelete({ email });
      return res
        .status(200)
        .send({ message: "login success", data: token, user });
    }
  } catch {
    return res.status(400).send("Invalid token");
  }
});
module.exports = app;
