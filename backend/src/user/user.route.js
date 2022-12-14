const {Router}=require("express");
const jwt=require("jsonwebtoken");
const userModel=require("./user.model");

const app=Router()

app.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.post('/signup', async (req, res) => {
    try { 
        const {email}=req.body;
          const findUser=await userModel.findOne({email:email})
    if(findUser){
        return res.send("user already exists")
    }
        const user = await userModel.create(req.body);
        //  const token = jwt.sign({ id: user._id, email: user.email, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(201).send(user);
    } catch (e) {
       return res.status(500).send(e.message);
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (user) {
            const token = jwt.sign({ id: user._id, email: user.email, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).send({ message: "User logged in successfully", data: { user, token } });
        } else {
            res.status(401).send({ message: "Invalid credentials" });
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports=app;