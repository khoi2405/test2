import  express  from "express";
import homecontroller from "../controllers/homecontroller";
import userController from "../controllers/userContronller";

let router =  express.Router();

let initWebRouter = (app) =>{
    router.get('/',homecontroller.getHomepage);
    router.get('/about',homecontroller.getAboutPage);

    router.get('/crudd',homecontroller.getCrud);
    router.post('/post-curd',homecontroller.postCURD);
    router.get('/get-crud' ,homecontroller.displayGetCURD);
    router.get('/edit-crud',homecontroller.getEditCURD);
    router.post('/put-curd',homecontroller.PUTCRUD);
    router.get('/delete-crud',homecontroller.deleteCRUD);
    router.post('/api/login',userController.handleLogin)
 

    return app.use("/",router);
}
module.exports = initWebRouter;