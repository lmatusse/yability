$(function(){
    var frutas = [
      "Abacate",
"Abacaxi",
"Abiu",
"Abricó",
"Abrunho",
"Açaí",
"Acerola",
"Akee",
"Alfarroba",
"Ameixa",
"Amêndoa",
"Amora",
"Ananás",
"Anona",
"Araçá",
"Arando",
"Araticum",
"Ata",
"Atemoia",
"Avelã",
"Abacate",
"Abacaxi",
"Babaco",
"Banana",
"Caju",
"Castanha",
"Cereja",
"Figo",
"Framboesa",
"Goiaba",
"Kiwi",
"Laranja",
"Lima",
"Limão",
"Maçã",
"Manga",
"Pera",
"Pessêgo",
"Uva"
    ];
    
    $(document).on('focus','.texto', function(){
       if( !$(this).hasClass("ui-autocomplete-input") ){
          $(this).autocomplete({
             source: frutas
        });
       }
    });
    $ .on("click", function(){
       
       $("#box").append('<input class="texto">');
       
       
    });
    
 });