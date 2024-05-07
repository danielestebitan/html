function calcular(){
    var n1=document.getElementById("valorc").value; //del form al java script
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //proceso calcular
    var ValorA=parseFloat(n1)*parseFloat(n3);
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));
    document.getElementById("valora").value=ValorA;//del js al form
    document.getElementById("valorb").value=ValorB.toFixed(0)
}
function limpiar(){
    document.getElementById("valorc").value=" ";//borrar input de entrada
    document.getElementById("numc").value=" ";
    document.getElementById("interes").value=" ";
}