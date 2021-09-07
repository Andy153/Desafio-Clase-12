//ocultar
$(document).ready(function(){
    $("p").click(function(){
        $(this).slideUp();
    });
});

//mostrar
$(".show-btn").click(function(){
    $("p").show();
});
