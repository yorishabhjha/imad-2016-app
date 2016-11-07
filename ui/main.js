console.log('Loaded!');

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	if(request.readyState === XMLHttpRequest.Done)
	{
		if(request.status === 200)
		{
			var count = request.responseText;
			var span = document.getElementById('count');
			span.innerHTML = count.toString();
		}
		else
		span.innerHTML = test1;
	}
	else
		span.innerHTML = test2;
};

request.open('GET','http://yorishabhjha.imad.hasura-app.io/count',true);
request.send(null);