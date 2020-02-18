function turnBinaryOnDecimal(){

    var valor = document.getElementById("binary").value;

    if(valor.slice(-1) > 1) {

        document.getElementById("binary").value=document.getElementById("binary").value
        .substring(0,valor.length-1);

        return;
    }
        
    console.log("Binario:" + valor);

    document.getElementById("decimal").value = 
    bin2dec(valor,valor.length);
    
}

// Return decimal number
function bin2dec(binary, position){

    var length = binary.length-1;

    if(position==0){
        return binary.charAt(length-position) * power(2,position);
    }

    return binary.charAt(length-position) *
     power(2,position) + bin2dec(binary, position-1); 
}

function power(number,elevate) {

    if(elevate==0){
        return 1;
    }
    
    return number * power(number,elevate-1);
}