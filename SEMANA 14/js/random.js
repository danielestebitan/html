function apostar(){
    let b=101; // ingrese al ciclo while
    let intentos=0; // contador
    var a=Math.round(Math.random()*100); //genera numero al azar entre 0 y 100
    // ciclo while
    while (a!=b){
        intentos++;
        b=parseInt(prompt("ingrese VALOR APOSTADO DE 0 A 100"));
        //
        if(b>a){
            alert("EL VALOR ES MAS BAJO");
        }else{
        alert("EL VALOR ES MAS ALTO");
    }
    intentos++;
    }
    document.getElementById("apostado").value=b;
    document.getElementById("resultado").value=a;
    swal("FELICITACIONES USUARIO","HAS ACERTADO NUMERO EXITOSAMENTE","success");
    document.getElementById("salida").value="HAZ ACERTADO NUMERO A LOS .."+intentos+"...intentos";
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}