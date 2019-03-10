


//////////**************** WHen user click on addButton the hightlight the input box  ****************//////////
var addButton= document.querySelector("#addButton");
	addButton.addEventListener("click",highlightInput);
	function highlightInput()
	{
		// jb button click ho to  addNewTodo(input box) pr cursur blink kry
		var temp = document.querySelector("#addNewTodo");
		temp.focus();
		temp = null; // because temp work is done
	}








//////////**************** take input string and append in list  ****************//////////
// Take String from the addNewTodo box and put the string in the list
// also remove the string from addNewTodo box
// Each time when new task is added, assign the addEventListen that toggle line-through when user click
var addNewTodo = document.getElementById("addNewTodo");
	addNewTodo.addEventListener("keypress",takeValue);
	function takeValue(event)
	{
			if(event.keyCode===13)
			{
					//**************** Take string from the addNewtodo box ****************//
					var string = this.value;

					// now we catch the string successfully Now clear the addNewTodo box
					this.value = "";


					//Now append the string in the list
					var list= document.querySelector("#list");
					list.innerHTML = list.innerHTML+"<li><span class='trash-icon'></span> <p>"+string+"</p></li>";





					//**************** Assign addEvent at click function with each list item  ****************//
					// when user click toggle Line-Through and make text color grey
					var li = document.querySelectorAll("li");
					for(var i=0; i<li.length; i++)
					{
					  	li[i].addEventListener("click",lineThrough);
					}
					function lineThrough()
					{
						this.classList.toggle("lineThrough");
					}






				//**************** Delete item when trash icon clicked  ****************//
					// Now when user click on span then that list item will be deleted
					// Each time assign following eventlistener with new span
					var span = document.querySelectorAll("span");
					for(var i=0; i<span.length; i++)
					{
						span[i].addEventListener("click",removeItem);
					}
					function removeItem(event)
					{
					 	// delete the clicked list item
					 	// this referec to the span(deleteButton) which clicked
					 	this.parentElement.parentElement.removeChild(this.parentElement);
					 	event.stopPropagation();
					}


			}


	}
