import FinanceController from "../controllers/FinanceController";
import Transaction from "../models/Transaction";
import promptSync from 'prompt-sync';

export default class ConsoleView {
    private prompt = promptSync();

    public mainMenu(): void {
        let open: boolean = true;

        while(open){
            console.log("Menu principal\n");
            let option = parseInt(this.prompt("1. Registrar entrada\n.2. Registrar despesa\n3. Sair"));
            switch (option) {
                case 1:
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