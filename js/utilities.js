function getInputFieldValueById(inputFieldId)
{
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    
    return inputFieldValue;
}

    function setElementValueById(elementId, newValue)
    {
       const textElement = document.getElementById(elementId);
       textElement.innerText = newValue;
    }