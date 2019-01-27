
window.onload =  function (){

	// collection of all "View Answer" buttons
	var node = document.getElementsByClassName('collapseomatic');
	
	// clicking all buttons
	for (i=0; i<node.length; i++){ 
		node[i].click();
	}

	// remove all buttons after clicking
	while(node.length > 0){		
		for (i=0; i<node.length; i++){
			node[i].remove() 
		}
	}					
}

