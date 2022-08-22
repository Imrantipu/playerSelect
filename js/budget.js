document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBudget = getInputFieldValueById('budget-field');
    const playerTotalExpenses = perPlayerBudget * 5;
    setElementValueById('player-cost-element', playerTotalExpenses);
});