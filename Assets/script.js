
let weather = {
    // apiKey: "80ba5688ceb50ce5e1b26c1c14ef377e",
    fetchWeather: function (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=imperial&appid=80ba5688ceb50ce5e1b26c1c14ef377e` 
      )
        .then((response) => {
          // if (!response.ok) {
          //   alert("No weather found.");
          //   throw new Error("No weather found.");
          // }
           return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
  // Displays information and data about the weather
    displayWeather: function (data){
      const { name } = data;
      console.log(data)
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  // Listens for the mouse click
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  // Listens for the enter input
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("");