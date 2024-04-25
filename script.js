// Play tiger roar sound for 2 seconds with animation
function playTigerRoar() {
  const audio = document.getElementById('tiger-roar');
  audio.play();
  const heroImage = document.getElementById('hero-tiger');
  heroImage.classList.add('animation'); // Add animation class on play

  setTimeout(() => {
    audio.pause();
    heroImage.classList.remove('animation'); // Remove animation after 2 seconds
  }, 2000);
}

// Call the function on document load
document.addEventListener("DOMContentLoaded", playTigerRoar);

// Example function for Tiger Age selection (replace with actual logic)
function selectAge(age) {
  alert(`You selected Cub age: ${age}`);
  // Disable other options
}

const donationForm = document.getElementById('donation-form');

donationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  // Simple validation (replace with more robust validation)
  if (name === '' || age === '' || email === '' || mobile === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Process donation information (e.g., send to server)
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}, Mobile: ${mobile}`);
  alert('Thank you for your donation!');
});

const showReservesBtn = document.getElementById('show-reserves');
const reservesContent = document.getElementById('reserves-content');

showReservesBtn.addEventListener('click', () => {
  // Only clear previous content if it exists (conditional clearing)
  if (reservesContent.innerHTML !== '') {
    reservesContent.innerHTML = '';
  }

  // Fetch data about tiger reserves (replace with actual data retrieval)
  const reserves = [
    { name: 'Corbett National Park', location: 'Uttarakhand' },
    { name: 'Ranthambore National Park', location: 'Rajasthan' },
    { name: 'Kanha National Park', location: 'Madhya Pradesh' },
  ];

  // Dynamically create content for each reserve
  reserves.forEach(reserve => {
    const reserveInfo = document.createElement('p');
    reserveInfo.textContent = `${reserve.name} - ${reserve.location}`;
    reservesContent.appendChild(reserveInfo);
  });
});


const infectedCountSpan = document.getElementById('infected-count');
const showDetailsBtn = document.getElementById('show-details');
const infectedTigersTable = document.getElementById('infected-tigers').getElementsByTagName('tbody')[0];

let infectedTigerCount = 0; // Assume data fetching for count

showDetailsBtn.addEventListener('click', () => {
  infectedTigersTable.innerHTML = ''; // Clear previous data

  for (let i = 0; i < infectedTigerCount; i++) {
    const tableRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = `T${i + 1}`; // Assign names (T1, T2...)

    const rfidCell = document.createElement('td');
    rfidCell.textContent = `${i + 1}`; // Assign RFID tags (1, 2...)

    tableRow.appendChild(nameCell);
    tableRow.appendChild(rfidCell);
    infectedTigersTable.appendChild(tableRow);
  }
});

// Fetch infected tiger count from external source (replace with actual logic)
fetch('https://api.example.com/infected-tigers')
  .then(response => response.json())
  .then(data => {
    infectedTigerCount = data.count;
    infectedCountSpan.textContent = infectedTigerCount;
  });

// Sample associative array with tiger names and ages
const tigers = {
  'Cub': ['Shankar', 'Priya'],
  'Sub-adult': ['Akash', 'Rani'],
  'Adult': ['Raja', ' ببر (B ببر  - Chinese for Tiger)']
};

const tigerAgeInput = document.getElementById('tiger-age');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
  const enteredAge = tigerAgeInput.value;

  // Clear previous search results
  searchResults.innerHTML = '';

  if (tigers.hasOwnProperty(enteredAge)) {
    const matchingTigers = tigers[enteredAge];
    const resultList = document.createElement('ul');
    resultList.textContent = `Tigers of age ${enteredAge}:`;

    matchingTigers.forEach(tigerName => {
      const listItem = document.createElement('li');
      listItem.textContent = tigerName;
      resultList.appendChild(listItem);
    });

    searchResults.appendChild(resultList);
  } else {
    searchResults.textContent = 'No tigers found for that age.';
  }
});

// Veterinarian form validation and processing (optional)
const vetForm = document.getElementById('veterinarian-form');
const vetNameInput = document.getElementById('name');

vetForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = vetNameInput.value;

  // Check for letters only using constraint validation API
  const namePattern = /^[a-zA-Z]+$/;
  if (!namePattern.test(name)) {
    vetNameInput.style.boxShadow = '0 0 0 2px red'; // Red shadow on error
    alert('Please enter only letters for the veterinarian name.');
    return;
  }

  // Process veterinarian information (e.g., submit to server)
  console.log(`Veterinarian Name: ${name}`);
  alert('Veterinarian information submitted!');

  // Reset form and shadow
  vetForm.reset();
  vetNameInput.style.boxShadow = 'none';
});
