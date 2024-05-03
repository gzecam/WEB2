
/* document.addEventListener('DOMContentLoaded', function() {
    var clientes = document.querySelectorAll(".cliente");
    
    clientes.addEventListener('dblclick', function(e) {
      var linha = e.target.closest('tr');
      if (linha.parentNode.nodeName === 'TBODY') {
        linha.parentNode.removeChild(linha);
      }
    });
  }); */

  var table = document.querySelector("table");
  table.addEventListener('dblclick', function(e) {
      e.target.parentNode.remove();
  });

