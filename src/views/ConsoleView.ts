import FinanceController from "../controllers/FinanceController";
import TransactionType from "../models/TransactionType";
import promptSync from "prompt-sync";

export default class ConsoleView {
    private prompt = promptSync();

    constructor(private controller: FinanceController) {
        this.mainMenu();
    }

    public mainMenu(): void {
        let open = true;

        while (open) {
            console.clear();

            console.log("1. Registrar entrada");
            console.log("2. Registrar despesa");
            console.log("3. Ver saldo");
            console.log("4. Ver transações");
            console.log("5. Sair");

            const option = parseInt(this.prompt("Escolha: "));

            switch (option) {
                case 1:
                    this.register(TransactionType.INCOME);
                    break;
                case 2:
                    this.register(TransactionType.EXPENSE);
                    break;
                case 3:
                    this.showBalance();
                    break;
                case 4:
                    this.showTransactions();
                    break;
                case 5:
                    open = false;
                    break;
            }

            if (open) this.prompt("\nENTER...");
        }
    }

    private register(type: TransactionType): void {
        const description = this.prompt("Descrição: ");

        const input = this.prompt("Valor: ").replace(",", ".");
        const value = parseFloat(input);

        if (isNaN(value)) {
            console.log("Valor inválido! Digite um número.");
            return;
        }

        try {
            const transaction = this.controller.createTransaction(
                description,
                value,
                type
            );

            const success = this.controller.addTransaction(transaction);

            if (!success) {
                console.log("Saldo insuficiente!");
            } else {
                console.log("Registrado com sucesso!");
            }

        } catch (error: any) {
            console.log(error.message);
        }
    }

    public showBalance(): void {
        const balance = this.controller.getBalance();
        console.log(`Saldo: R$ ${balance.toFixed(2)}`);
    }

    public showTransactions(): void {
        this.controller.getTransactions().forEach((t, index) => {
            const sinal = t.getType() === TransactionType.EXPENSE ? "-" : "+";

            console.log(
                `${index + 1} - ${t.getDescription()} | ${sinal} R$ ${t.getValue()}`
            );
        });
    }
}