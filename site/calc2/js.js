function res(){

    

    var valor = document.getElementById("valor").value;
    var porc = document.getElementById("porc").value;

    valor = Number(valor);
    porc = Number(porc);

    var resul = (valor + valor * (porc / 100));

    document.getElementById("resultado").value = resul;
    

}


function res2(){

    

    var valor2 = document.getElementById("valor2").value;
    var porc2 = document.getElementById("porc2").value;

    valor2 = Number(valor2);
    porc2 = Number(porc2);

    var resul2A = porc2 * 0.010 + 1;
    var resul2 = Math.round(valor2 / resul2A);

    document.getElementById("resultado2").value = resul2;
    

}