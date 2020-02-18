function turnBinaryOnDecimal(){

    var valor = document.getElementById("binary").value;

    if(valor.slice(-1) > 1) {

        document.getElementById("binary").value=document.getElementById("binary").value
        .substring(0,valor.length-1);

        return;
    }
        


    document.getElementById("decimal").value = 
    valor;
    
    


}