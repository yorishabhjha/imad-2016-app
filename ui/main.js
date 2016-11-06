console.log('Loaded!');

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	if(request.readyState === XMLHttpRequest.Done)
	{
		if(request.status === 200)
		{
			var count = request.responseText;
			var c = document.getElementById('count');
			c.innerHTML = count.toString();
		}
	}
};

request.open('GET','http://yorishabhjha.imad.hasura-app.io',true);
request.send(null);