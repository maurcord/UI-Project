//Defining url variable and linking API
let url = "https://swapi.dev/api/starships/"

// Getting data from API and returning the results with JSON.
fetch(url)
    .then(function(res) {
        return res.json()
    })  
    // Created a function that loops through the results. 
    .then(function(data) {
        for (let i=0;i<4;i++){
            console.log(data.results[i])
            let newLi = document.createElement('li')
           // Put an Event Listener on the Content DIV, when clicked, all of the results are shown.
            newLi.addEventListener('click',(e)=>{
                let content = document.querySelector(".content")
                content.style.border = "5px solid grey"
                content.innerHTML = "Name: " + data.results[i].name + '<br> ' + "Model: " +
                data.results[i].model + '<br>' + "Manufacturer: " +
                data.results[i].manufacturer + '<br>' + 'Passengers: ' +
                data.results[i].passengers + '<br>' + 'Cost in Credits:' +
                data.results[i].cost_in_credits + '<br>' + "Length: " +
                data.results[i].length + '<br>' + "Starship Class: " +
                data.results[i].starship_class + '<br>' + "Cargo Capacity: " +
                data.results[i].cargo_capacity + '<br>' + "HyperDrive Rating: " +
                data.results[i].hyperdrive_rating;
            }
            )
            // Li's text is changed to the results "Name" aka the Starships
            newLi.innerText = data.results[i].name
            console.log(newLi)
            let starShipListContainer = document.querySelector("ul");
            starShipListContainer.appendChild(newLi)

        }
    })
    .catch(err => console.log("something went wrong...", err));


