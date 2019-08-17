

// Capture form input
//(include prevent default behavior so it doesn't submit to server)

$('form').on('submit', function(event) {

    event.preventDefault();

    $('.js-results').text('');

    const num = $(this).find('#number-choice').val();
    
    let appendHTML = '';

    for (i = 0; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            appendHTML = `fizzbuzz`;
        } else if (i % 3 === 0) {
            appendHTML = `fizz`;
        } else if (i % 5 === 0) {
            appendHTML = `buzz`;
        } 
        else {
            appendHTML = i;
        }    
        
        appendHTML += '<br>';

        $('.js-results').append(appendHTML);
    }

}
);
