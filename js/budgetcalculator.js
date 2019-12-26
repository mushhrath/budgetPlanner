let newPerson;

let submitBudget = function(){
    let name = $('#name').val() || false,
        income = $('#income').val() || 0,
        expense = $('#expense').val() || 0,
        loan = $('#loan').val() || 0,
    newPerson = new BudgetCalc(name, income, loan, expense);
    console.log(newPerson);
    SavePerson(newPerson);
}

let SavePerson = function(person){
    let budgetPlanner = JSON.parse(localStorage.getItem('budgetPlanner')) || false;
    if(budgetPlanner){
        let i = budgetPlanner.length,
            duplicate = false;
        while(i--){
            if(budgetPlanner[i].name === person.name) 
            {
                duplicate = true;
                break;
            } 
        }
        if(!duplicate){
            budgetPlanner.push(person);
            localStorage.setItem('budgetPlanner', JSON.stringify(budgetPlanner));
        } else {
            console.log('throw Error');
        }
        
    } else {
        localStorage.setItem('budgetPlanner', JSON.stringify([person]));
    }
    clearForm();
}

let clearForm = function() {
    $('#name').val('');
    $('#income').val('');
    $('#expense').val('');
    $('#loan').val('');
}

let BudgetCalc = function(name, income, loans, expense){
    this.name = name;
    this.income = income;
    this.loans = loans;
    this.expense = expense;
}

let loans = function(home, car, bike){
    this.home = home;
    this.car = car;
    this.bike = bike;
}

/*export default class BudgetCalc {
    constructor(name, income, loans,expense) {
        this.name = name;
        this.income = income;
        this.loans = loans;
        this.expense = expense;
    }

    get totalBalance() {
        return this.income - this.loans - this.expense;
    }

    get totalExpenses() {
        return this.loans + this.expense;
    }

    get yearlyExpenses() {
        return this.totalExpenses() * 12
    }
}*/

