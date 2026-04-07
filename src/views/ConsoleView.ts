import FinanceController from "../controllers/FinanceController";
import promptSync from 'prompt-sync';
import IncomeRegister from "./IncomeRegister";
import ExpenseRegister from "./ExpenseRegister";

export default class ConsoleView {
    private prompt = promptSync();
    private controller: FinanceController;

    constructor(controller: FinanceController){
        this.controller = controller;
        this.mainMenu();
    }

    public mainMenu(): void {
        let open: boolean = true;

        while(open){
            console.log("Menu principal\n");
            let option = parseInt(this.prompt("1. Registrar entrada\n.2. Registrar despesa\n3. Sair"));
            switch (option) {
                case 1:
                    new IncomeRegister(this.controller);
                    break;
                case 2:
                    new ExpenseRegister(this.controller);
                    break;
                case 3:
                    console.log("escolheu sair");
                    open = false;
                    break;
            }
        }
    }

    // public showTransactions(transactions: Transaction[]): void {
    //     console.log("TRANSAÇÕES: ");

    //     transactions.forEach((t, index) => {
    //         console.log((index + 1) + " - " + t.getdescription() + " | R$" + t.getValue());
    // //     });
    // // }

    // public showBalance(balance: number): void {
    //     console.log("Saldo atual: R$ " + balance);
    // }
}