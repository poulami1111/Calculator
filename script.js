let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        // Check if the clicked button is the '=' (equal) button
        if(e.target.innerHTML == '='){
            // Evaluate the expression in the string and update the input value
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button is the 'AC' (all clear) button
        else if(e.target.innerHTML == 'AC'){
             // Clear the string and update the input value
            string = "";
            input.value = string;
        }
         // Check if the clicked button is the 'DEL' (delete) button
        else if(e.target.innerHTML == 'DEL'){
             // Remove the last character from the string and update the input value
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         // If none of the special buttons are clicked, append the button's content to the string
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})