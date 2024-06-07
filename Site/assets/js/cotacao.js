    var hoje = new Date;

    var dataCotacao = (hoje.getMonth()+1)+ '-' + hoje.getDate()+ '-' + hoje.getFullYear();
    var dataHoje = hoje.getDate() + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear(); 

    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='"+dataCotacao+"'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var cotacoes = JSON.parse(resposta);

        var dolarVenda = cotacoes["value"][0]["cotacaoVenda"].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        var dolarCompra = cotacoes["value"][0]["cotacaoCompra"].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        var dataHoraCotacao = new Date(cotacoes["value"][0]["dataHoraCotacao"]).toLocaleString('pt-BR', { timezone: 'UTC' });
    
        var msg_dolar = "No dia " + dataHoje + 
                        ", a cotação do dólar para Venda é " + dolarVenda +
                        ", para Compra é " + dolarCompra +
                        " e foi definido em " + dataHoraCotacao;

        return document.querySelector("#cotacao_dolar").textContent = msg_dolar;
    })
    xhr.send();
