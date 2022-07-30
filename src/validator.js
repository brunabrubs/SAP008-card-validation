const validator = {
  
  isValid: function(creditCardNumber) {
    
    creditCardNumber = creditCardNumber.replace(/ /g, "")
    
    let soma = 0;
    let digitoMultiplicado = 0;
    
    for(let posicao = 0; posicao < creditCardNumber.length; posicao++){

      let digitoDoCartao = Number(creditCardNumber[posicao]);
      const ehImpar = posicao % 2 != 0;

      if(ehImpar){

        digitoMultiplicado = digitoDoCartao * 2; 

        if(digitoMultiplicado > 9){
          
          digitoMultiplicado = digitoMultiplicado - 9;

        }

        soma += digitoMultiplicado;

      }else{
        soma += digitoDoCartao;
      }

    }

    const ehCartaoValido = soma % 10 == 0;
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
