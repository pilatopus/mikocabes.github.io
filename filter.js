$(document).ready(function () {
    $('#filterOptions li a').click(function () {
        var ourClass = $(this).attr('class');
        $('#filterOptions li').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            $('#ourHolder').children().show();
        } else {
            $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
            $('#ourHolder').children('div.' + ourClass).show();
        }

        return false;
    });
});