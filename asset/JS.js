const forms = document.querySelectorAll('.form');
  forms[0].style.display = 'none';

const editFormBtn = document.querySelector('#edit-form-btn');
const profileForm = document.querySelector('.form');
const bio =document.querySelector('#bio');

editFormBtn.addEventListener('click', function(e){
  e.preventDefault();
  profileForm.style.display = 'block';
})


const form = document.querySelector('.form');
const nameInput = document.querySelector('#name-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const ageInput = document.querySelector('#age-input');
const locationInput = document.querySelector('#location-input');
const emailInput = document.querySelector('#email-input');
const year_experienceInput = document.querySelector('#year_experience-input');

const nameText = document.querySelector('#name');
const roleText = document.querySelector('#role');
const availabilityText = document.querySelector('#availability');
const ageText = document.querySelector('#age')
const locationText = document.querySelector('#location');
const emailText = document.querySelector('#email');
const year_experienceText = document.querySelector('#year_experience');


function editForm() {
  nameInput.value = nameText.textContent;
  roleInput.value = roleText.textContent;
  availabilityInput.value = availabilityText.textContent;
  ageInput.value = ageText.textContent;
  locationInput.value =locationText.textContent;
  emailInput.value = emailText.textContent;
  year_experienceText.value = year_experienceInput.textContent;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

 nameText.textContent = nameInput.value;
 roleText.textContent = roleInput.value;
 availabilityText.textContent = availabilityInput.value;
 ageText.textContent =   ageInput.value;
 locationText.textContent = locationInput.value;
 emailText.textContent = emailInput.value;
 year_experienceText.textContent =  year_experienceInput.value;

 nameInput.value = '';
 roleInput.value = '';
 availabilityInput.value = '';
 ageInput.value = '';
 locationInput.value = '';
 emailInput.value = '';
 year_experienceInput.value ='';

 form.style.display = 'none';
    bio.style.display = 'block';
})

