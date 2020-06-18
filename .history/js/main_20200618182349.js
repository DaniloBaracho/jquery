//alert("funcionou");
function ConsultaCep(){
    var cep= document.getElementById("cep").value
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            alert(response.logradouro)
            document.getElementById("logradouro").innerHTML=response.logradouro;
            document.getElementById("bairro").innerHTML=response.bairro;
        }
    })
}