const Text = document.getElementById('body');
let currfs = 16;

function IncreaseText() 
{
  currfs += 2; 
  Text.style.fontSize = currfs + 'px';
}

function DecreaseText() 
{
  currfs -= 2;
  Text.style.fontSize = currfs + 'px';
}

function Reset()
{
  Text.style.fontSize = '1em';
}