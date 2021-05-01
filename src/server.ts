import App from "./App";
import CategoryController from "./controllers/CategoryController.";


const controllers = [new CategoryController()];
const app = new App(controllers, 3000);
app.start();

export default app;