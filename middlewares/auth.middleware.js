import env from 'dotenv';
env.config()

export const authLogin = async (req, res, next) => {
    try {

        let {setId} = req.cookies

        if(setId){
            next();
        }else{
            res.redirect('/user/viewlogin')
        }
    } catch (err) {
        console.log(err)
    }
}