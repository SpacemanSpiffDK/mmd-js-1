// JS by Dan Høegh
// UCN MMD 2020

function alertMe() {
    alert('You are alerted!');
}

// WRITING DIRECTLY INTO ELEMENT STYLE ATTRIBUTE IS NOT THE MOST PRODUCTIVE

function showBox() {
    document.getElementById('box').style = "display: block";
}

function hideBox() {
    document.getElementById('box').style = "display: none";
}

function changeColor() {
    document.getElementById('box').style = "background-color: #ee5253";
    // what happens here? box dissapears since we override the style="display:block" from showBox()
    // Lets do this differently!!! No more writing attributes into elements!
    // 
}

// Let's do this the right way 
// -------------------------------------------------------------------------------
// Commment out or delete the functions above
// Change the html to no "onclick"s

// document.querySelector('#btnAlert').addEventListener('click', function() {
//     alert('You are alerted!');
// });

// // let's make it easier to manipulate the box
// const elmbox = document.querySelector('#box');

// // add class "show" when button is clicked
// document.querySelector('#btnBoxShow').addEventListener('click', function() {
//     elmbox.classList.add('show');
// });    

// // remove class "show" when button is clicked
// document.querySelector('#btnBoxHide').addEventListener('click', function() {
//     elmbox.classList.remove('show');
// });    

// // toggle class show when button is clicked
// document.querySelector('#btnBoxToggle').addEventListener('click', function() {
//     elmbox.classList.toggle('show');
// });

// // add background-color on mouse in
// elmbox.addEventListener('mouseover', function() {
//     elmbox.classList.toggle('changecolor');
// });    

// // remove background-color on mouse in
// elmbox.addEventListener('mouseout', function() {
//     elmbox.classList.toggle('changecolor');
// });    
