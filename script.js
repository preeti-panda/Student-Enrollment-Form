function addStudent() {
   
    let course = document.querySelector('input[name="course"]:checked').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;


    let card = document.createElement('div');
    card.classList.add('card');

 
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardImage = document.createElement('img');
    cardImage.src = 'https://via.placeholder.com/300x200.png?text=Profile+Picture';
    let cardTitle = document.createElement('h2');
    cardTitle.innerText = name;
    let cardText = document.createElement('p');
    cardText.innerText = `Course: ${course}\nEmail: ${email}`;

   
    cardBody.appendChild(cardImage);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

 
    let demoData = document.getElementById('demo-data');
    demoData.appendChild(card);


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }