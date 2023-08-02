    var palavras = ['abaffiato','accio','colloportus'];
    var palavras1 = ["aguamenti", "crucio"];
    
    var resposta = [];
    var resposta1 = [];
    
    for (var palavra of palavras){
      var palavraLimpa = palavra[0];
      
        for(var i = 1; i < palavra.length; i++){
          if (palavra[i] !== palavra[i - 1]){
            palavraLimpa += palavra[i];
          }
        }
        
        resposta.push(palavraLimpa);
    }
    
    for (var palavra of palavras1){
      var palavraLimpa1 = palavra[0];
      
        for(var i = 1; i < palavra.length; i++){
          if (palavra[i] !== palavra[i - 1]){
            palavraLimpa1 += palavra[i];
          }
        }
        
        resposta.push(palavraLimpa);
    }

    console.log(resposta);
    
    return resposta, resposta1