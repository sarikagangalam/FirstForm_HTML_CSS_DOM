function addData(el) {
    var table = document.getElementById('table1');
    var tr = table.insertRow();
    
    el.form.querySelectorAll('input,select').forEach(function(el) {
        
      var cell = tr.appendChild(document.createElement('td'));
      cell.textContent = el.value;

      el.value = "";

});



}