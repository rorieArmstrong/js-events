$(document).ready(() => {
    $("h1").on('click', ()=> {
        $('.container').toggleClass('black-background');
    });
    $("h1").mouseleave(function(){
        $('.container').toggleClass('black-background');
       });

    $("h2").hover(function(){
        $(this).html('Welcome')
      });
      
    var text = "";
    $( "body" ).keyup(function (e) {
        text +=  String.fromCharCode(e.keyCode);
        $("#new").text(text)
    });
    
    $( "#other" ).click(function() {
        $( "#target" ).keypress();
    });

    $("#Margheritta").on('click', ()=> {
        $('.Mar').toggleClass('bold-text');
    });
    
    $("#Capricciosa").on('click', ()=> {
        $('.Cap').toggleClass('bold-text');
    });

    $("#Hawaiian").on('click', ()=> {
        $('.Haw').toggleClass('bold-text');
    });

    
  });