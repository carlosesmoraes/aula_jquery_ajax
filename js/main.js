function ConsultaCEP(){
    $(".barra-progresso").show()
    var CEP=document.getElementById("CEP").value
    var url ="https://viacep.com.br/ws/" + CEP + "/json/"
    console.log(CEP)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#tCEP").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);//utilizando função do jquery
            $("#Bairro").html(response.bairro);
            $("#Localidade").html(response.localidade); //variáveis são case sensitive
            $("#UF").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})