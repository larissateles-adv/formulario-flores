const form = document.querySelector('#pesquisa-form');
const statusElement = document.querySelector('#mensagem-status');

function pegarRadio(name) {
    const marcado = document.querySelector(`input[name="${name}"]:checked`);
    return marcado ? marcado.value : null;
}

function pegarCheckboxes(name) {
    const opcoesSelecionadas = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(opcoesSelecionadas, (opcao) => opcao.value);
}

function lerCampo(id) {
    const campo = document.getElementById(id);
    return campo ? campo.value : '';
}

function mostrarMensagem(texto, tipo = 'info') {
    if (!statusElement) return;

    statusElement.textContent = texto;
    statusElement.className = `mensagem-status ${tipo}`;
}

function montarObjeto() {
    const dados = {};

    dados.nome = lerCampo('nome');
    dados.email = lerCampo('email');
    dados.cidade = lerCampo('cidade');
    dados.estado = lerCampo('estado');
    dados.flores_favoritas = lerCampo('flores-favoritas');
    dados.impeditivo = lerCampo('impeditivo');

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

    dados.local_compra = pegarCheckboxes('local_compra');
    dados.ocasioes = pegarCheckboxes('ocasioes');
    dados.diferencial = pegarCheckboxes('diferencial');

    return dados;
}

async function salvarPesquisa(dados) {
    if (typeof supabaseClient === 'undefined' || !supabaseClient) {
        throw new Error('Cliente do Supabase não foi inicializado.');
    }

    const { data, error } = await supabaseClient
        .from('pesquisa_mercado')
        .insert([dados]);

    if (error) {
        throw error;
    }

    return data;
}

if (form) {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        mostrarMensagem('Enviando sua resposta...', 'info');

        const dados = montarObjeto();

        try {
            await salvarPesquisa(dados);
            mostrarMensagem('Resposta recebida com sucesso. Agradecemos por contribuir com esta proposta.', 'success');
            form.reset();
        } catch (error) {
            console.error(error);
            mostrarMensagem('Houve um pequeno imprevisto ao registrar sua resposta. Tente novamente em instantes.', 'error');
        }
    });
}