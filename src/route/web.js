import  express  from "express";
import homecontroller from "../controllers/homecontroller";

let router =  express.Router();

let initWebRouter = (app) =>{
    router.get('/',homecontroller.getHomepage);
    router.get('/about',homecontroller.getAboutPage);

    router.get('/crudd',homecontroller.getCrud);
    router.post('/post-curd',homecontroller.postCURD);
 

    return app.use("/",router);
}
module.exports = initWebRouter;