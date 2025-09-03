
n = Math.floor(Math.random() * 100) + 1;
var n, op
alert("Escolha um número de 1 a 100")
op = parseInt(prompt("tentativa 1"))

if(op != n){
    if(op < n){
        op = parseInt(prompt("Muito Baixo!"))
    }    
    else if(op > n){
        op = parseInt(prompt("Muito alto"))
    }
}
else{
    alert("Você acertou!")
}