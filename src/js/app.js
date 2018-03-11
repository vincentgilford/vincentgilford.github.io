let navBarHide = document.querySelector('#navigation').style.display = 'none';
// let projectInfo = document.querySelector('.more_information').style.display = 'none';
//hide nav bar
let navBar = document.querySelector('#navigation');

let	projectInfoFind = document.querySelector('.more_information');

let button = document.querySelector('header button');
let button_project = document.querySelectorAll('.more_information_button ');

let projectInfoArray = document.querySelectorAll('.more_information');
projectInfoArray.forEach((elem) => {
	elem.style.display = 'none';
});

let project_one = document.querySelector('#bankProject');
let project_two = document.querySelector('#virtualPetProject');
let project_three = document.querySelector('#hospitalProject');

let button_bank = document.querySelector('#bankId');
let button_virtualPet = document.querySelector('#virtualPetsId');
let button_hospital = document.querySelector('#hospitalId');

let bankProject = document.querySelector('#bankProject');
let virtualPetProject = document.querySelector('#virtualPetProject');
let hospitalProject = document.querySelector('#hospitalProject');

//create an a unique button for each toggle
button_bank.addEventListener('click', () => {
	if(bankProject.style.display === 'block') {
		bankProject.style.display = 'none';
	} else{
		bankProject.style.display ='block';
	}
});


button_virtualPet.addEventListener('click', () => {
	if(virtualPetProject.style.display === 'block') {
		virtualPetProject.style.display = 'none';
	} else{
		virtualPetProject.style.display ='block';
	}
});

button_hospital.addEventListener('click', () => {
	if(hospitalProject.style.display === 'block') {
		hospitalProject.style.display = 'none';
	} else{
		hospitalProject.style.display ='block';
	}
});

button.addEventListener('click', () => {
	if(navBar.style.display === 'block') {
		navBar.style.display = 'none';
	} else{
		navBar.style.display ='block';
	}

});

let modal = document.querySelector('.modal');
let trigger = document.querySelector('.trigger') ;
let closeButton = document.querySelector(".close-button");


 toggleModal = () => {
        modal.classList.toggle("show-modal");
    };

windowOnClick= (event) => {
        if (event.target === modal) {
            toggleModal();
        };
    };

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
	




//will try for array button if there is time
// button_project.forEach((button) => {
// 		button.addEventListener('click', () => {
	
// 	// button.forEach((projectInfoArray) => {
// 	// if(projectInfoArray.style.display === 'block') {
// 	// 	projectInfoArray.style.display = 'none';
// 	// } else{
// 	// 	projectInfoArray.style.display ='block';
// 	// }
// });

// })});








// <div class="dropdown">
//   <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>