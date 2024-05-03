// Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++){
    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info_qtde").textContent;
    // Captura o valor unitário da encomenda
    var unitario = clientes[count].querySelector(".info_val_unit").textContent;
    

    // Verifica se a quantidade é valida 
    if (!valida_qtd (qtde)){
        // Quantidade não ok, avisa usuário
        clientes[count].querySelector(".info_qtde").textContent = "Valor Inválido";
        clientes[count].classList.add("info-invalida");
        }
    else{
    if (!valida_val_unit(unitario)) {
        // Quantidade não ok, avisa usuário
        clientes[count].querySelector(".info_val_unit").textContent = "Valor Inválido";
        clientes[count].classList.add("info-invalida");
        } else {
            // Quantidade OK, prossegue
            // Calcula o valor total da encomenda
            clientes[count].querySelector(".info_val_tot").textContent = calculaTotal(qtde, unitario);
            clientes[count].querySelector(".info_val_unit").textContent =  formata_unit_tot (parseFloat(unitario));    
                }
        }

// Funçao para o calculo do valor total
function calculaTotal (qtdeEncomenda, unitarioProduto){
    var total = 0;
    total = qtdeEncomenda * unitarioProduto;
    return formata_unit_tot (total);
   
    }  
}