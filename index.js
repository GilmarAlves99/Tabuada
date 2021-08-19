function tabuada() {
    var num = parseInt(document.getElementById("num").value);
   
    var resposta = document.getElementById('resposta');
    var tabuada = '';
  
    if (isNaN(num)) {
    
        resposta.innerHTML = "<h3 style='color:red'>Infome um numero</h3>";
    } else {
   

        for (var count = 1; count <= 10; count++) {
        tabuada += "<tr><td style='border:2px solid black;'>"+ 
            num + " x " + count + " = " +
            num * count +" </td> </tr><br/>";
            }
            resposta.innerHTML = tabuada;
    }
}