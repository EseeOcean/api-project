//console.log("Hiii");

// Write a function that takes a bit of text, returns a Promise and in 5 seconds returns an uppercase version of the text. If no text is provided the Promise should reject. Then write a listener that console logs out the upercased text from the Promise.



let greet = (word) => {

    // Make the log run after 5 seconds
    return new Promise(function(resolve){
   
    setTimeout(() => { 

        resolve(word.toUpperCase());

    }, 5000);

    
    } )
}

greet("hello").then((response) => {
    console.log(response)
})





