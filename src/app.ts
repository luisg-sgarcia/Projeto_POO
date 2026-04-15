import Database from "./database";
import FinanceController from "./controllers/FinanceController";
import ConsoleView from "./views/ConsoleView";

const database = new Database();
const controller = new FinanceController(database);

new ConsoleView(controller);