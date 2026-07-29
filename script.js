// seleção do formulário de pesquisa
const form = document.querySelector('#pesquisa-form');

function pegarRadio(name) {
    const marcado = document.querySelector(`input[name="${name}"]:checked`);
    return marcado ? marcado.value : null;
}

// Retorna um array com os valores dos checkboxes marcados
function pegarCheckboxes(name) {
    const opcoesSelecionadas = document.querySelectorAll(`input[name="${name}"]:checked`);
    const resposta = [];

    for (const opcao of opcoesSelecionadas) {
        resposta.push(opcao.value);
    }

    return resposta;
}


function montarObjeto() {

    const dados = {};

    // Campos de texto
    dados.nome = document.getElementById('nome').value;
    dados.email = document.getElementById('email').value;
    dados.cidade = document.getElementById('cidade').value;
    dados.estado = document.getElementById('estado').value;
    dados.flores_favoritas = document.getElementById('flores-favoritas').value;
    dados.impeditivo = document.getElementById('impeditivo').value;


    // Radio buttons
    dados.faixa = pegarRadio('faixa');
    dados.moradia = pegarRadio('moradia');
    dados.freq = pegarRadio('freq');
    dados.pref = pegarRadio('pref');
    dados.interesse = pegarRadio('interesse');
    dados.frequencia = pegarRadio('frequencia');
    dados.preco = pegarRadio('preco');
    dados.modelo_plano = pegarRadio('modelo-plano');
    dados.canal = pegarRadio('canal');
    dados.forma_recebimento = pegarRadio('forma-recebimento');
    dados.horario = pegarRadio('horario');
    dados.nota_interesse = pegarRadio('nota_interesse');
    dados.news = pegarRadio('news');

    // Checkboxes
    dados.local_compra = pegarCheckboxes('local_compra');
    dados.ocasioes = pegarCheckboxes('ocasioes');
    dados.diferencial = pegarCheckboxes('diferencial');

    return dados;
}

// Retorna o valor do radio selecionado
function pegarRadio(name) {
    const marcado = document.querySelector(`input[name="${name}"]:checked`);
    return marcado ? marcado.value : null;
}

// Retorna um array com os valores dos checkboxes marcados
function pegarCheckboxes(name) {
    const opcoesSelecionadas = document.querySelectorAll(`input[name="${name}"]:checked`);
    const resposta = [];

    for (const opcao of opcoesSelecionadas) {
        resposta.push(opcao.value);
    }

    return resposta;
}


function montarObjeto() {

    const dados = {};

    // Campos de texto
    dados.nome = document.getElementById('nome').value;
    dados.email = document.getElementById('email').value;
    dados.cidade = document.getElementById('cidade').value;
    dados.estado = document.getElementById('estado').value;
    dados.flores_favoritas = document.getElementById('flores-favoritas').value;
    dados.impeditivo = document.getElementById('impeditivo').value;


    // Radio buttons
    dados.faixa = pegarRadio('faixa');
    dados.moradia = pegarRadio('moradia');
    dados.freq = pegarRadio('freq');
    dados.pref = pegarRadio('pref');
    dados.interesse = pegarRadio('interesse');
    dados.frequencia = pegarRadio('frequencia');
    dados.preco = pegarRadio('preco');
    dados.modelo_plano = pegarRadio('modelo-plano');
    dados.canal = pegarRadio('canal');
    dados.forma_recebimento = pegarRadio('forma-recebimento');
    dados.horario = pegarRadio('horario');
    dados.nota_interesse = pegarRadio('nota_interesse');
    dados.news = pegarRadio('news');

    // Checkboxes
    dados.local_compra = pegarCheckboxes('local_compra');
    dados.ocasioes = pegarCheckboxes('ocasioes');
    dados.diferencial = pegarCheckboxes('diferencial');

    return dados;
}



async function salvarPesquisa(dados) {

    const { data, error } = await supabaseClient
        .from('pesquisa_mercado')
        .insert([dados]);

    if (error) {
        console.error(error);
        alert('Erro ao salvar a pesquisa.');
        return;
    }

    console.log(data);
    alert('Pesquisa enviada com sucesso!');
}


// Evento de envio do formulário
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const dados = montarObjeto();

    await salvarPesquisa(dados);

    form.reset();
});