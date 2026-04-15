import Database from "../database";
import Transaction from "../models/Transaction";
import TransactionType from "../models/TransactionType";

export default class FinanceController {

    constructor(private database: Database) {}

    public createTransaction(
        description: string,
        value: number,
        type: TransactionType
    ): Transaction {
        if (value <= 0) {
            throw new Error("Valor deve ser maior que zero");
        }

        return new Transaction(description, value, type);
    }

    public addTransaction(transaction: Transaction): boolean {

        if (
            transaction.getType() === TransactionType.EXPENSE &&
            this.getBalance() < transaction.getValue()
        ) {
            return false;
        }

        this.database.transactions.push(transaction);
        return true;
    }

    public getBalance(): number {
        let total = 0;

        this.database.transactions.forEach(t => {
            total += t.calculateImpact();
        });

        return total;
    }

    public getTransactions() {
        return this.database.transactions;
    }
}