$(document).ready(function() {
    
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            $('<div>').addClass('sketch-board').appendTo('#container');
        }
    }
});