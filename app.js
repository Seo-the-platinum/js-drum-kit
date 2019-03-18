const removeTransition= function(e) {
	if(e.propertyName !== 'transform'){
		return;
	}
	// e.target equals the element that triggered the event
	// to fire. When a key is pushed, the div element gets 
	// the 'playing' class added to it. Once the changes from
	// adding the class to the div is complete, then the 
	// transitionend event is triggered. because the div triggers
	// the transitionend event, it will be its target.
	e.target.classList.remove('playing');
}
//We want a fuction that will take the key value of the key
// that is pressed and use it to find and play the matching
// audio file if there is one.
const playSound= function(e) {
	console.log(e);
	//grabs an audio element with a dataset that has a value
	// equal to e.key if it exist.
	const audio= document.querySelector(`audio[data-key='${e.key}`)
	// if e.key value doesn't match any of the audio data-keys,
	//do nothing
	console.log(audio);
	if(!audio){
		return;
	}
	audio.currentTime=0;
     audio.play();
    // we want to grab the div element with a data-key
    // value equal to e.key.
    const key= document.querySelector(`div[data-key='${e.key}`);
    key.classList.add('playing');
}

  const keys= document.querySelectorAll('.key')

  keys.forEach((key)=> {
  	key.addEventListener('transitionend', removeTransition)
  })

//We want to take an event listener
//that listens for keys that are pressed and add
// it to the dom.
window.addEventListener('keydown', playSound);




