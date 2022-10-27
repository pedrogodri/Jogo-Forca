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
    }
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
            listaDinamica[i] = "&nbsp;";
            palavraSecreta.innerHTML += "<div class='letras' >" + listaDinamica[i] + "</div>";
        }
        else {
            palavraSecreta.innerHTML += "<div class='letras' >" + listaDinamica[i] + "</div>";
        }
    }
}

function verificarLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        compararListas(letra);
        mostrarPalavraTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#800080";
    document.getElementById(tecla).style.color = "#ffffff";
}

function compararListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregarImagemForca();
        if(tentativas == 0) {
            abreModal("OPS!", "NÃO FOI DESTA VEZ ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else {
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
    }
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
        show : true
    })
}

let btnReiniciar = document.querySelector("#btn-reiniciar");
btnReiniciar.addEventListener("click", function() {
    location.reload();
});