
$(document).ready(function() {
    setTimeout(function () {
        let budgetData = JSON.parse(localStorage.getItem('budgetPlanner')) || null;
        if(budgetData){
            let i = budgetData.length;
            console.log('budget ', i)
            $('#name').append(budgetData[0].name);
            $('#income').append(budgetData[0].income);
            $('#expense').append(budgetData[0].expense);
        }
    }, 1000)

});