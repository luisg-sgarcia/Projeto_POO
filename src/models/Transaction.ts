import TransactionType from "./TransactionType";

export default class Transaction {
    
    constructor(
        private description: string,
        private value: number,
        private type: TransactionType
    ) {}

    public getDescription(): string {
        return this.description;
    } 

    public setDescription(description: string): void {
        this.description = description;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getType(): TransactionType {
        return this.type;
    }

    public calculateImpact(): number {
        if (this.type == TransactionType.INCOME) {
            return this.value;
        }
        else {
            return -this.value;
        }
    }
}