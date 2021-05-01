import * as express from "express";
import app from "./../server";
export default class HealthController {
  public path = "/";
  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.get);
  }


  public async get(req: express.Request, res: express.Response) {
    return res.json({ok: true});
  }
}