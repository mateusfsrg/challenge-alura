let amigos = []; // Lista de amigos

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpar input
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

// Função para atualizar a lista visualmente
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteio = [...amigos]; // Copia da lista original
    let resultado = {};
    
    do {
        sorteio = shuffle([...amigos]); // Embaralha a lista
    } while (sorteio.some((amigo, i) => amigo === amigos[i])); // Garante que ninguém tire a si mesmo

    amigos.forEach((amigo, i) => {
        resultado[amigo] = sorteio[i];
    });

    exibirResultado(resultado);
}

// Função para exibir os resultados do sorteio
function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (let amigo in resultado) {
        let li = document.createElement("li");
        li.textContent = `${amigo} → ${resultado[amigo]}`;
        listaResultado.appendChild(li);
    }
}

// Função para embaralhar um array (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
