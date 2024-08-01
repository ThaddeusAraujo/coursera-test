function res(event){

    

    var valor = document.getElementById("valor").value;
    var porc = document.getElementById("porc").value;

    valor = Number(valor);
    porc = Number(porc);
  
    resul = (valor + valor * (porc / 100));

    document.getElementById("resultado").value = resul;
 // document.getElementsByTagName("h1")[0].innerHTML = resul;

    

}