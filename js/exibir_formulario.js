// Obtém os dados do formulário armazenados no localStorage
const jsonData = localStorage.getItem("formValues");
// Transforma a string JSON em um objeto JavaScript
//formValues: é uma variável em JavaScript que armazena os valores dos campos de um formulário HTML.
const formValues = JSON.parse(jsonData); //JSON: para enviar e receber dados estruturados entre aplicativos cliente e servidor pela web.

// Atribui os valores dos campos do formulário a variáveis
// Recupera o valor da propriedade "firstname" do objeto formValues e o armazena em uma variável chamada nome.
//const: é uma palavra-chave e que declara uma constante,um valor que não pode ser alterado depois de ser definido.
const nome = formValues.firstname; 
const dataNascimento = formValues.date;
const nacionalidade = formValues.origem;
const endereco = formValues.end;
const estado = formValues.estado;
const cidade = formValues.cidade;
const numCep = formValues.cep;
const numTelefone = formValues.telefone;
const genero = formValues.gender;

const empresa = formValues.empresa;
const cargo = formValues.cargo;
const inicio = formValues.inicio;
const fim = formValues.fim;
const atividades = formValues.atividades;
const maisExperiencia = formValues.experiencia;
const maisExperienciaSim = formValues.mais;

const habilidade = formValues.habilidade;
const proefHabilidade = formValues.nivel1;
const idioma1 = formValues.idioma1;
const proefIdioma1 = formValues.nivelidioma1;

const habilidadesComportamentais = formValues.habilidades;

const pretensaoSalarial = formValues.salario;
const disponibilidadeInicio =  formValues.disponibilidade;

// Escreve os valores dos campos do formulário na página
/* document.write() é um método do objeto document em JavaScript que permite escrever texto diretamente no documento HTML 
que está sendo exibido em um navegador.*/
document.write('<h3>Dados pessoais</h3>')
document.write('<p>Nome: ' + nome + '.</p>');
document.write('<p>Data de nascimento: ' + dataNascimento + '.</p>');
document.write('<p>Nacionalidade: ' + nacionalidade + '.</p>');
document.write('<p>Estado: ' + estado + '.</p>');
document.write('<p>Cidade: ' + cidade + '.</p>');
document.write('<p>CEP: ' + numCep + '.</p>');
document.write('<p>Telefone: ' + numTelefone + '.</p>');
document.write('<p>Gênero: ' + genero + '.</p>');

document.write('<h3>Experiências Profissionais Adicionais</h3>')
document.write('<p>Empresa: ' + empresa + '.</p>');
document.write('<p>Cargo: ' + cargo + '.</p>');
document.write("<p>Período de atuação: De " + inicio + " até " + fim + ".</p>");
document.write('<p>Atividades: ' + atividades + '.</p>');
document.write('<p>Possui mais experiência: ' + maisExperiencia + '. Se sim, quais? ' + maisExperienciaSim + '.</p>');

document.write('<h3>Habilidades Técnicas e Idiomas</h3>');
document.write('<p>Habilidade: ' + habilidade + '. Proeficiência: ' + proefHabilidade + '.</p>');
document.write('<p>Idiomas: ' + idioma1 + '. Proeficiência: ' + proefIdioma1 + '.</p>');

document.write('<h3>Habilidades Comportamentais</h3>');
document.write('<p>Habilidades: ' + habilidadesComportamentais + '.</p>');

document.write('<h3>Informações Detalhadas Adicionais</h3>');
document.write('<p>Pretensão Salarial: R$' + pretensaoSalarial + '.</p>');
document.write('<p>Disponibilidade para Início: ' + disponibilidadeInicio + '.</p>');