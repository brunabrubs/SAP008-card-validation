const validator = {
  
  isValid(creditCardNumber) {
    
    creditCardNumber = creditCardNumber.replace(/ /g, "")
    
    let somaTotal = 0;
    let somaNaoMultiplicado = 0;
    let numeroMultiplicado = 0;
      //tamanho do cartao é impar
    if(creditCardNumber.length % 2 != 0){

      //percorer do zero ate enquanto o numero for menor que o tamanho do numero do cartao de 1 em 1 
      for(let numero = 0; numero < creditCardNumber.length; numero++) {
        //verificando se o numero e impar,se for impar vou multiplicar apartir da posicao impar e ver se maior q 10 
        if(numero % 2 != 0){
          
          numeroMultiplicado = creditCardNumber[numero] * 2;
          //se o numero for maior ou igual a 10 subtrair por 9
          if(numeroMultiplicado >= 10) {
            numeroMultiplicado = numeroMultiplicado - 9;
          }

          somaTotal += numeroMultiplicado;

            //se a posiçao nao for impar,pegar o valor e jogar em soma total
        }else{
          somaNaoMultiplicado = Number(creditCardNumber[numero]);
          somaTotal += somaNaoMultiplicado;

        }

      }

    }else{
      for(let numero = 0; numero < creditCardNumber.length; numero++) {

        if(numero % 2 == 0){
          
          numeroMultiplicado = creditCardNumber[numero] * 2;

          if(numeroMultiplicado >= 10) {
            numeroMultiplicado = numeroMultiplicado - 9;
          }

          somaTotal += numeroMultiplicado;

            
        }else{
          somaNaoMultiplicado = Number(creditCardNumber[numero]);
          somaTotal += somaNaoMultiplicado;

        }

      }
      
    }

    console.log("total da soma dos digitos: " + somaTotal);

    if (String(somaTotal)[1] == "0") {
      return true
    } else {
      return false
    }

  },

  maskify(creditCardNumber) {
    var quatroUltimosDigitos = creditCardNumber.substr(-4);
    var numerosMascarados = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/\w/g, '#');
    var cartaoMascarado = numerosMascarados + quatroUltimosDigitos;

    return cartaoMascarado;

  }

};

export default validator;
