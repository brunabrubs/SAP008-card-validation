import validator from './validator.js';

window.pegarCreditCardNumber = function pegarCreditCardNumber(){
    let creditCardNumber = document.getElementById('card_number').value

    let nome = document.getElementById('nome').value

    let isValid = validator.isValid(creditCardNumber)
    let cartaoMascarado = validator.maskify(creditCardNumber)

    if(isValid){
        document.getElementById("dono_do_cartao").innerText = (nome)
        document.getElementById("resultado").innerText = (cartaoMascarado + ' Cartão valido')
    }else{
        document.getElementById("dono_do_cartao").innerText = (nome)
        document.getElementById("resultado").innerText = (cartaoMascarado + ' Cartão Invalido')
    }
     
    
}
