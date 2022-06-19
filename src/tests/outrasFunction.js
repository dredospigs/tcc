/*
        function consultar(){
            document.getElementById('id1').value = ""

            var dadosClientes = firebase.database().ref('Cadastros/Empresas');
            dadosClientes.on('value', (snapshot) => {
                snapshot.forEach(function(item) {
                    var data = item.val();
                    var stringDados = 
                        data.CNPJ + " - " +
                        data.Nome_da_Empresa + " - " +
                        data.Nome_do_Propietário + " - " +
                        data.Email + " - " +
                        data.Senha + " - " + 
                        data.Telefone + " - " 

                    document.getElementById('id1').value += stringDados +'\r\n'                        
                })
            });           
        }*/
        
        /*function update(){
            if(whereIs === 0){
                var cnpjU= document.getElementById('cnpjU').value;
                cnpjU = cnpjU.replace(/[^\d]+/g,'');
                var dadosClientes = firebase.database().ref('Cadastros/Empresas/' + cnpjU + '/');

                dadosClientes.on('value', (snapshot) => {
                        var data = snapshot.val();
                        var c = document.getElementById('cnpj');

                        document.getElementById('name').value = data.Nome_do_Propietário;
                        document.getElementById('mail').value = data.Email;
                        document.getElementById('nome_da_empresa').value = data.Nome_da_Empresa;
                        document.getElementById('senha').value = data.Senha;
                        document.getElementById('telefone').value = data.Telefone;
                        document.getElementById('cnpj').value = data.CNPJ;
                        
                        c.value = data.CNPJ;
                        c.disabled = true;
                        
                        document.getElementById('btn').textContent = "ATUALIZAR";
                        document.getElementById('btnAtualizar').textContent = "CANCELAR";
                });  
                
                whereIs = 1;
            }
            else{
                document.getElementById('btn').textContent = "CADASTRAR";                
                document.getElementById('btnAtualizar').textContent = "SELECIONE PARA ATUALIZAR";
                limparCampos();
                document.getElementById('cnpj').disabled = false
                whereIs = 0;
            }
        }

        function deletar(){            
            var cnpjD = document.getElementById('cnpjD').value;
            cnpjD = cnpjD.replace(/[^\d]+/g,'');

            firebase.database().ref().child('/Cadastros/Empresas/' + cnpjD).remove();
        }
        */
       

          /*
        function consultar(){
            document.getElementById('id1').value = ""

            var dadosClientes = firebase.database().ref('Cadastros/Funcionarios');
            dadosClientes.on('value', (snapshot) => {
                snapshot.forEach(function(item) {
                    var data = item.val();
                    var stringDados = 
                        data.Nome + " - " +
                        data.Email + " - " +
                        data.Senha + " - " +
                        data.CPF + " - " + 
                        data.CNPJ_da_empresa + " - " +
                        data.Telefone + " - " 
                    document.getElementById('id1').value += stringDados +'\r\n'                        
                })
            });           
        }

        function update(){
            if(whereIs === 0){
                var cpfU = document.getElementById('cpfU').value;
                cpfU = cpfU.replace(/[^\d]+/g,'');
                var dadosClientes = firebase.database().ref('Cadastros/Funcionarios/' + cpfU + '/');

                dadosClientes.on('value', (snapshot) => {
                        var data = snapshot.val();
                        var c = document.getElementById('cpf');

                        document.getElementById('name').value = data.Nome;
                        document.getElementById('mail').value = data.Email;
                        document.getElementById('password').value = data.Senha;
                        document.getElementById('telefone').value = data.Telefone;
                        document.getElementById('cpf').value = data.CPF;
                        document.getElementById('cnpj').value = data.CNPJ_da_empresa;     
                        
                        c.value = data.CPF;
                        c.disabled = true;
                        
                        document.getElementById('btn').textContent = "ATUALIZAR";
                        document.getElementById('btnAtualizar').textContent = "CANCELAR";
                });  
                
                whereIs = 1;
            }
            else{
                document.getElementById('btn').textContent = "CADASTRAR";                
                document.getElementById('btnAtualizar').textContent = "SELECIONE PARA ATUALIZAR";
                limparCampos();
                document.getElementById('cpf').disabled = false
                whereIs = 0;
            }
        }

        function deletar(){            
            var cpfD = document.getElementById('cpfD').value;
            cpfD = cpfD.replace(/[^\d]+/g,'');

            firebase.database().ref().child('/Cadastros/Funcionarios/' + cpfD).remove();
        }
        */
        /*
        function consultar(){
            document.getElementById('id1').value = ""

            var dadosClientes = firebase.database().ref('Cadastros/Clientes');
            dadosClientes.on('value', (snapshot) => {
                snapshot.forEach(function(item) {
                    var data = item.val();
                    var stringDados = 
                        data.Nome + " - " +
                        data.Email + " - " +
                        data.Senha + " - " +
                        data.CPF + " - " + 
                        data.Telefone + " - " +
                        data.CEP + " - " +
                        data.Cidade + " - " +                        
                        data.Estado              

                    document.getElementById('id1').value += stringDados +'\r\n'                        
                })
            });           
        }

        function update(){
            if(whereIs === 0){
                var cpfU = document.getElementById('cpfU').value;
                cpfU = cpfU.replace(/[^\d]+/g,'');
                var dadosClientes = firebase.database().ref('Cadastros/Clientes/' + cpfU + '/');

                dadosClientes.on('value', (snapshot) => {
                        var data = snapshot.val();
                        var c = document.getElementById('cpf');

                        document.getElementById('name').value = data.Nome;
                        document.getElementById('mail').value = data.Email;
                        document.getElementById('senha').value = data.Senha;
                        document.getElementById('estado').value = data.Estado;
                        document.getElementById('telefone').value = data.Telefone;                    
                        document.getElementById('cep').value = data.CEP;
                        document.getElementById('cidade').value = data.Cidade;     
                        
                        c.value = data.CPF;
                        c.disabled = true;
                        
                        document.getElementById('btn').textContent = "ATUALIZAR";
                        document.getElementById('btnAtualizar').textContent = "CANCELAR";
                });  
                
                whereIs = 1;
            }
            else{
                document.getElementById('btn').textContent = "CADASTRAR";                
                document.getElementById('btnAtualizar').textContent = "SELECIONE PARA ATUALIZAR";
                limparCampos();
                document.getElementById('cpf').disabled = false;
                whereIs = 0;
            }
        }

        function deletar(){            
            var cpfD = document.getElementById('cpfD').value;
            cpfD = cpfD.replace(/[^\d]+/g,'');

            firebase.database().ref().child('/Cadastros/Clientes/' + cpfD).remove();
        }
        */