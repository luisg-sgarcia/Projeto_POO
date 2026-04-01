import FinanceController from "./controllers/FinanceController";
import ConsoleView from "./views/ConsoleView";

const view = new ConsoleView();
const controller = new FinanceController(view);

controller.addIncome("Salário", 2000);
controller.addExpense("Mercado", 1100);
controller.addExpense("Internet", 200);

controller.showData();