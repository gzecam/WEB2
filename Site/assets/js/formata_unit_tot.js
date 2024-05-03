// Formata o valor unitário e total para Float e adiciona o R$
function formata_unit_tot(valor){
        var valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); 
        return valor;
    }