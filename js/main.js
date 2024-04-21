/*-Scrivi un programma che stampi in console i numeri da 1 a 100, 
-ma che per i multipli di 3 stampi “Fizz” al posto del numero
-e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


let numOne = 1
let mTre = 3
let mCinque = 5
let fizz = 'fizz'
let buzz = 'buzz'
let fizzBuzz = 'FizzBuzz'


for (numOne; numOne <= 100; numOne++) {
    
    if ((numOne % mTre == 0) && (numOne % mCinque == 0)) {
       // console.log(numOne = `FizzBuzz`)
       //console.log(`FizzBuzz`)
    
    //    numOne = fizzBuzz
    //    console.log(`${numOne} è multiplo di entrambi`)
    
    }   
    else if (numOne % mTre == 0) {
        // numOne = fizz
        // console.log(`${numOne} è multiplo di ${mTre}`)
    
    }
     
    else if (numOne % mCinque == 0) {
        // numOne = buzz
    
        // console.log(`${numOne} è multiplo di ${mCinque}`)   
    } 
    else {
        // console.log(numOne)
    
    }
    const myUl = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.append(numOne);
    newLi.classList.add('my-class-1');
    
    
    myUl.append(newLi);
 
}


