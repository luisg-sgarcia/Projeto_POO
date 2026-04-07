export default abstract class Transaction {
    private description: string;
    private value: number;

    constructor(description: string, value: number) {
        this.description = description;
        this.value = value;
    }

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

    public abstract calculateImpact(): number;
}