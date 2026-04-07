import promptSync from 'prompt-sync';
import FinanceController from '../controllers/FinanceController';

export default class ExpenseRegister {
    private prompt = promptSync();
    private controller: FinanceController;
    
    constructor(controller: FinanceController){
        this.controller = controller;
        this.registerAExpense();
    }

    public registerAExpense(): void {
        let expense = this.controller.getNewExpense();

        const description = this.prompt("Digite a descrição da despesa");
        const valueInput = this.prompt("Digite o valor da despesa");
        const value = parseFloat(valueInput);

        expense.setDescription(description);
        expense.setValue(value);

        this.controller.database.expense.push(expense);  
    }


}