const metaABater = document.querySelector('#valorMeta');
const metaInicial = document.querySelector('#inicialMeta');
const metaCheck = document.querySelector('#checkMeta');
const addLitro = document.querySelector('#addLitro');
const removeLitro = document.querySelector('#removeLitro');

function submitMeta(){
    const inputMeta = document.querySelector('#inputMeta');
    const meta = parseFloat((inputMeta.value) / 1000).toFixed(3);
    if (meta > 0) {
        metaABater.textContent = `${meta}L`;
        
        localStorage.setItem('metaABater', meta);
        inputMeta.value = "";
    } else {
        alert('Primeiro, defina uma meta para o seu dia!');
    }
}

function verificarMeta() {
    if (!metaABater.textContent || metaABater.textContent === '0L') {
        alert('Primeiro, defina uma meta para o seu dia!');
        return false;
    }
    return true;
}

function valorMinimo(valor) {
    const valorAtual = parseFloat(metaInicial.textContent.replace('L', '')) * 1000 || 0;
    if(valorAtual + valor < 0){
        alert('Você não pode registrar um valor negativo!');
        return false;
    } else {
        return true;
    }
}

function baterMeta(valor) {
    const meta = parseFloat(metaABater.textContent.replace('L', '')) * 1000 || 0;
    if(valor >= meta) {
        alert('META BATIDA!!!');
        metaCheck.textContent = '✅';

        localStorage.setItem('metaCheck', true)
        return true
    } else {
        metaCheck.textContent = '';
        localStorage.setItem('metaCheck', false)
        return false;
    }
}

function atualizarValor(valor) {
    if (!verificarMeta()) {
        return;
    }

    if (!valorMinimo(valor)) {
        return;
    }

    const valorAtual = parseFloat(metaInicial.textContent.replace('L', '')) * 1000 || 0;
    const novoValor = valorAtual + valor;

    metaInicial.textContent = `${(novoValor / 1000).toFixed(3)}L`;

    localStorage.setItem('valorAtual', novoValor)

    baterMeta(novoValor);
}

function resetar() {
    metaInicial.textContent = '0'
    metaABater.textContent = ''
    metaCheck.textContent = '';

    localStorage.removeItem('valorAtual');
    localStorage.removeItem('metaABater');
    localStorage.removeItem('metaCheck');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const valorAmazenado = localStorage.getItem('valorAtual');
    if(valorAmazenado) {
        metaInicial.textContent = `${(valorAmazenado / 1000).toFixed(3)}L`;
    }

    const metaArmazenada = localStorage.getItem('metaABater');
    if(metaArmazenada) {
        metaABater.textContent = `${metaArmazenada}L`;
    }

    const checkMetaArmazenada = localStorage.getItem('metaCheck');
    if(checkMetaArmazenada === 'true') {
        metaCheck.textContent = `✅`
    } else {
        metaCheck.textContent = ``;
    }
});

function submitPersonalizado() {
    if(addLitro.value == '' || addLitro.value == 0) {
        alert('Insira um valor no campo de digitação!')
    } else {
        atualizarValor(+addLitro.value); 
        addLitro.value = '';
    }
}
function submitDeletePersonalizado() {
    if(removeLitro.value == '' || removeLitro.value == 0) {
        alert('Insira um valor no campo de digitação!')
    }    else {
        atualizarValor(-removeLitro.value); 
        removeLitro.value = '';
    }
}
function submit200() { atualizarValor(200); }
function submitDelete200() { atualizarValor(-200); }
function submit400() { atualizarValor(400); }
function submitDelete400() { atualizarValor(-400); }
function submit600() { atualizarValor(600); }
function submitDelete600() { atualizarValor(-600); }
function submit800() { atualizarValor(800); }
function submitDelete800() { atualizarValor(-800); }
function submit1000() { atualizarValor(1000); }
function submitDelete1000() { atualizarValor(-1000); }
function submit1500() { atualizarValor(1500); }
function submitDelete1500() { atualizarValor(-1500); }