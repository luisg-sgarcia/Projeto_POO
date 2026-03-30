import Transaction from "../models/Transaction";

export default class ConsoleView {
    public showTransactions(transactions: Transaction[]): void {
        console.log("=== TRANSAÇÕES ===");

        transactions.forEach((t, index) => {
            console.log((index + 1) + " - " + t.getdescription() + " | R$" + t.getValue());
        });
    }

    public showBalance(balance: number): void {
        console.log("Saldo atual: R$ " + balance);
    }
}