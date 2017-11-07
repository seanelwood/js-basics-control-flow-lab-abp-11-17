// Write your code in this file!
function scuberGreetingForFeet(totalFeet){
  if (totalFeet <= 400){
    return 'This one is on me!';
  } else if (totalFeet <= 2500) {
      return 'I will gladly take your thirty bucks.';
  } else {
     return "No can do.";
  }
}


function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' :
  'No go.';
}

function switchOnCharmFromTip(){
  switch (tip) {
    case 'generous':
     return 'thank you very much.';
     break;
    case 'not as generous':
      return 'Thank you'; 
    default:
      return 'Bye';
  }
}
