// dom ready
//$(function(){
//
//
//});
$(document).ready(function(){

    var browserConsole = window.console;
    window.console = { }; // create a new console object
    window.consoleArray = []; // array declaration
    console.log = function(text){
        window.consoleArray.push(text);
        browserConsole.log(text);
    }


    $('.headerContent').load('templates/header.html #header',function(){
        console.log('header loaded');
    });

    $('.mainContent').load('templates/mainContent.html .main',function(){
        console.log('main loaded');
    })


    $('.footerContent').load('templates/footer.html',function(){
        console.log('footer loaded');
    })



});



