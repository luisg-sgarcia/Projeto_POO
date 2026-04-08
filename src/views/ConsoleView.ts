import FinanceController from "../controllers/FinanceController";
import promptSync from 'prompt-sync';

export default class ConsoleView {
    private prompt = promptSync();
    private controller: FinanceController;

    constructor(controller: FinanceController){
        this.controller = controller;
        this.mainMenu();
    }

    public mainMenu(): void {
        let open: boolean = true;

        while (open) {
            console.clear();

            console.log("=================================");
            console.log("      💰 SISTEMA FINANCEIRO      ");
            console.log("=================================\n");

            console.log("1. Registrar entrada");
            console.log("2. Registrar despesa");
            console.log("3. Ver saldo");
            console.log("4. Ver transações");
            console.log("5. Sair\n");

            const option = parseInt(this.prompt("👉 Escolha uma opção: "));

            switch (option) {
                case 1:
                    this.registerAIncome();
                    break;
                case 2:
                    this.registerAExpense();
                    break;
                case 3:
                    this.showBalance();
                    break;
                case 4:
                    this.showTransactions();
                    break;
                case 5:
                    console.log("\nSaindo do sistema...");
                    open = false;
                    break;
                default:
                    console.log("\n❌ Opção inválida!");
                    break;
            }

            if (open) {
                this.prompt("\nPressione ENTER para continuar...");
            }
        }
    }

    public registerAIncome(): void {
        const description = this.prompt("Digite a descrição da entrada: ");
        const value = parseFloat(this.prompt("Digite o valor da entrada: "));

        if (isNaN(value)) {
            console.log("Valor inválido! Digite um número.");
            return;
        }

        if (value <= 0) {
            console.log("O valor deve ser maior que 0.");
            return;
        }

        const income = this.controller.createIncome(description, value);

        this.controller.addIncome(income);    
        console.log("Entrada registrada com sucesso!");
    }

    public registerAExpense(): void {
        const description = this.prompt("Digite a descrição da despesa: ");
        const value = parseFloat(this.prompt("Digite o valor da despesa: "));

        if (isNaN(value)) {
            console.log("Valor inválido! Digite um número.");
            return;
        }

        if (value <= 0) {
            console.log("O valor deve ser maior que 0.");
            return;
        }

        const expense = this.controller.createExpense(description, value);

        const success = this.controller.addExpense(expense);

        if (success) {
            console.log("Despesa registrada com sucesso!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    public showBalance(): void {
        const balance = this.controller.getBalance();
        console.log(`Saldo atual: R$ ${balance.toFixed(2)}`);    
    }

    public showTransactions(): void {
        console.log("\nEntradas:");
        this.controller.database.income.forEach((i, index) => {console.log(`${index + 1} - ${i.getDescription()} | R$ ${i.getValue()}`);});

        console.log("\nDespesas:");
        this.controller.database.expense.forEach((e, index) => {console.log(`${index + 1} - ${e.getDescription()} | R$ ${e.getValue()}`);});
    }
}