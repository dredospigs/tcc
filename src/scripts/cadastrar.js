

function cadastrarFuncionario(){  
            
    var nome = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;

    var ai =cnpj.replaceAll('.', '') 
    ai = ai.replaceAll('/', '') 
    ai = ai.replaceAll('-', '') 

    var id = cpf.replaceAll('-','')
    id = id.replaceAll('.', '')

    firebase.database().ref('Cadastros/Funcionarios/'+id).set({
        "Nome" : nome,
        "Email" : email,
        "Senha" : password,
        "Telefone" : telefone,
        "CPF" : id,
        "CNPJ_da_empresa" : ai,
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function cadastrarCliente(){  
            
    var nome = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('senha').value;
    var estado = document.getElementById('estado').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
    
    var id = cpf.replaceAll('.', '');
    id = id.replaceAll('-', '');
    
    firebase.database().ref('Cadastros/Clientes/' + id).set({
        "Nome" : nome,
        "Email" : email,
        "Senha" : password,
        "Estado" : estado,
        "Telefone" : telefone,
        "CPF" : id,
        "CEP" : cep,
        "Cidade" : cidade
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}
