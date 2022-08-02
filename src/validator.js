const validator = {
  
  isValid: function(creditCardNumber) {
    
    creditCardNumber = creditCardNumber.replace(/ /g, "")
    
    let soma = 0;
    let digitoMultiplicado = 0;
    
    for(let posicao = creditCardNumber.length -1; posicao >= 0; posicao--){

      let digitoDoCartao = Number(creditCardNumber[posicao]);
      let contadorPositivo = creditCardNumber.length - posicao;
      const ehPar = contadorPositivo % 2 == 0;

      if(ehPar){

        digitoMultiplicado = digitoDoCartao * 2; 

        if(digitoMultiplicado > 9){
          
          digitoMultiplicado = digitoMultiplicado - 9;

        }

        soma += digitoMultiplicado;

      }else{
        soma += digitoDoCartao;
      }

    }

    const ehCartaoValido = String(soma)[1] == 0;
    return ehCartaoValido;

  },

  maskify: function(creditCardNumber) {

    var quatroUltimosDigitos = creditCardNumber.substr(-4);
    var numerosMascarados = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/\w/g, '#');
    var cartaoMascarado = numerosMascarados + quatroUltimosDigitos;

    return cartaoMascarado;

  }

};

export default validator;
