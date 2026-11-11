    function notas() {
        
    

let nota1tri;
let nota2tri;
let resultado;

nota1tri = Number(prompt("Digite a nota do 1º trimestre"));
nota2tri = Number(prompt("Digite a nota do 2º trimestre"));

resultado = 180-(nota1tri+nota2tri);
alert(' falta ' + resultado + "pontos")
if (resultado <=0)
    alert("voce precisa de " + media + " pontos ")
else
    alert("voce passou de ano");
    }