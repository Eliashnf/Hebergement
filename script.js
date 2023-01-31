$(document).ready(function(){
    $('.grid-item:not(:first-child)').hide();

    $('.navbar-menu-link').on('click', function(){
        var id = $(this).attr("id");
        $('.grid-item').hide();
        $("#"+id+"-content").show();
    });
});