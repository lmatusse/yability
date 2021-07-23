$(function(){
    var availableTags = [
   "Laranja",
   "Banana"
    ];
    
    $(document).on('focus','.texto', function(){
       // este if verifica se o campo já tem autocomplete
       if( !$(this).hasClass("ui-autocomplete-input") ){
          $(this).autocomplete({
             source: availableTags
        });
       }
    });
    
    $("#addicionar").on("click", function(){
       
       $("#box").append('<input class="texto">');
       
    });
    
 });