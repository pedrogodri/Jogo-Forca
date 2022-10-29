let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "ARGENTINA",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "URUGUAI",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "ESPANHA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "FRANCA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "ALEMANHA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "FEIJÃO",
        categoria: "ALIMENTO"
    },
    palavra012 = {
        nome: "ARROZ",
        categoria: "ALIMENTO"
    },
    palavra013 = {
        nome: "ALFACE",
        categoria: "ALIMENTO"
    },
    palavra014 = {
        nome: "HAMBURGUER",
        categoria: "ALIMENTO"
    },
    palavra015 = {
        nome: "FRANGO",
        categoria: "ALIMENTO"
    },
    palavra016 = {
        nome: "PAO",
        categoria: "ALIMENTO"
    },
    palavra017 = {
        nome: "BATATA",
        categoria: "ALIMENTO"
    },
    palavra018 = {
        nome: "CEBOLA",
        categoria: "ALIMENTO"
    },
    palavra019 = {
        nome: "SALSICHA",
        categoria: "ALIMENTO"
    },
    palavra020 = {
        nome: "UVA",
        categoria: "ALIMENTO"
    },
    palavra021 = {
        nome: "PORCO",
        categoria: "ANIMAL"
    },
    palavra022 = {
        nome: "GALINHA",
        categoria: "ANIMAL"
    },
    palavra023 = {
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra024 = {
        nome: "PEIXE",
        categoria: "ANIMAL"
    },
    palavra025 = {
        nome: "GATO",
        categoria: "ANIMAL"
    },
    palavra026 = {
        nome: "COBRA",
        categoria: "ANIMAL"
    },
    palavra027 = {
        nome: "TIGRE",
        categoria: "ANIMAL"
    },
    palavra028 = {
        nome: "LEAO",
        categoria: "ANIMAL"
    },
    palavra029 = {
        nome: "ELEFANTE",
        categoria: "ANIMAL"
    },
    palavra030 = {
        nome: "MACACO",
        categoria: "ANIMAL"
    },
    palavra031 = {
        nome: "PEDRO",
        categoria: "NOME"
    },
    palavra032 = {
        nome: "ANA",
        categoria: "NOME"
    },
    palavra033 = {
        nome: "RAFAEL",
        categoria: "NOME"
    },
    palavra034 = {
        nome: "PAULO",
        categoria: "NOME"
    },
    palavra035 = {
        nome: "FRED",
        categoria: "NOME"
    },
    palavra036 = {
        nome: "DIEGO",
        categoria: "NOME"
    },
    palavra037 = {
        nome: "DANILO",
        categoria: "NOME"
    },
    palavra038 = {
        nome: "EMILY",
        categoria: "NOME"
    },
    palavra039 = {
        nome: "VITOR",
        categoria: "NOME"
    },
    palavra040 = {
        nome: "LUIZ",
        categoria: "NOME"
    },
    palavra041 = {
        nome: "AMARELO",
        categoria: "COR"
    },
    palavra042 = {
        nome: "AZUL",
        categoria: "COR"
    },
    palavra043 = {
        nome: "VERMELHO",
        categoria: "COR"
    },
    palavra044 = {
        nome: "VERDE",
        categoria: "COR"
    },
    palavra045 = {
        nome: "ROSA",
        categoria: "COR"
    },
    palavra046 = {
        nome: "ROXO",
        categoria: "COR"
    },
    palavra047 = {
        nome: "LARANJA",
        categoria: "COR"
    },
    palavra048 = {
        nome: "BRANCO",
        categoria: "COR"
    },
    palavra049 = {
        nome: "PRETO",
        categoria: "COR"
    },
    palavra050 = {
        nome: "CINZA",
        categoria: "COR"
    },
    palavra051 = {
        nome: "LARANJA MECANICA",
        categoria: "FILMES E SÉRIES"
    },
    palavra052 = {
        nome: "STRANGER THINGS",
        categoria: "FILMES E SÉRIES"
    },
    palavra053 = {
        nome: "BOB ESPONJA",
        categoria: "FILMES E SÉRIES"
    },
    palavra054 = {
        nome: "BATMAN",
        categoria: "FILMES E SÉRIES"
    },
    palavra055 = {
        nome: "A ERA DO GELO",
        categoria: "FILMES E SÉRIES"
    },
    palavra056 = {
        nome: "MORTE NO NILO",
        categoria: "FILMES E SÉRIES"
    },
    palavra057 = {
        nome: "SONIC",
        categoria: "FILMES E SÉRIES"
    },
    palavra058 = {
        nome: "THE WALKING DEAD",
        categoria: "FILMES E SÉRIES"
    },
    palavra059 = {
        nome: "EMILY IN PARIS",
        categoria: "FILMES E SÉRIES"
    },
    palavra060 = {
        nome: "VINGADORES ULTIMATO",
        categoria: "FILMES E SÉRIES"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
}

mostrarPalavraTela();
function mostrarPalavraTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraSecreta = document.getElementById("palavra-secreta");
    palavraSecreta.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraSecreta.innerHTML += "<div class='letrasEspaco' >" + listaDinamica[i] + "</div>";
            }
            else {
                listaDinamica[i] = "&nbsp;";
                palavraSecreta.innerHTML += "<div class='letras' >" + listaDinamica[i] + "</div>";
            }
        }
        else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraSecreta.innerHTML += "<div class='letrasEspaco' >" + listaDinamica[i] + "</div>";
            }
            else {
                palavraSecreta.innerHTML += "<div class='letras' >" + listaDinamica[i] + "</div>";
            }
        }
    }
}

function verificarLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        compararListas(letra);
        mostrarPalavraTela();
    }
}

function mudarStyleLetra(tecla, condicao) {
    if (condicao == false) {
        document.getElementById(tecla).style.background = "#800080";
        document.getElementById(tecla).style.color = "#ffffff";
    } else {
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

}

function compararListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregarImagemForca();
        if (tentativas == 0) {
            abreModal("OPS!", "NÃO FOI DESTA VEZ ... A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotaoJogarNovamente();
        }
    }
    else {
        mudarStyleLetra("tecla-" + letra, true);
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", "VOCÊ VENCEU...!");
        tentativas = 0;
        piscarBotaoJogarNovamente();
    }
}

async function piscarBotaoJogarNovamente() {
    while (jogarNovamente) {
        document.getElementById("btn-reiniciar").style.backgroundColor = 'red';
        document.getElementById("btn-reiniciar").style.scale = 1.3;
        await atraso(500);
        document.getElementById("btn-reiniciar").style.backgroundColor = 'yellow';
        document.getElementById("btn-reiniciar").style.scale = 1;
        await atraso(500);
    }
}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo))
}

function carregarImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./_img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./_img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./_img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./_img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./_img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./_img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./_img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("myModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    })
}

let btnReiniciar = document.querySelector("#btn-reiniciar");
btnReiniciar.addEventListener("click", function () {
    jogarNovamente = false;
    location.reload();
});