import * as express from "express";
import app from "./../server";
export default class CategoryController {
  public path = "/category";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllCategories);
  }


  public async getAllCategories(req: express.Request, res: express.Response) {
    app.db.query("select * from category",(err,rows,fields)=>{
        if(err) throw err;
        return res.json(rows);
    })

  }
}