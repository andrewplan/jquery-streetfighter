$(document).ready(function(){
    
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    
    $('body').keydown(function(event) {
        if ( event.keyCode == 88 ) {
            $('.ryu-cool').show(); // code to show cool Ryu pose when hitting x on keyboard
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
        }; 
        }).keyup(function() {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
            $('.ryu-still').show();
        /*}).mouseenter(function() {
            $('.ryu-still').show
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
        }).mouseleave(function() {
            $('.ryu-still').show
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
        })*/
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}