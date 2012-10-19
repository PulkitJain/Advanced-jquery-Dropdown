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
        $('#ot'+String(i)).attr("selected","");
        $('#tot').show();
        $('#tot').html("("+i+")");
        $('#team1').html(i+" Selected");
    }
}

function count()
{
    var x=0;
    var n=10;
    for(var i=1; i<n; i++)
    {
        if(!(document.getElementById("c"+String(i)) == null))
        {
            if(document.getElementById("c"+String(i)).checked == true)
            {
                document.getElementById("ot"+String(i)).selected="selected"
                document.getElementById("tot").style.display='block';
                x=x+1;
                document.getElementById("tot").innerHTML= "(" + x + ")";
                document.getElementById("team1").innerHTML = x + " Selected";
            }
            else
            {
                document.getElementById("ot"+String(i)).selected=""
            }
            document.getElementById("js"+String(i)).innerHTML =  document.getElementById("ot"+String(i)).innerHTML;
            if(x==0)
            {
                document.getElementById("team1").innerHTML="*Which best describes you?";
                document.getElementById("tot").style.display='none';
            }
        }
        
    }
}

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