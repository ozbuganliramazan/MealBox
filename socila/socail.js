var counter = 1;
var counterElement = document.querySelector('.counter');
var counterInput = document.getElementById('counterInput');

function increaseCounter() {
    counter += 1;
    updateCounter();
}

function decreaseCounter() {
    if (counter > 0) {
        counter -= 1;
        updateCounter();
    }
}

function updateCounter() {
    counterElement.textContent = counter;
    counterInput.value = counter;
}



var data = [
    ["2023-06-29 23:48:54", "Can*** maz***", "2"],
    ["2023-06-27 09:33:25", "Fun*** çep***", "50"],
    ["2023-06-25 16:25:24", "Ahm*** ATA***", "10"],
    ["2023-06-24 20:57:00", "bay*** boz***", "10"],
    ["2023-06-24 13:22:10", "Fun*** çep***", "50"],
    ["2023-06-23 18:53:47", "Pel*** Kök***", "3"],
    ["2023-06-23 18:04:45", "Öme*** Far*** Bay***", "3"],
    ["2023-06-23 00:14:13", "Mel*** öz***", "1"],
    ["2023-06-21 17:42:05", "Nes*** Çel***", "17"],
    ["2023-06-19 02:45:11", "Sed*** Alı***", "3"],
    ["2023-06-18 19:58:33", "Ahm*** ATA***", "12"],
    ["2023-06-18 12:34:25", "Ahm*** ATA***", "12"],
    ["2023-06-16 10:09:35", "Müm*** mer***", "2"],
    ["2023-06-15 14:32:31", "Mus*** Akg***", "1"],
    ["2023-06-14 11:55:48", "ker*** emr*** öze***", "1"],
    ["2023-06-14 07:52:16", "Öme*** Far*** Bay***", "2"],
    ["2023-06-14 05:02:59", "Fun*** çep***", "50"],
    ["2023-06-13 17:00:42", "Sem*** Ser*** yav***", "4"],
    ["2023-06-13 16:05:53", "Ahm*** ATA***", "12"],
    ["2023-06-13 15:13:55", "Fat*** Cih*** Çel***", "8"],
    ["2023-06-12 21:17:25", "Ber*** Tak***", "6"],
    ["2023-06-11 16:53:25", "Ker*** Emr*** Öze***", "3"],
    ["2023-06-09 00:12:08", "Far*** Tek***", "50"],
    ["2023-06-08 10:39:46", "Fer*** Erd***", "15"],
    ["2023-06-07 09:15:58", "Sel*** Küt***", "4"],
    ["2023-06-05 14:32:14", "Mus*** Akg***", "1"],
    ["2023-06-04 23:37:58", "Eli*** Tub*** Öz***", "20"],
    ["2023-06-04 18:46:42", "Öme*** Far*** Bay***", "3"],
    ["2023-06-02 17:22:26", "duy*** bak***", "3"],
    ["2023-06-02 16:19:39", "Esr*** aky***", "9"],
    ["2023-06-02 13:41:42", "duy*** bak***", "16"],
    ["2023-06-02 10:51:50", "Sem*** pal*** Ulu***", "4"],
    ["2023-06-02 10:41:10", "ALP*** ÖZS***", "1"],
    ["2023-06-01 10:36:50", "Sin*** Dem***", "6"],
    ["2023-05-31 19:16:21", "Nes*** cel***", "19"],
    ["2023-05-31 13:59:21", "Fun*** çep***", "50"],
    ["2023-05-27 22:52:36", "Cer***", "16"],
    ["2023-05-27 19:58:42", "Ome*** Far*** Bay***", "2"],
    ["2023-05-25 13:27:02", "Büş*** öze***", "3"],
    ["2023-05-25 13:21:46", "Ker*** Emr*** Öze***", "5"],
    ["2023-05-24 22:22:16", "Özn*** koc***", "2"],
    ["2023-05-24 21:00:35", "Ahm*** ATA***", "10"],
    ["2023-05-24 18:29:37", "Ahm*** ATA***", "8"],
    ["2023-05-24 17:54:23", "Ahm*** ATA***", "13"],
    ["2023-05-24 00:19:32", "İdi*** Tun***", "3"],
    ["2023-05-22 11:10:48", "Emr*** Kaz***", "4"],
    ["2023-05-21 20:24:52", "Ayş*** Kır***", "9"],
    ["2023-05-21 20:19:54", "Ayş*** Kır***", "10"],
    ["2023-05-19 22:08:43", "Ome*** Far*** Bay***", "2"],
    ["2023-05-19 15:50:15", "Ali*** afs*** kar***", "20"]
  ];

  var tbody = document.querySelector("#boxTable");

  for (var i = 1; i < data.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < data[i].length; j++) {
      var cell = document.createElement("td");
      cell.textContent = data[i][j];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }


  document.querySelector('.nav-brand i').addEventListener('click', function () {
    document.querySelector('.vertical-header').style.display = 'flex';
  });
  
  document.querySelector('.vertical-header i').addEventListener('click', function () {
    document.querySelector('.vertical-header').style.display = 'none';
  });