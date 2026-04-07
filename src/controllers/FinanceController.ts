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

    public getNewIncome(): Income {
        return new Income();
    }   

    public getNewExpense(): Expense {
        return new Expense();
    }   

    // public getBalance(): number {
    //     return this.transactions.reduce((total, t) => {return total + t.calculateImpact();}, 0);
    // }

    // public addExpense(description: string, value: number){
    //     let expense = new Expense(description, value);

    //     if(this.getBalance() >= value){
    //         this.transactions.push(expense);
    //     }
    //     else {
    //         console.log("Saldo insuficiente para: " + description);
    //     }
    // }

    // public showData(): void {
    //     this.view.showTransactions(this.transactions);
    //     this.view.showBalance(this.getBalance());
    // }

}