console.log('Loaded!');

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	if(request.readyState === XMLHttpRequest.Done)
	{
		if(request.status === 200)
		{
			var count = request.responseText;
			document.getElementById("count").innerHTML = "test";
		}
	}
};

request.open('GET','http://yorishabhjha.imad.hasura-app.io/count',true);
request.send(null);