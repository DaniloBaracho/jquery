//alert("funcionou");
function ConsultaCep(){
    $.ajax({
        url:"https://viacep.com.br/ws/57046130/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}