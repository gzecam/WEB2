var botaoAdicionar = document.querySelector('#botao');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();                                // Impede o envio do formulário
    

    var form = document.querySelector('#formu');

    //Obtém os dados da encomenda
    var encomenda = obtemEncomenda(form);

    //Valida os dados do formulário
    var validacao = validaEncomenda(encomenda);

    //Valida os dados da encomenda
    if(validacao.length>0){
        //Há erros de preenchimento , informa para o usuário
        exibeMensagensErro(validacao);
        return;
    }else{
        //Encomenda OK, insere na tabela
        //Insere a encomenda na tabela
        addEncomenda(obtemEncomenda(form));

        form.reset();

        // Limpa a lista de erros
        document.querySelector("#mensagens-erro").innerHTML = "";
    }
});

    //Função para capturar os dados da encomenda
    function obtemEncomenda (dadosForm){

        var encomenda = {
            nome: dadosForm.nome.value,
            qtde: dadosForm.quantidade.value,
            produto: dadosForm.product.value,
            unitario: dadosForm.unitario.value,
        }
        return encomenda;
    }

    //Função para inserir a encomenda na tabela
    function addEncomenda(dadosEncomenda){

        var tabela=document.querySelector("#tabela-clientes");

        tabela.appendChild(montaTR(dadosEncomenda));
    }

    //Função para criar colunas da tabela
    //<td>nomedocomprador</td>
    function montaTD(dado){

        var td = document.createElement("td");
        td.textContent = dado;

        return td;
    }


    //Função cria linha para a tabela
    function montaTR(dadosEncomenda){

        var tr = document.createElement("tr");

        tr.appendChild(montaTD(dadosEncomenda.nome));
        tr.appendChild(montaTD(dadosEncomenda.produto));
        tr.appendChild(montaTD(dadosEncomenda.qtde));
        tr.appendChild(montaTD(formata_unit_tot(parseFloat(dadosEncomenda.unitario))));
        tr.appendChild(montaTD(calculaTotal(dadosEncomenda.qtde, dadosEncomenda.unitario)));

        return tr;
    }

    //Função para validar os dados da encomenda
    function validaEncomenda(dadosEncomenda){

        var erros = []

        if(dadosEncomenda.nome.length==0){
            erros.push("O nome do cliente não pode ser vazio!");
        }

        if(dadosEncomenda.produto==""){
            erros.push("Por favor, selecione um produto para esta encomenda");
        }

        if(!valida_qtd(dadosEncomenda.qtde) || dadosEncomenda.qtde <=0){
            erros.push("A quantidade é inválida!");
        }

        if(dadosEncomenda.unitario<=0|| isNaN(dadosEncomenda.unitario)){
            erros.push("O valor unitário é inválido!");
        }

        if(erros>0){
            newpopupWindow = window.open ('', 'pagina', "width=600 height=100 top=350 left=400");
            newpopupWindow.document.write (erros); 
        }
        return erros;
    }

    // Função para exibir os erros de preenchimento do formulário
    function exibeMensagensErro(msgs){
        
        var ul = document.querySelector("#mensagens-erro");

        //Limpa a UL
        ul.innerHTML = "";
        msgs.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            
            ul.appendChild(li);
            
        })
        
    }