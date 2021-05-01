import * as express from "express";
import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

export default class App {
  public app: express.Application;
  public port: number;
  public db: any;

  constructor(controllers: any[], port: number) {
    dotenv.config();

    this.app = express();
    this.port = port;
    this.initializeDB()
    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  private initializeDB() {
    this.db = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    });
    
    this.db.connect(function(err) {
      if (err) throw err;
      console.log("DB Connected!");
    });
  }

  private initializeMiddleware() {
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST')
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`SERVER RUNNING --- PORT : ${this.port}`);
    });
  }
}