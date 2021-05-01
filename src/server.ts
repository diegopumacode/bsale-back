import App from "./App";
import CategoryController from "./controllers/CategoryController.";
import ProductController from "./controllers/ProductController";


const controllers = [new CategoryController(), new ProductController()];
const app = new App(controllers, 3000);
app.start();

export default app;