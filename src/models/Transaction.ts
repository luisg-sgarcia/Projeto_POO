export default abstract class Transaction {
    private description: string;
    private value: number;

    constructor(description: string, value: number) {
        this.description = description;
        this.value = value;
    }

    //get e set transaction
    public getdescription(): string {
        return this.description;
    } 

    public setdescription(description: string): void {
        this.description = description;
    }

    //get e set value 
    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public abstract calculateImpact(): number;
}