/*All the Scripts and jquery in this js file.*/


$(document).ready(function(){
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
        if(!(document.getElementById("c"+String(i)) == null))
        {
            document.getElementById("c"+String(i)).checked = true;
            document.getElementById("ot"+String(i)).selected="selected";
            document.getElementById("tot").style.display='block';
            document.getElementById("tot").innerHTML= "(" + i + ")";
            document.getElementById("team1").innerHTML=i+" Selected";
        }
    }
}
function deselect()
{
    var n=10;
    for(var i=1; i<n; i++)
    {
        if(!(document.getElementById("c"+String(i)) == null))
        {
            document.getElementById("c"+String(i)).checked = false;
            document.getElementById("ot"+String(i)).selected=""
            document.getElementById("tot").style.display='none';
            document.getElementById("team1").innerHTML="*Which best describes you?";
        }
        
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

    if(document.getElementById("dropdown").style.display=='block')
    {
        document.getElementById("arrow").innerHTML="&#9660;"
        document.getElementById("dropdown").style.display='none';
    }
    else
    {
        document.getElementById("arrow").innerHTML="&#9650;"
        document.getElementById("dropdown").style.display='block';
    }
}
