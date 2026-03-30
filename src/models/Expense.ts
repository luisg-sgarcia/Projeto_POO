import Transaction from "./Transaction";

export default class Expense extends Transaction {

    public calculateImpact(): number {
        return -this.getValue();
    }
}