import promptSync from 'prompt-sync';
import FinanceController from '../controllers/FinanceController';

export default class IncomeRegister {
    private prompt: promptSync();
    private controller: FinanceController;

    constructor(controller: FinanceController){
        this.controller = controller;
        this.registerAIncome();
    }

    public registerAIncome(): void {
        let income = this.controller.getNewIncome();
    }
}