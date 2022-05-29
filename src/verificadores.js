function validaNulo(dado){
    if(dado.value === ""){
        dado.placeholder="Preencha esse campo"
        dado.style.borderColor = "#ff0000";
        dado.style.outline = "#ff0000";
        dado.focus();
        dado.onkeydown = function keydown_nome() {
            dado.placeholder=""
            dado.style.borderColor = "#999999";
            dado.style.outline = null;
        }
        return false
    }
    return true
}

function validaCNPJ(cnpjElement){

    var cnpj = cnpjElement.value;
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') {
        cnpjElement.style.borderColor = "#ff0000";
        cnpjElement.placeholder="Preencha esse campo"
        cnpjElement.style.outline = "#ff0000";
        cnpjElement.focus();
        cnpjElement.onkeydown = function keydown_nome() {
            cnpjElement.style.borderColor = "#999999";
            cnpjElement.placeholder=""
            cnpjElement.style.outline = null;
        }
        return false;
    }
    
    if (cnpj.length != 14){
        cnpjElement.style.borderColor = "#ff0000";
        cnpjElement.placeholder="Preencha esse campo"
        cnpjElement.style.outline = "#ff0000";
        cnpjElement.focus();
        cnpjElement.onkeydown = function keydown_nome() {
            cnpjElement.style.borderColor = "#999999";
            cnpjElement.placeholder=""
            cnpjElement.style.outline = null;
        }
        return false;
    }                

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){

            cnpjElement.style.borderColor = "#ff0000";
            cnpjElement.placeholder="Preencha esse campo"
            cnpjElement.style.outline = "#ff0000";
            cnpjElement.focus();
            cnpjElement.onkeydown = function keydown_nome() {
                cnpjElement.style.borderColor = "#999999";
                cnpjElement.placeholder=""
                cnpjElement.style.outline = null;
            }
            return false;
    }                
        
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        cnpjElement.style.borderColor = "#ff0000";
        cnpjElement.placeholder="Preencha esse campo"
        cnpjElement.style.outline = "#ff0000";
        cnpjElement.focus();
        cnpjElement.onkeydown = function keydown_nome() {
            cnpjElement.style.borderColor = "#999999";
            cnpjElement.placeholder=""
            cnpjElement.style.outline = null;
        }
        return false;
    }
        
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        cnpjElement.style.borderColor = "#ff0000";
        cnpjElement.placeholder="Preencha esse campo"
        cnpjElement.style.outline = "#ff0000";
        cnpjElement.focus();
        cnpjElement.onkeydown = function keydown_nome() {
            cnpjElement.style.borderColor = "#999999";
            cnpjElement.placeholder=""
            cnpjElement.style.outline = null;
        }
        return false;
    }             
        
    return true;
}

function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;

    if(!re.test(email.value)){
        email.style.borderColor = "#ff0000";
        email.placeholder="Preencha esse campo"
        email.style.outline = "#ff0000";
        email.focus();
        email.onkeydown = function keydown_nome() {
            email.style.borderColor = "#999999";
            email.placeholder=""
            email.style.outline = null;
        }
      return false;
    }
    return true
}

function validaLetras(palavra) {
    var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (!filter_nome.test(palavra.value)) {
        palavra.placeholder="Preencha esse campo"
        palavra.style.borderColor = "#ff0000";
        palavra.style.outline = "#ff0000";
        palavra.focus();
        palavra.onkeydown = function keydown_nome() {
            palavra.placeholder="Preencha esse campo"
            palavra.style.borderColor = "#999999";
            palavra.style.outline = null;
        }
        return false;
    }
    return true;
}

function validarCPF(cpfElement) {	
    var cpf = cpfElement.value
    cpf = cpf.replace(/[^\d]+/g,'');

    if(cpf == ''){
        cpfElement.style.borderColor = "#ff0000";
        cpfElement.placeholder="Preencha esse campo"
        cpfElement.style.outline = "#ff0000";
        cpfElement.focus();
        cpfElement.onkeydown = function keydown_nome() {
            cpfElement.style.borderColor = "#999999";
            cpfElement.placeholder=""
            cpfElement.style.outline = null;
        }
        return false;	
    } 

    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999"){

            cpfElement.style.borderColor = "#ff0000";
            cpfElement.style.outline = "#ff0000";
            cpfElement.placeholder="Preencha esse campo"
            cpfElement.focus();
            cpfElement.onkeydown = function keydown_nome() {
                cpfElement.style.borderColor = "#999999";
                cpfElement.placeholder=""
                cpfElement.style.outline = null;
            }
            return false;
        }
            
    // Valida 1o digito	
    add = 0;	
    for (i=0; i < 9; i ++)		
        add += parseInt(cpf.charAt(i)) * (10 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)		
            rev = 0;	
        if (rev != parseInt(cpf.charAt(9)))	{

            cpfElement.style.borderColor = "#ff0000";
            cpfElement.style.outline = "#ff0000";
            cpfElement.placeholder="Preencha esse campo"
            cpfElement.focus();
            cpfElement.onkeydown = function keydown_nome() {
                cpfElement.style.borderColor = "#999999";
                cpfElement.placeholder=""
                cpfElement.style.outline = null;
            }
            return false;
        }	
            
                    
    // Valida 2o digito	
    add = 0;	
    for (i = 0; i < 10; i ++)		
        add += parseInt(cpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
        rev = 0;	
    if (rev != parseInt(cpf.charAt(10))){
        cpfElement.style.borderColor = "#ff0000";
        cpfElement.style.outline = "#ff0000";
        cpfElement.placeholder="Preencha esse campo"
        cpfElement.focus();
         cpfElement.onkeydown = function keydown_nome() {
            cpfElement.style.borderColor = "#999999";
            cpfElement.placeholder=""
            cpfElement.style.outline = null;
        }
        return false;
    }                		
    return true;   
}
