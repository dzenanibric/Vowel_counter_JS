const btn = document.getElementById('submit-btn').addEventListener('click', function(){
    const text_input = document.getElementById('text-input-field').value;
    
    var counter = 0;

    for(var i = 0; i<text_input.length; i++){
        if(text_input[i] === 'a' || text_input[i] === 'e' || text_input[i] === 'i' || text_input[i] === 'o' || text_input[i] === 'u'){
            counter++;
        }
    }

    alert('Number of vowels is: ' + counter);
});
