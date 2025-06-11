// Example 1
document.getElementById('changeTextButton').addEventListener('click', function(){
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "My paragraph is changed."
});

// Example 2

document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let citilist = document.getElementById('citiesList');
    citilist.firstElementChild.classList.add("highlight")
})

// Example 3
document.getElementById('changeOrder').addEventListener('click', function(){
    let coffeeType = document.getElementById('coffeeType');
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
});

// Example 4
document.getElementById('addNewItem').addEventListener('click', function(){
    let newItem = document.createElement('li');
    newItem.textContent = 'Coco Cola';
    document.getElementById('shoppingList').appendChild(newItem);
});

// Example 5
document.getElementById('removeLastTask').addEventListener('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
});

// Example 6
document.getElementById('clickMeButton').addEventListener('click', function(){
    alert('Clicked me')
});

// Example 7
document.getElementById('teaList').addEventListener('click', function(event){
    // alert(event.target.textContent);
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: " + event.target.textContent);
    }
})

// Example 8

document.getElementById("feedbackForm").addEventListener('submit', function(event){
    // alert('Submit')
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = `Feedback is: ${feedback}`;
})
let feedbackDisplay = document.getElementById('feedbackDisplay');
feedbackDisplay.style.marginTop = '20px';
feedbackDisplay.style.backgroundColor = 'crimson'
feedbackDisplay.style.padding = "10px 20px"

// Example 9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded."
});

// Example 10

document.getElementById('toggleHighlight').addEventListener('click', function(){
    let descriptionText = document.getElementById('descriptionText');
    descriptionText.classList.toggle('highlight');
})
