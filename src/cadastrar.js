function cadastrarEmpresa() {

    var nomePropietario = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var nomeEmpresa = document.getElementById('nome_da_empresa').value;
    var password = document.getElementById('senha').value;
    var telefone = document.getElementById('telefone').value;
    var cnpj = document.getElementById('cnpj').value;

    var id =cnpj.replaceAll('.', '') 
    id = id.replaceAll('/', '') 
    id = id.replaceAll('-', '') 

    firebase.database().ref('Cadastros/Empresas/' + id).set({
        "Nome_do_Propietário": nomePropietario,
        "Email": email,
        "Senha": password,
        "Nome_da_Empresa": nomeEmpresa,
        "Telefone": telefone,
        "CNPJ": cnpj
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

function cadastrarFuncionario(){  
            
    var nome = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;

    var id = cpf.replaceAll('-','')
    id = id.replaceAll('.', '')

    firebase.database().ref('Cadastros/Funcionarios/'+id).set({
        "Nome" : nome,
        "Email" : email,
        "Senha" : password,
        "Telefone" : telefone,
        "CPF" : cpf,
        "CNPJ_da_empresa" : cnpj,
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
        "CPF" : cpf,
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
