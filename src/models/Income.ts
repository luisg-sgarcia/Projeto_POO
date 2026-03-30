import Transaction from "./Transaction";

export default class Income extends Transaction {
    
    public calculateImpact(): number {
        return this.getValue();
    }
}