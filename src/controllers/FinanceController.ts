import Transaction from "../models/Transaction";
import Income from "../models/Income";
import Expense from "../models/Expense";
import ConsoleView from "../views/ConsoleView";

export default class FinanceController {
    private transactions: Transaction[] = [];
    private view: ConsoleView;

    constructor(view: ConsoleView){
        this.view = view;
    }

    public addIncome(description: string, value: number): void {
        let income = new Income(description, value);
        this.transactions.push(income);
    }

    public getBalance(): number {
        return this.transactions.reduce((total, t) => {return total + t.calculateImpact();}, 0);
    }

    public addExpense(description: string, value: number): void {
        let expense = new Expense(description, value);

        if(this.getBalance() >= value){
            this.transactions.push(expense);
        }
        else {
            console.log("Saldo insuficiente!");
        }
    }

    public showData(): void {
        this.view.showTransactions(this.transactions);
        this.view.showBalance(this.getBalance());
    }

}