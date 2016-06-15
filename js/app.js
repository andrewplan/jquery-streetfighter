$(document).ready(function(){
    
    /*Good Ryu basic functionality*/
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
    
    /*Hulk Ryu basic functionality*/
    $('.hulk-ryu').mouseenter(function() {
        $('.hulk-ryu-still').hide();
        $('.hulk-ryu-cool').hide();
        $('.hulk-ryu-ready').show();
    })
    .mouseleave(function() {
        $('.hulk-ryu-ready').hide();
        $('.hulk-ryu-cool').hide();
        $('.hulk-ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.hulk-ryu-ready').hide();
        $('.hulk-ryu-throwing').show();
        $('.hulk-hadouken').finish().show()
        .animate(
            {'right': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('right', '520px');
            });
    })
    .mouseup(function() {
        $('.hulk-ryu-throwing').hide();
        $('.hulk-ryu-ready').show();
    });
    
    /*Pose functionality for both Ryu's*/
    $('body').keydown(function(event) {
        if ( event.keyCode == 88 ) {
            $('.ryu-cool').show(); // code to show Ryu doing cool pose when hitting "x" on keyboard
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
        }; 
        if ( event.keyCode == 13 ) {
            $('.hulk-ryu-cool').show(); // code to show Hulk Ryu doing cool pose when hitting "Enter" on keyboard
            $('.hulk-ryu-still').hide();
            $('.hulk-ryu-ready').hide();
            $('.hulk-ryu-throwing').hide();
            $('.hulk-hadouken').hide();
        }; 
        }).keyup(function() {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
            $('.ryu-still').show();
            $('.hulk-ryu-cool').hide();
            $('.hulk-ryu-ready').hide();
            $('.hulk-ryu-throwing').hide();
            $('.hulk-hadouken').hide();
            $('.hulk-ryu-still').show();
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}