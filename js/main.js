document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();

  var inpt = document.querySelector('.hisobla').value;
  
  if (isNaN(inpt) || inpt === '') {
    document.querySelector('.degree').textContent = 'error';
    return;
  }

  inpt = parseInt(inpt, 10);

  var result = inpt * 32;

  document.querySelector('.degree').textContent = result + ' F';
});