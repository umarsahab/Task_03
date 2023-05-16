var SubmitButton = document.getElementById('btn')
SubmitButton.addEventListener('click', getTextBoxValueInAlertBox)

function getTextBoxValueInAlertBox(){
   var textBox =  document.getElementById('textbox').value 
   alert(textBox)
}