import * as express from "express";
import app from "./../server";
export default class ProductController {
  public path = "/product";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(`${this.path}/category/:id`, this.getProductByCategory);
    
  }

  public async getProductByCategory(req: express.Request, res: express.Response) {
    app.db.query(`select * from product where product.category=${req.params.id}`,(err,rows,fields)=>{
        if(err) throw err;
        return res.json(rows);
    })
  }

}