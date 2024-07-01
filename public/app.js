let expression = '';
const resultInput = document.getElementById('result');

function appendNumber(number) {
  expression += number;
  resultInput.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  resultInput.value = expression;
}

function appendDecimal(decimal) {
  expression += decimal;
  resultInput.value = expression;
}

function calculate() {
  try {
    const result = math.evaluate(expression);
    resultInput.value = result;
    expression = '';
  } catch (error) {
    resultInput.value = 'Error';
    expression = '';
  }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registro exitoso
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // Registro fallido
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  