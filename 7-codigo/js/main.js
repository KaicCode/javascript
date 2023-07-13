// && Verifica se as duas  expressão são verdadeiras

var idade = 18;
var nome = "Kaic";

if (nome == "Kaic" && idade == 18) {
    console.log("Pode entrar para ITA");
} else{
    console.log("Não pode entrar para ITA");
}

if ((1 == 1 && 3 > 2) && true) {
    console.log("Passou")
}

// || Ele retorna true se caso uma das operações retornarem verdadeiro

var idade1 = 18;
var nome1 = "Kaic";

if (nome1 == "Kaic" || idade1 == 19) {
    console.log("Pode entrar para ITA");
} else{
    console.log("Não pode entrar para ITA");
}

if ((1 == 2 || 3 > 2) && true) {
    console.log("Passou")
} else {
    console.log("Não passou");
}

// ! Muda o valor que a expressão retornou
// True vira false e false vira true
var nome2 = "Kaic";

if (!(nome2 == "Kaic")) {
    console.log("Passou")
} else {
    console.log("Não passou")
}