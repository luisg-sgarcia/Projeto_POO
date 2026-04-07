import promptSync from 'prompt-sync';
import FinanceController from '../controllers/FinanceController';

export default class IncomeRegister {
    private prompt = promptSync();
    private controller: FinanceController;

    constructor(controller: FinanceController){
        this.controller = controller;
        this.registerAIncome();
    }

    public registerAIncome(): void {
        let income = this.controller.getNewIncome();

        const description = this.prompt("Digite a descrição da entrada");
        const valueinput = this.prompt("Digite o valor da entrada");
        const value = parseFloat(valueinput);

        income.setDescription(description);
        income.setValue(value);

        this.controller.database.income.push(income);
    }
}   