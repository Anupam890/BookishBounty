const users = require('../model/users');
const createHttpError = require("http-errors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailer = require('nodemailer');


const createUser = async(req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    //validator
    if (!name || !email || !password || !confirmPassword) {
        return next(createHttpError(400, 'All fields are required'));
    } else {
        try {
            const user = await users.findOne({ email });
            if (user) {
                return next(createHttpError(400, 'User already exists'));
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = new users({
                    name,
                    email,
                    password: hashedPassword,
                });
                await newUser.save();
                //token generation
                let secret = process.env.JWT_SECRET;
                let token = await jwt.sign({ id: newUser.id }, secret, { expiresIn: '1d' });
                res.status(201).json({ token });
            }

        } catch (error) {
            return next(createHttpError(500, error.message));
        }
    }
}

//email verification
const emailVerification = async(req, res, next) => {
    const email = req.body.email;

}

module.exports = { createUser };