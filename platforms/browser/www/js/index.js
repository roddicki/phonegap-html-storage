document.addEventListener('deviceready', function() {
    /* Javascript for device api here... */
    console.log('\n-------------\nDEVICE READY');

   
    
    
});

localStorage.clear();
var counter = 0;


document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
    	storeFormValues();
      	document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Retrieved thoughts'}});
    };
  } else if (page.id === 'page2') {
  		retrieveStorage();
    	page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});


function storeFormValues() {
	counter++
	var thought = document.getElementById('thought').value;
	document.getElementById('thought').value = "";
	var health = document.querySelector('input[name = "health"]:checked').value;
	localStorage.setItem("thought"+counter, "Your thought: "+thought+"<br>Your health: "+health);
	document.querySelector('input[name = "health"]:checked').checked = false;
}

function retrieveStorage() {
	var cards = "";
	//get all storage items
	for(var i=0, len=localStorage.length; i<len; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage[key];
	    console.log(key + " => " + value);
	    cards += "<p class='card'>"+value+"</p>";
	    console.log(cards);
	}
	document.querySelector('#retrieved-data').innerHTML = cards;
}