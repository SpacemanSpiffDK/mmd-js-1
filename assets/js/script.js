// JS by Dan Høegh
// UCN MMD 2018

function alertMe(event) {
    event.preventDefault();
    alert('You are alerted!');
}

// WRITING DIRECTLY INTO ELEMENT STYLE ATTRIBUTE IS NOT THE MOST PRODUCTIVE

// function showBox(event) {
//     event.preventDefault();
//     document.getElementById('box').style = "display: block";
// }

// function hideBox(event) {
//     event.preventDefault();
//     document.getElementById('box').style = "display: none";
// }

// function changeColor() {
//     document.getElementById('box').style = "background-color: #ee5253";
//     // what happens here? box dissapears since we override the style="display:block" from showBox()
//     // Lets do this differently!!! No more writing attributes into elements!
//     // 
// }

// without window.onload first
// -------------------------------------------------------------------------------
// document.getElementById('btnAlert').addEventListener('click', function() {
//    alert('You are alerted!');
// });

// What went wrong? Look at console. Get the same output with try/catch
// -------------------------------------------------------------------------------
// try {
//     document.getElementById('btnAlert').addEventListener('click', function() {
//			alert('You are alerted!');
//     });
// } 
// catch(err) {
// 		alert(err);
// }


// Let's do this the right way (Can also be solved by using ASYNC DEFER)
// -------------------------------------------------------------------------------
// window.onload = function() {

//     document.getElementById('btnAlert').addEventListener('click', function() {
//         alert('You are alerted!');
//     });

//     // let's make it easier to manipulate the box
//     var elmbox = document.getElementById('box');

//     // add class "show" when button is clicked
// 	document.getElementById('btnBoxShow').addEventListener('click', function() {
//         elmbox.classList.add('show');
//     });    

//     // remove class "show" when button is clicked
//     document.getElementById('btnBoxHide').addEventListener('click', function() {
//         elmbox.classList.remove('show');
//     });    
    
//     // toggle class show when button is clicked
//     document.getElementById('btnBoxToggle').addEventListener('click', function() {
//         elmbox.classList.toggle('show');
//     });

//     // add background-color on mouse in
// 	elmbox.addEventListener('mouseover', function() {
//         elmbox.classList.toggle('changecolor');
//     });    

//     // remove background-color on mouse in
// 	elmbox.addEventListener('mouseout', function() {
//         elmbox.classList.toggle('changecolor');
//     });    

// }