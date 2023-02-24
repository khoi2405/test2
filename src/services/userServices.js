import db from   "../models/index";
import bcrypt from 'bcryptjs';

let hendleUserLogin = (email, password) =>{
    return new Promise(async(resolve,reject) =>{
        try{
            let userData = {};
            let isExist = await checkUserEmail(email);
            if(isExist){
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email : email},
                    raw: true
                });
                if(user){
                    let check = await bcrypt.compareSync(password, user.password);
                    if(check){
                        userData.errCode  = 0 ;
                        userData.errMessage = 'OK',
                        console.log(user)
                        delete user.password;
                        userData.user = user;
                    }else{
                        userData.errCode = 3;
                        userData.errMessage = 'wrong passwrod';

                    }


                }else{
                    userData.errCode = 2;
                    userData.errMessage = 'user not found'
                }

            }
             else{
                userData.errCode = 1;
                userData.errMessage = 'plz try email'
            }
            resolve(userData)

        } catch(e){
            reject(e)
        }
    })

}

let checkUserEmail = (userEmail) =>{
    return new Promise(async(resolve,reject) => {
        try{
            let user = await db.User.findOne({
                where : { email : userEmail}
            })
            if(user){
                resolve(true)
            }
            else{
                resolve(false)
            }

        }catch(e){
            reject(e);

        }
    })
}
module.exports ={
    hendleUserLogin : hendleUserLogin
}