$('input[type="checkbox"]').click(function(){
    var h2=$(this).parent().find('h2');
    if($(this).prop("checked") == true){
        $(h2).css('text-decoration','line-through');
    }
    else if($(this).prop("checked") == false){
        $(h2).css('text-decoration','none');
    }
});
