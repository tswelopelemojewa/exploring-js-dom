
console.log("JS linked with html");

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

const timedMSG = document.querySelector('.timedMSG');

myMessage.innerText = 'This is a message in the DOM!'


setTimeout(function(){
    timedMSG.innerText = 'This message appeared after 4 seconds'
}, 4000 )


setTimeout(function(){
    timedMSG.innerText = ' '
}, 7000 )


const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("button clicked!")
    myMessage.innerHTML = "button pressed"
});



const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function() {
    myMessage.innerText = ' '
});

const inputBox = document.querySelector('.theInputValue');


theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});


myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})


const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];



console.log(fruits);

const fruitButton = document.querySelector(".fruitButton");
const fruitBox = document.querySelector('.fruitBox');

const fruitList = document.querySelector(".fruits");

fruitButton.addEventListener('click', function(){
    if(fruitBox.value.trim().length > 0){
        const li = document.createElement('li');
        li.innerText = fruits.push(fruitBox.value)
        console.log("added")
        console.log(fruits)
        fruitList.appendChild(li);
    }
});

console.log(fruitList)

for (let i=0; i<fruits.length; i++){
    // get fruits from the list
    const fruit = fruits[i];

    //create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

