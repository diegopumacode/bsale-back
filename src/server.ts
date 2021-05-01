import App from "./App";
import CategoryController from "./controllers/CategoryController.";
import HealthController from "./controllers/HealthController";
import ProductController from "./controllers/ProductController";

const controllers = [new CategoryController(), new ProductController(), new HealthController()];
const app = new App(controllers, 3000);
app.start();

export default app;