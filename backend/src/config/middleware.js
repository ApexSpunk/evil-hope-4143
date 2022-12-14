const userModel = require("../user/user.model");
var jwt = require('jsonwebtoken');


const AuthMiddleware = async (req, res, next) => {
    let token = req.headers.token;
    if (!token) {
        return  res.status(401).send({ message: "Token not found" });
    }

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: verify.id, email: verify.email, password: verify.password });
        if (user) {
            req.userId = user._id;
            next();
        } else {
            res.status(401).send({ message: "Invalid token" });
        }
    } catch (e) {
        res.status(401).send({ message: "Invalid token" });
        console.log(e.message);
    }
}

module.exports = AuthMiddleware;