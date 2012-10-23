/*All the Scripts and jquery in this js file.*/

/*Document ready function*/
$(document).ready(function(){
    var htmlSelect='<div class="selectBox1">'+
                        '<div class="selectBox2" id="menu" onclick="subMenu()">'+
                        '<span id="team1" class="selection">*Which best describes you?</span>'+
                            '<span id="arrow" class="arrow">&#9660;</span>'+
                        '</div>'+
                        '<div id="dropdown" class="dropdown">'+
                            '<div class="drptop">'+
                                '<div class="select" onclick="select()">'+
                                    '<a href="#">(&#10003)</a> <p>Select All</p>'+
                                    '<div id="tot" class="tot">&nbsp;</div>'+
                                '</div>'+
                                '<div class="deselect" onclick="deselect()">'+
                                    '<a href="#">(X)</a>'+
                                    '<p>Deselect All</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="drpdown" onclick="count()">'+
                                
                            '</div>'+
                        '</div>'+
                    '</div>';
                    $('#addSelectbox').append(htmlSelect);
    var n= $("#multiselect option ").size();
    for(var i=1; i<=n; i++)
    {
        if(!($('#ot'+String(i)).length == 0))
        {
            var anchor ='<a href="javascript:;"><input id="c'+String(i)+'" type="CHECKBOX"><label id="js'+String(i)+'"></label></a>'
            $('.drpdown').append(anchor);
        }
    }

    $(".dropdown").click(function(e){
        e.stopPropagation();
    });

    $("body").click(function(e) {
        var currentClass = e.target.className;
        if (currentClass == 'arrow' || currentClass == 'selection') {
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

/*Dropdown open and close function*/
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

/*Select all function*/
function select()
{
   var n= $("#multiselect option ").size();
    for(var i=1; i<=n; i++)
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

/*Deselect all function*/
function deselect()
{
    var n= $("#multiselect option ").size();
    for(var i=1; i<=n; i++)
    {
        if(!($("#ot"+String(i)).length == 0))
        {
            $('#c'+String(i)).prop('checked', false);
            $('#ot'+String(i)).attr("selected",false);
            $('#tot').hide();
            $('#tot').html("("+i+")");
            $('#team1').html("*Which best describes you?");
        }
    }
}

/*No. of selection counts function*/
function count()
{
    var x=0;
    var n= $("#multiselect option ").size();
    for(var i=1; i<=n; i++)
    {
        if(!($("#ot"+String(i)).length == 0))
        {

            var check = $('#c'+String(i)).prop('checked');
            if(check==true)
            {
                $('#ot'+String(i)).attr("selected","selected");
                $('#tot').css('display','block');
                x=x+1;
                $("#tot").html("("+x+")");
                $("#team1").html(x+" Selected");
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
}