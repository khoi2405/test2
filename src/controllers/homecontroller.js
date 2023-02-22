import { request, response } from 'express';
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
 let displayGetCURD = async (req,res)=>{
    let data = await CRUDservices.getAllUser();
    console.log('-----------------------')
    console.log(data)
    console.log('-----------------------')

    return res.render('displaycrud.ejs',{
        dataTable : data
    })
 }
 let getEditCURD = async(req,res)=>{
    let userId = req.query.id;

    if(userId){
        let userData =  await CRUDservices.getUserInfoById(userId);
        
    
       return res.render('curdedit.ejs',{
            user: userData
       })

    }
    else{
        return res.send('hello edit')

    }
 }
 let PUTCRUD =  async (req,res) =>  {
    let data = req.body;
   let allUsers = await CRUDservices.updateUserData(data);
   return res.render('displaycrud.ejs',{
    dataTable: allUsers
   })

   

 }
 let deleteCRUD = async(req,res) =>{
    let id = req.query.id;
    if(id){

        await CRUDservices.deleteUserById(id);
        return res.send('Da xoa nguoi dung thanh cong ')
    }else{
        return res.send('Vui long thu lai')
    }
    
 }
module.exports={
    getHomepage : getHomepage,
    getAboutPage : getAboutPage,
    getCrud : getCrud,

    postCURD: postCURD, 
    displayGetCURD : displayGetCURD,
    getEditCURD : getEditCURD,
    PUTCRUD : PUTCRUD,
    deleteCRUD : deleteCRUD
}