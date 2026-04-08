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

        while(open){
            console.log("Menu principal\n");
            console.log(`
                1. Registrar entrada
                2. Registrar despesa
                3. Ver saldo
                4. Ver transações
                5. Sair
                `);

            let option = parseInt(this.prompt("Escolha: "));
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
                    open = false;
                    break;
                default: 
                    console.log("Opção inválida!");
                    break;
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

        this.controller.addExpense(expense);
        console.log("Despesa registrada com sucesso!");    
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