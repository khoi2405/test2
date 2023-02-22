import db from '../models/index';
import CRUDservices from '../services/CRUDservices';
let getHomepage = async(req,res)=>{
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data :JSON.stringify(data)
        });

    }catch(e){
        console.log(e)
    }
    
}

let getAboutPage =(req,res) =>{
    return res.render('test/about.ejs');

}
let getCrud = (req,res)=> {
    return res.render('test/crudd.ejs');
}
let postCURD = async(req,res)=> {
    let message = await CRUDservices.createNewUser(req.body);
    console.log(message)
    
    return res.send('post crud from sever');
}
module.exports={
    getHomepage : getHomepage,
    getAboutPage : getAboutPage,
    getCrud : getCrud,

    postCURD: postCURD, 
}