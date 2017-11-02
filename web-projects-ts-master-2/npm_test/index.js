$(document).ready(function(){
    var button = $('#button');
    var input = $('#input');

    button.click(function(){
        alert(input.val());
    })
});