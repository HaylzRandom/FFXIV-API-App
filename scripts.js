const app = document.getElementById('root');
const minTable = document.getElementById('minionTable')

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);


// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://xivapi.com/character/30713621', true)

// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((Character) => {
//         console.log(Character.server);
//         // // Create a div with a card class
//         // const card = document.createElement('div');
//         // card.setAttribute('class', 'card');

//         // // Create h1 and set text context to film title
//         // const h1 = document.createElement('h1');
//         // h1.textContent = movie.title;

//         // // Create p and set the text content to film description
//         // const p = document.createElement('p');
//         // movie.description = movie.description.substring(0, 300); // Limit to 300 chars
//         // p.textContent = `${movie.description}...`

//         // // Append cards to container element
//         // container.appendChild(card);

//         // // Each card will contain a h1 and a p
//         // card.appendChild(h1);
//         // card.appendChild(p);
//     });
//   }
//   else {
//       const errorMessage = document.createElement('marquee');
//       errorMessage.textContent = 'Not working!';
//       app.appendChild(errorMessage);
//   }

// }

// // Send request
// request.send();

fetch("https://xivapi.com/character/30713621?data=MIMO", { mode: 'cors' })
	.then(response => response.json())
  //.then(data => console.info(data.FreeCompany.Focus.Name))
  .then (data => {
    data.Minions.forEach(Minion => {
      // Create a div with a card class
        const minRow = document.createElement('tr');
        minRow.setAttribute('class', 'minRow');

        const minIcon = document.createElement('td');
        minIcon.setAttribute('class', 'minIcon');
        // Create p and set the text content to film description
        const img = document.createElement('img');
        //movie.description = movie.description.substring(0, 300); // Limit to 300 chars
        img.src = Minion.Icon;
        img.setAttribute('class', 'minImg');
        // Create h1 and set text context to film title
        const minName = document.createElement('td');
        minName.setAttribute('class', 'minName');
        minName.textContent = Minion.Name;

        // Append cards to container element
        minTable.appendChild(minRow);

        minIcon.appendChild(img);
        minRow.appendChild(minIcon);
        minRow.appendChild(minName);
        // Each card will contain a h1 and a p
        // card.appendChild(h1);
        // card.appendChild(img);
    });
  });

