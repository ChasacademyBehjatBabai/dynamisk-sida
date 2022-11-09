const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfac0cf428msha5d3653a9901897p140512jsn4492f2708219',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => 
        {console.log(response.body[0])
            document.getElementById("setup-joke").innerHTML = JSON.stringify(response.body[0].setup)
            document.getElementById("punchline").innerHTML = JSON.stringify(response.body[0].punchline)

        })
	.catch(err => console.error(err));