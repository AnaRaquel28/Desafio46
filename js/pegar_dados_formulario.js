//Quando o usuário clica no botão de envio do formulário, o evento é ativado e a função anônima é executada.
//formulário em um arquivo JSON
document.getElementById("dados-formulario").addEventListener("submit", function(e){
    e.preventDefault();//getElement: obtém o formulário
    
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => formValues[key] = value);
    const jsonData = JSON.stringify(formValues);
    //localStorage, ele armazena os dados nos Cookies do navegador, assim dessa forma, vc consegue acessar eles posteriomente
    localStorage.setItem("formValues", jsonData);
    // window.location.href redireciona a página para o página de exibir resultado
    window.location.href = "pages/exibir_resultado.html";
});