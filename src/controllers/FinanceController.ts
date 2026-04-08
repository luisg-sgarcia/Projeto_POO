import Database from "../database";
import Income from "../models/Income";
import Expense from "../models/Expense";
import ConsoleView from "../views/ConsoleView";

export default class FinanceController {
    private view: ConsoleView;
    public database: Database = new Database();

    constructor(){
        this.view = new ConsoleView(this);
    }

    public createIncome(description: string, value: number): Income {
        return new Income(description, value);
    } 

    public createExpense(description: string, value: number): Expense {
        return new Expense(description, value);
    }

    public addIncome(income: Income): void {
        this.database.income.push(income);
    }

    public addExpense(expense: Expense): void {
        this.database.expense.push(expense);
    }

    public getBalance(): number {
        let total = 0;

        this.database.income.forEach(i => {total += i.calculateImpact();});

        this.database.expense.forEach(e => {total += e.calculateImpact();});

        return total;
    }
}