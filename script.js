$(document).ready(onReady)
//it is onReady not onReady() because you're calling the function itself/taking in the function not the result of the function

console.log('jQuery Lecture');

function onReady(){
    console.log('jQuery is ready'); 
    $('h1').css('color', 'gray');
    $('h1').addClass('funny');

    //getters and setters
    console.log($('h2').text());
    $('h2').text('What is your name?'); //get text value of h2, text is for most elements
    
    //inputs (also, getter and setter)
    $('#nameInput').val('Name');
    console.log($('#nameInput').val());//val is only for inputs
    
    //events
    //event handler
    $('#addPersonButton').on('click', function() {
        
        let newPersonName = $('#nameInput').val()
        console.log(newPersonName);
        $('#names').append('<li>' + newPersonName + '<button class="deleteButton">Delete</button>' + '</li>')
    
    });//clickableButton

    $('#names').on('click', '.deleteButton', function() {
        
        console.log('Delete button was clicked');
        $(this).parent().remove();
    
    });//end deleteButton

    $('#clickedButton').on('click', function() {
        
        console.log($('#clickedButton').val());
    
    });//end clickedButton

}//end onReady