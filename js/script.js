/*All the Scripts and jquery in this js file.*/


$(document).ready(function(){
    $(".dropdown").click(function(e){
        e.stopPropagation();
    });
    $("body").click(function(e) {
        var currentClass = e.target.className;
        if (currentClass == 'arrow' || currentClass == 'selection' || currentClass == 'dropdown' ) {
            return false;
        }
        else {
            $("div.dropdown").hide();
        }
        
    });
    $('select').each(function(){
        console.log($(this).attr('id'));
        $(this).find('option').each(function(){
            console.log($(this).val());
        });
    });
});

function subMenu()
{
    if($("#dropdown").css('display')=='none' )
    {
        $("#dropdown").css('display','block');
    }
    else
    {
        $("#dropdown").css('display','none');
    }
}

function select()
{
    var n=10;
    for(var i=1; i<n; i++)
    {
        if(!($('#ot'+String(i)).length == 0))
        {
            $('#c'+String(i)).prop('checked', true);
            $('#ot'+String(i)).attr("selected","selected");
            $('#tot').show();
            $('#tot').html("("+i+")");
            $('#team1').html(i+" Selected");
        }
    }
}

function deselect()
{
    var n=10;
    for(var i=1; i<n; i++)
    {
        $('#c'+String(i)).prop('checked', false);
        $('#ot'+String(i)).attr("selected",false);
        $('#tot').hide();
        $('#tot').html("("+i+")");
        $('#team1').html("*Which best describes you?");
    }
}
function count()
{
    var x=0;
    var n=4;
    for(var i=1; i<n; i++)
    {
        var check = $('#c'+String(i)).prop('checked');
        if(check==true) {
            $('#ot'+String(i)).attr("selected","selected");
            $('#tot').css('display','block');
            x=x+1;
            $("#tot").html("("+x+")");
            $("#team1").html(x+"Selected");
        }
        else {
            $('#ot'+String(i)).attr("selected",false);
        }
        $('#js'+String(i)).html($('#ot'+String(i)).html());
        if(x==0){
            $("#team1").html("*Which best describes you?");
            $("#tot").hide();
        }
    }
}