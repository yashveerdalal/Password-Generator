function submit(){function generatepass(length,lowercase,uppercase,numbers,symbols) {


    const lowerchars = "abcdefghijklmnopqrstuvwxyz"
    const upperchars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0987654321";
    const symbolchars = "@#$&_"

    let allowedchars ="";
    let password = "";

    if (lowercase === true) {

        allowedchars  =   allowedchars + lowerchars;

        
    }
    if (uppercase === true) {

        allowedchars =   allowedchars + upperchars ;
        
    }
    if (numbers === true) {

        allowedchars =   allowedchars + numberchars;
        
    }
    if (symbols ===  true ) {

        allowedchars =   allowedchars + symbolchars;
        

    }

    for (let i = 0; i < length ; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length) +1 ;
        password += allowedchars[randomindex] ;
        
    }

return password;



 
}


const passlength = 12;
const lowercase = true;
const uppercase = true;
const numbers = true ;
const symbols = true ;



 const Password = generatepass(passlength, lowercase, uppercase, numbers, symbols );
 document.getElementById("output").value = Password;
}

 

    
    
 
 

