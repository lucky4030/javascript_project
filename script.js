function ageInDays()
{
	var birthday=prompt("what year were you born ..? ");
	var age_in_days=(2020-birthday)*365;
	var h1=document.createElement('h1');
	var ans=document.createTextNode('you are ' + age_in_days + ' days old ');
	h1.setAttribute('id','ageInDays');
	h1.appendChild(ans);
	console.log(ans);
	if( birthday==="" || birthday===null)
		console.log("null_input!!");
	else
	document.getElementById("flex-box-result").appendChild(h1);
}
function reset()
{
	document.getElementById('ageInDays').remove();
}
function generate_cat()
{
	var image=document.createElement('img');
	var div=document.getElementById("cats");
	image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
	div.appendChild(image);
}
// chalenge 3

function rock(yourchoice)
{
	var humanchoice, botchoice;
	humanchoice=yourchoice.id;
	botchoice = randomchoice();

	result = decidewinner(humanchoice , botchoice );
	console.log(result);
	  // return object {'message':'you win' , 'color':'green'};
	rockfrontend(yourchoice.id , botchoice , result  );

}
function randomchoice()
{
	var arr = ['rock' , 'paper' , 'scissors'];
	var ch = Math.floor(Math.random()*3);
	return arr[ch];
}
function decidewinner(humanchoice , botchoice){
	if( humanchoice === botchoice )
		return {'message':'you tied!' , 'color':'yellow'};
	switch(humanchoice)
	{
		case 'rock':
			{
				if(botchoice==='scissors') return {'message':'you win!' , 'color':'green'};
				else if(botchoice==='paper') return {'message':'you lost!' , 'color':'red'};
				break;
			}
		case 'paper':
		{
			if(botchoice==='scissors') return {'message':'you lost!' , 'color':'red'};
			else if(botchoice==='rock') return {'message':'you win!' , 'color':'green'};
			break;
		}
		case 'scissors':
		{
			if(botchoice==='paper') return {'message':'you win!' , 'color':'green'};
			else if(botchoice==='rock') return {'message':'you lost!' , 'color':'red'};
			break;
		}
	}
}
function rockfrontend(humanchoice , botchoice , result  )
{
	var images={
		'rock': document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src
	};
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humandiv = document.createElement('div');
	var botdiv = document.createElement('div');
	var messagediv = document.createElement('div');

	humandiv.innerHTML = "<img id='"+humanchoice+"' src='"+images[humanchoice]+"' height=150px width=150px style='box-shadow: 0px 10px 50px rgb(0,255,0, 0.7);' onclick='rock(this)' >";
	document.getElementById('flex-box-container-3').appendChild(humandiv);

	//console.log(result['message']);
	messagediv.innerHTML ="<h2 style='color:"+result['color']+"; font-size:50px; padding:10px;'>"+result['message']+"</h2>";
	document.getElementById('flex-box-container-3').appendChild(messagediv);

	botdiv.innerHTML="<img id='"+botchoice+"' src='"+images[botchoice]+"' height=150px width=150px style='box-shadow: 0px 10px 50px rgb(255,0,0, 0.7);' onclick='rock(this)' >";
	document.getElementById('flex-box-container-3').appendChild(botdiv);

}
