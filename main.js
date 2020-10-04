let possibilities = ['rock', 'paper', 'scissor'];

function result() {

    
    let yourChoice = $('#select').val();
    let oppChoice = possibilities[Math.floor(Math.random() * Math.floor(3))];
    
    if (yourChoice === possibilities[1] && oppChoice === possibilities[2]) {
        
        $('#oppChoice').text('You lost!');
    } 
    
    else {
        
        if (yourChoice === possibilities[0] && oppChoice === possibilities[1]) {
            
            $('#oppChoice').text('You lost!');
        
        }
        
        else {
            
            if (yourChoice === possibilities[2] && oppChoice === possibilities[0]) {
                
                $('#oppChoice').text('You lost!');
                
            } else {

                if (yourChoice === possibilities[1] && oppChoice === possibilities[1]) {

                    $('#oppChoice').text('Draw!');
                
                }
                
                else {

                    if (yourChoice === possibilities[2] && oppChoice === possibilities[2]) {

                        $('#oppChoice').text('Draw!');

                    }

                    else {

                        if (yourChoice === possibilities[0] && oppChoice === possibilities[0]) {

                            $('#oppChoice').text('Draw!');
        
                        }

                        else {

                            if (yourChoice === possibilities[1] && oppChoice === possibilities[0]) {

                                $('#oppChoice').text('You won!');
                
                            }

                            else {

                                if (yourChoice === possibilities[0] && oppChoice === possibilities[2]) {

                                    $('#oppChoice').text('You won!');

                                } else {

                                    if (yourChoice === possibilities[2] && oppChoice === possibilities[1]) {

                                        $('#oppChoice').text('You won!');

                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    $('#result').text(`Opponent randomed: ${oppChoice}`);
}