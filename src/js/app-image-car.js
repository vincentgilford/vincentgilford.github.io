//image-carosuel
let carosuel = document.getElementsByClassName('image-carosuel');
let carosuel_array = Array.from(carosuel);


[].forEach.call(carosuel_array, (elem) => {
	let next = elem.getElementsByClassName('next')[0],
	prev = elem.getElementsByClassName('prev')[0],
	bubbles = elem.getElementsByClassName('bubbles')[0],
	inner = elem.getElementsByClassName('inner')[0],
	imgs = inner.getElementsByTagName('img'), 	
	imageIndex = 0; 
	width = 400;

	moveImg = () => {
		inner.style.left = -width * imageIndex + 'px';
	}


	next.addEventListener('click', function () {
		imageIndex++;

		if(imageIndex >= imgs.length){
			imageIndex = 0; 
		}

		moveImg();
	});



	prev.addEventListener('click', ()=> {
		imageIndex--;

		if(imageIndex < 0){
			imageIndex = imgs.length-1; 
		}

		moveImg();

	});

	


});

// carosuel_array.forEach((elem) => {
// 	let next = elem.getElementsByClassName('next')[0],
// 	prev = elem.getElementsByClassName('prev')[0],
// 	bubbles = elem.getElementsByClassName('bubbles')[0],
// 	inner = elem.getElementsByClassName('inner')[0];
// 	imgs = inner.getElementsByTagName('img'),
// 	imageIndex = 0; 
// 	width = 400;

// 	switchImg = () => {
// 		inner.style.left = -width * imageIndex + 'px';
// 	}


// 	prev.addEventListner('click', ()=> {
// 		imageIndex--;

// 		if(imageIndex < 0){
// 			imageIndex = imgs.length -1; 
// 		}

// 		switchImg();

// 	});

// 	next.addEventListner('click', ()=> {
// 		imageIndex++;

// 		if(imageIndex >= imgs.length){
// 			imageIndex = 0; 
// 		}

// 		switchImg();

// 	});
// })

