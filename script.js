// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click', () => {
//     const APIKey='f334e2ba66ffa5970c4207243b7b7494';

//     const cityName = document.querySelector('.search-box input').value;

//     if(cityName === '') 
//         return alert('Please enter a city name');

//     fetch('https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid={APIKey}').then(response =>response.json()).then(json =>{
    
//         const image = document.querySelector('.weather-box img');
//         const temperature = document.querySelector('.weather-box .temperature');
//         const description = document.querySelector('.weather-box .description');
//         const humidity = document.querySelector('.weather-details .humidity span');
//         const wind = document.querySelector('.weather-details .wind span');

//         switch (json.weather[0].main) {
//             case 'Clear':
//                 image.src = './images/clear.png';
//                 break;

//             case 'Rain':
//                 image.src = './images/rain.png';
//                 break;
                
//             case 'Snow':
//                 image.src = './images/snow.png';
//                 break;   
                
//             case 'Clouds':
//                 image.src = './images/cloud.png';
//                 break; 

//             case 'Mist':
//                 image.src = './images/mist.png';
//                 break;         
        
//             default:
//                 image.src = './cloud.png';
//                 // break;
//         }


    
//     })


// })


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = 'f334e2ba66ffa5970c4207243b7b7494';
    const cityName = document.querySelector('.search-box input').value;

    if (cityName === '') 
        return alert('Please enter a city name');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                alert('City not found');
                return;
            }

            container.style.height='555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = './clear.png';
                    break;

                case 'Rain':
                    image.src = './rain.png';
                    break;

                case 'Snow':
                    image.src = './snow.png';
                    break;

                case 'Clouds':
                    image.src = './cloud.png';
                    break;

                case 'Mist':
                    image.src = './mist.png';
                    break;

                default:
                    image.src = './cloud.png';
            }

            temperature.innerHTML = `${json.main.temp}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
        })
        .catch(error => {
            alert('An error occurred while fetching the weather data');
            console.error('Error:', error);
        });
});
