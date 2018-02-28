/*
Other not apps out there --> Dynalist, Workflowy

[ ] Created nested JSON style notes
[ ] Be able to modify text in dom
[ ] Store to local storage

*/
(function() {
   // your page initialization code here
   // the DOM will be available here
   var obj = {
	'notes': 'testing out'
	}

	//dynamically adjust textarea height
	function auto_grow(element) {
    element.style.height = "50px";
    element.style.height = (element.scrollHeight)+"px";
	}

	console.log(obj.notes);

	//create new element and insert into DOM
	function addElement () { 
	  // create a new div element 
	  var newDiv = document.createElement("textarea"); 
	  // and give it some content 
	  var newContent = document.createTextNode("Hi there and greetings!"); 

	  newDiv.onkeyup = function() {
	  	auto_grow(this)
	 	};

	  // add the text node to the newly created div
	  newDiv.appendChild(newContent);

	  // add the newly created element and its content into the DOM 
	  var currentDiv = document.getElementById("testing"); 
	  // console.log(currentDiv);

	  var lastchild = currentDiv.lastElementChild;
	  console.log(lastchild)
	  document.querySelector('.paragraphs').appendChild(newDiv); 
	}

	addElement();

	document.querySelector('.addElement').addEventListener('click', addElement);

	// console.log(Date.now());
	// document.querySelector('.datenow').innerHTML = Date.now();

	// var node = document.createElement("LI");                 // Create a <li> node
	// var textnode = document.createTextNode("Water");         // Create a text node
	// node.appendChild(textnode);                              // Append the text to <li>
	// document.querySelector(".note-section").appendChild(node); 


	// /* Toggle Nav with Raw JavaScript */
	// // Set variables for key elements
	// var mainNav = document.getElementById('mainNav');
	// var navToggle = document.getElementById('navToggle');

	// // Start by adding the class "collapse" to the mainNav
	// mainNav.classList.add('collapsed');

	// // Establish a function to toggle the class "collapse"
	// function mainNavToggle() {
	//     mainNav.classList.toggle('collapsed');
	// }

	// // Add a click event to run the mainNavToggle function
	// navToggle.addEventListener('click', mainNavToggle);

})();

