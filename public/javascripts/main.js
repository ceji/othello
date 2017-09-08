$(document).ready(function () {
    console.log('ok');

    $('table.board td').on('click', function (elem) {
        i = $(this).data('i');
        j = $(this).data('j');
        
        console.log(i + '/' + j);
        jQuery.get('/click/' + i + '/' + j, function (elem) {
            console.log(elem);
        });
    });

});