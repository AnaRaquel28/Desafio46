// Formatar o campo do CEP
function cep(cep){ //criação da função
    // Remove caracteres não-númericos
    cep = cep.replace(/\D/g, ''); 
//RegEx (Expressão Regular). Essa expressão /\D/g detecta algarismos não-numericos, e substitui por um vazio
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');//RegEx, só que nesse caso, ele vai adicionar um traço "-" depois do 5° caracter
    return cep; // função esta sendo retornada
}
// Listener do campo do CEP -  ele vai estar escutando algo
//as ações de input (entrada) no elemento de id 'cep'
document.getElementById('cep').addEventListener('input', function (e){
    var input = e.target; //adiciona o novo estado de valor do campo na variável input
    var formatar = cep(input.value); //ele passa esse valor para a função que expliquei anteriormente
    input.value = formatar; //faz a substituição do valor do campo de texto, pelo formatado
});

// Formatar campo de telefone
const telefone_input = document.getElementById('telefone');
telefone_input.addEventListener('input', function(){
    let telefone = telefone_input.value;
    telefone = telefone.replace(/\D/g, '');

    if(telefone.length === 11){
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    else if(telefone.length === 10){
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }

    telefone_input.value = telefone;
});