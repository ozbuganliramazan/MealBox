
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  var adSoyad = document.getElementById('adSoyad').value;
  var telefon = document.getElementById('telefon').value;
  var eposta = document.getElementById('eposta').value;
  var kisiSayisi = document.getElementById('kisiSayisi').value;
  var sehir = document.getElementById('sehir').value;
  var hasError = false;

  if (adSoyad === '') {
    hasError = true;
    document.getElementById('adSoyadError').textContent = 'Lütfen boş alanı doldurun.';
    document.getElementById('adSoyad').classList.add('error');
  } else {
    document.getElementById('adSoyadError').textContent = '';
    document.getElementById('adSoyad').classList.remove('error');
  }

  if (telefon === '') {
    hasError = true;
    document.getElementById('telefonError').textContent = 'Lütfen boş alanı doldurun.';
    document.getElementById('telefon').classList.add('error');
  } else {
    document.getElementById('telefonError').textContent = '';
    document.getElementById('telefon').classList.remove('error');
  }

  if (eposta === '') {
    hasError = true;
    document.getElementById('epostaError').textContent = 'Lütfen boş alanı doldurun.';
    document.getElementById('eposta').classList.add('error');
  } else {
    document.getElementById('epostaError').textContent = '';
    document.getElementById('eposta').classList.remove('error');
  }

  if (kisiSayisi === '') {
    hasError = true;
    document.getElementById('kisiSayisiError').textContent = 'Lütfen boş alanı doldurun.';
    document.getElementById('kisiSayisi').classList.add('error');
  } else {
    document.getElementById('kisiSayisiError').textContent = '';
    document.getElementById('kisiSayisi').classList.remove('error');
  }

  if (sehir === '') {
    hasError = true;
    document.getElementById('sehirError').textContent = 'Lütfen boş alanı doldurun.';
    document.getElementById('sehir').classList.add('error');
  } else {
    document.getElementById('sehirError').textContent = '';
    document.getElementById('sehir').classList.remove('error');
  }

  if (hasError) {
    event.preventDefault();
  }
});










document.querySelector('.IconLeft .fa-sharp').addEventListener('click', function () {
  document.querySelector('.vertical-header').style.display = 'flex';
  
});
document.querySelector('.vertical-header .fa-xmark').addEventListener('click', function () {
  document.querySelector('.vertical-header').style.display = 'none';
 
});  




var container = document.querySelector('.image-container');
container.addEventListener('mouseover', function(event) {
  var modal = event.currentTarget.querySelector('.modal');
  modal.style.display = 'block';
});

// Add an event listener to close the modal when mouse leaves the container
container.addEventListener('mouseleave', function(event) {
  var modal = event.currentTarget.querySelector('.modal');
  modal.style.display = 'none';
});



