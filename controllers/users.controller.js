import bcrypt from "bcrypt"
import { userModel } from "../models/users.model.js";
const saltRounds = 10;

export let getUsers = () => {

}
export let registerUser = async (req, res) => {
    try {
        let { username, password } = req.body;

        bcrypt.genSalt(saltRounds, async (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = new userModel({
                    username,
                    password: hash,
                });
                await user.save();

            });
        });

        res.redirect("/user/viewlogin")
    } catch (error) {
        console.log(err)
    }
}

export let viewregisterUser = (req, res) => {
    res.render("register")
}

export let viewloginUser = (req, res) => {
    res.render("login")
}

export const loginUser = (req, res) => {
    const { username, password } = req.body;

    try {
        userModel.findOne({ username }).then((data) => {
            if (data != null) {
                bcrypt.compare(password, data.password, function (err, result) {
                    if (result) {
                        res.cookie('setId', data.id);
                        console.log("login Successfully");
                        res.redirect('/')
                    } else {
                        res.redirect('/user/viewlogin')

                    }
                })
            } else {
                res.redirect('/user/viewregister')

            }
        }).catch((err) => {
            console.log(err);
        })

    } catch (err) {
        console.log(err);
        res.redirect('/user/viewlogin')
    }
}

export const logout = (req, res) => {
    res.clearCookie('setId');
    res.redirect('/user/viewlogin');
}