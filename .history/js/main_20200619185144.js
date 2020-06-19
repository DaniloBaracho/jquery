//alert("funcionou");
function ConsultaCep(){
    var cep= document.getElementById("cep").value
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.logradouro);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("localidade").innerHTML = response.localidade;
        }
    })
}
function ConsultaCep2(){
    var cep2= document.getElementById("cep2").value
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep2+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#showcep").html(response.cep);
            //alert(response.logradouro);
            $(".cep").show();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
           
        }
    })
} 
$(function(){
    $(".cep").hide();
});

