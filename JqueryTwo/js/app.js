// dom ready
//$(function(){
//
//
//});


$(document).ready(function(){

    var styleClasses = {
        done : 'taskDone'
    };

    $('#btnAdd').click(function(event){
        addingTask();
    });


    var addingTask = function(){
        var $userInput  = $('#userInput');
        var taskText = $userInput.val();
        $('<li>').text(taskText).appendTo('#tasks');
        $userInput.val('');
    };

    $( "#userInput" ).keydown(function(event) {
       if(event.keyCode == 13){
           addingTask();
       }
    });

    //line through

    // on document ready, I am binding the click

    // event bubbling
//    $('ul').click(function (){
//        alert('li is clicked');
//    });

    var onTaskTextClickHandler =  function(event) {
        //alert( $( this ).text() );
        var $currentEl = $(this);
        if($currentEl.hasClass(styleClasses.done)){
           $currentEl.remove();
        }else{
            $currentEl.addClass(styleClasses.done);
        }

    };


    $("#tasks").on( "click","li" ,onTaskTextClickHandler);

});



