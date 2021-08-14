function scuberGreetingForFeet(someValue) {
	if(someValue <= 400) {
		return 'This one is on me!';
	} else if(someValue > 2000 && someValue < 2500) {
		return 'I will gladly take your thirty bucks.';
	} else {
		return 'No can do.';
	}
}

function ternaryCheckCity(city) {
  const checkCity = city === 'NYC' ? ("Ok, sounds good.") : ("No go.");
  return checkCity;
}

function switchOnCharmFromTip(feedback) {
	switch(feedback) {
		case 'generous':
			return "Thank you so much.";
			break;
		case 'not as generous':
			return "Thank you.";
			break;
		default:
			return 'Bye.'
	}
}