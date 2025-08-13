const cityUI = document.getElementById('city-name');
const tempUI = document.getElementById('temperature-span');
const descUI = document.getElementById('description-span');
const windUI = document.getElementById('wind-value');
const humidityUI = document.getElementById('humidity-value');
const feelsUI = document.getElementById('feels-like-value');
const widgetBody = document.getElementById('widget-weather');
const weatherIcon = document.getElementById('weather-icon');
const refreshBtn = document.getElementById('refresh-btn');

const svgs = {
  'Clear-day': `<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"></g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"> <g> <path d="M26,16c0,5.5-4.5,10-10,10S6,21.5,6,16S10.5,6,16,6S26,10.5,26,16z" fill="#FFC10A"></path> </g> <g> <path d="M16,1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2C17,1.4,16.6,1,16,1z" fill="#FFC10A"></path> <path d="M16,27c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C17,27.4,16.6,27,16,27z" fill="#FFC10A"></path> <path d="M30,15h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S30.6,15,30,15z" fill="#FFC10A"></path> <path d="M4,15H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S4.6,15,4,15z" fill="#FFC10A"></path> <path d="M25.2,5.4l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4 c0.4-0.4,0.4-1,0-1.4S25.6,5,25.2,5.4z" fill="#FFC10A"></path> <path d="M6.8,23.8l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4 c0.4-0.4,0.4-1,0-1.4S7.2,23.4,6.8,23.8z" fill="#FFC10A"></path> <path d="M6.8,5.4C6.4,5,5.8,5,5.4,5.4s-0.4,1,0,1.4l1.4,1.4C7,8.4,7.3,8.5,7.5,8.5S8,8.4,8.2,8.2 c0.4-0.4,0.4-1,0-1.4L6.8,5.4z" fill="#FFC10A"></path> <path d="M25.2,23.8c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L25.2,23.8z" fill="#FFC10A"></path> </g> </g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Wearher"></g> </g></svg>`,
  'Clear-night': `<svg height="200px" width="200px" version="1.1" id="_x34_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#F4F4F5;" d="M426.655,444.491c-85.064,74.278-206.9,83.839-299.319,29.581 c-22.308-13.074-42.982-29.907-60.958-50.499C56,411.723,46.93,399.058,39.085,385.82C15.143,345.045,3.539,298.958,3.784,252.953 c0.49-71.582,29.989-142.754,87.026-192.6C138.776,18.433,197.855-1.096,256.69,0.047c45.597,0.817,91.03,13.973,131.069,38.733 c22.063,13.564,42.41,30.724,60.305,51.153c9.724,11.114,18.386,22.799,25.822,34.974 C537.623,227.785,521.117,361.878,426.655,444.491z"></path> <path style="fill:#EDEDEC;" d="M107.7,89.244c99.915-87.35,248.817-74.175,333.815,23.051 c84.998,97.226,75.388,243.379-24.528,330.729c-99.915,87.35-251.727,82.317-336.725-14.908S7.784,176.594,107.7,89.244z"></path> <g> <path style="fill:#D8D8D8;" d="M244.029,141.49c-17.92,37.27-63.032,51.341-100.302,33.421 c-37.27-17.92-53.234-61.357-35.315-98.627c17.92-37.27,62.835-54.046,100.105-36.126 C245.787,58.078,261.948,104.22,244.029,141.49z"></path> <path style="opacity:0.06;fill:#040000;" d="M128.086,97.65c17.92-37.27,62.835-54.046,100.105-36.126 c4.127,1.984,7.994,4.316,11.586,6.942c-7.335-11.909-17.95-21.909-31.26-28.308c-37.27-17.92-82.185-1.144-100.105,36.126 c-15.805,32.872-5.247,70.538,23.036,91.265C118.963,147.091,116.789,121.146,128.086,97.65z"></path> </g> <path style="fill:#D8D8D8;" d="M217.121,218.367c-1.17-5.733,2.71-11.178,8.442-12.348c5.733-1.17,11.248,2.359,12.418,8.091 c1.17,5.733-2.456,11.466-8.189,12.635C224.06,227.916,218.291,224.099,217.121,218.367z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M363.151,96.945c-1.17-5.733,2.71-11.178,8.442-12.348s11.248,2.359,12.418,8.091 c1.17,5.733-2.456,11.466-8.189,12.636C370.089,106.493,364.32,102.677,363.151,96.945z"></path> <path style="fill:#D8D8D8;" d="M282.752,398.389c8.691-7.598,21.813-6.256,29.411,2.435c7.598,8.691,6.926,21.591-1.765,29.189 c-8.691,7.598-22.059,6.972-29.657-1.719C273.143,419.603,274.061,405.987,282.752,398.389z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M58.327,220.961c-1.17-5.733,2.71-11.178,8.442-12.348 c5.733-1.17,11.248,2.359,12.418,8.091s-2.456,11.466-8.189,12.636C65.265,230.51,59.496,226.694,58.327,220.961z"></path> <path style="fill:#D8D8D8;" d="M468.947,281.701c-3.725,36.649-37.256,62.098-73.905,58.373 c-36.649-3.725-63.177-35.279-59.452-71.928c3.725-36.649,36.272-64.305,72.921-60.58 C445.16,211.292,472.673,245.052,468.947,281.701z"></path> <g> <path style="fill:#D8D8D8;" d="M173.239,331.136c14.631,25.328,4.867,57.294-20.461,71.925 c-25.328,14.631-57.07,6.642-71.701-18.686c-14.631-25.328-6.526-58.257,18.802-72.888 C125.206,296.855,158.608,305.808,173.239,331.136z"></path> <path style="opacity:0.06;fill:#040000;" d="M112.818,324.329c18.464-10.666,41.21-8.787,57.855,2.82 c-15.693-22.238-46.847-29.497-70.794-15.663c-25.328,14.631-33.433,47.561-18.802,72.888c4.04,6.993,9.388,12.657,15.541,16.895 c-0.915-1.299-1.788-2.644-2.602-4.052C79.385,371.89,87.49,338.96,112.818,324.329z"></path> </g> <path style="opacity:0.06;fill:#040000;" d="M349.701,282.093c3.725-36.649,36.272-64.305,72.921-60.579 c12.217,1.242,23.415,5.824,32.783,12.735c-11.007-14.534-27.694-24.73-46.893-26.682c-36.649-3.725-69.196,23.93-72.921,60.579 c-2.465,24.247,8.316,46.261,26.506,59.464C352.777,315.06,347.969,299.128,349.701,282.093z"></path> </g> <path style="opacity:0.1;fill:#040000;" d="M254.81,381.707c-105.358,0-198.419-52.064-254.72-131.654 c-2.703,99.72,55.552,194.334,153.936,236.742c128.773,55.507,279.648,1.534,335.155-127.239 c15.267-35.419,21.657-72.747,20.288-109.416C453.162,329.68,360.13,381.707,254.81,381.707z"></path> </g> </g></svg>`,
  'Rain-day': `<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"></g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"> <g> <path d="M16,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C17,26.6,16.6,27,16,27z" fill="#16BCD4"></path> </g> <g> <path d="M16,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C17,30.6,16.6,31,16,31z" fill="#16BCD4"></path> </g> <g> <path d="M10,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C11,26.6,10.6,27,10,27z" fill="#16BCD4"></path> </g> <g> <path d="M10,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C11,30.6,10.6,31,10,31z" fill="#16BCD4"></path> </g> <g> <path d="M22,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C23,26.6,22.6,27,22,27z" fill="#16BCD4"></path> </g> <g> <path d="M22,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C23,30.6,22.6,31,22,31z" fill="#16BCD4"></path> </g> <g> <path d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7s3.1-7,7-7c1.4,0,2.8,0.4,3.9,1.2C13.5,8.1,17.1,6,21,6 C26.5,6,31,10,31,15z" fill="#607C8B"></path> </g> </g> <g id="Wearher"></g> </g></svg>`,
  'Rain-night': `<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"> <g> <path d="M16,22c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C17,22.4,16.6,22,16,22z" fill="#16BCD4"></path> <path d="M16,28c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1C17,28.4,16.6,28,16,28z" fill="#16BCD4"></path> <path d="M10,22c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C11,22.4,10.6,22,10,22z" fill="#16BCD4"></path> <path d="M10,28c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1C11,28.4,10.6,28,10,28z" fill="#16BCD4"></path> <path d="M22,22c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C23,22.4,22.6,22,22,22z" fill="#16BCD4"></path> <path d="M22,28c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1C23,28.4,22.6,28,22,28z" fill="#16BCD4"></path> </g> <g> <g> <path d="M14.9,10.5c-0.8,0.8-1.3,1.7-1.6,2.6c-0.1,0.3-0.4,0.6-0.7,0.7c-0.1,0-0.2,0-0.2,0 c-0.3,0-0.5-0.1-0.7-0.3C10.7,12.5,9.4,12,8,12c-1,0-2,0.3-2.8,0.8C5,13,4.7,13,4.5,13c-0.3-0.1-0.5-0.2-0.6-0.5 c-0.4-0.7-0.8-1.5-1-2.3C2,6.5,3.8,2.8,7.3,1.1C7.6,0.9,8,1,8.3,1.2c0.3,0.2,0.5,0.6,0.4,0.9c-0.1,0.7,0,1.4,0.1,2 c0.6,2.6,2.8,4.5,5.5,4.7c0.4,0,0.7,0.3,0.9,0.7C15.2,9.8,15.1,10.3,14.9,10.5z" fill="#FFC10A"></path> </g> </g> <path d="M21,6c-2.9,0-5.7,1.1-7.6,3.1c-0.6,0.6-1.1,1.3-1.5,2.1c-2.3-1.5-5.5-1.6-7.8,0C2.2,12.5,1,14.7,1,17 c0,3.9,3.1,7,7,7h13c5.5,0,10-4,10-9C31,10,26.5,6,21,6z" fill="#607C8B"></path> </g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"></g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Wearher"></g> </g></svg>`,
};

const otherFunctions = {
  getTimeOfDay() {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 18) {
      return 'day';
    }
    if (hours >= 18 && hours < 22) {
      return 'evening';
    } else {
      return 'night';
    }
  },
};

const backgroundChanger = () => {
  widgetBody.classList.remove('day', 'evening', 'night');
  widgetBody.classList.add(otherFunctions.getTimeOfDay());
};

backgroundChanger();

const defaultLocation = { lat: 50.4504, lon: 30.5245 };

const userLocationRequest = () => { navigator.geolocation.getCurrentPosition(
  (position) => {
    try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const userLocation = { lat: lat, lon: lon };
    fetchWeather(userLocation);
    } catch (error) {
      console.error('An error occured: ', error);
      fetchWeather(defaultLocation);
    }
  },
  (error) => {
    console.error('Location error', error);
    fetchWeather(defaultLocation);
  }
)
};

userLocationRequest();

const fetchWeather = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${
      location.lon
    }&appid=${'749765032fe10cdeb264e6084cddffc7'}&units=${'metric'}`
  )
    .then((data) => data.json())
    .then((data) => {
      const weatherStatus = data.weather[0].main;
      let timeOfDay = otherFunctions.getTimeOfDay();
      cityUI.innerText = data.name;
      tempUI.innerText = `${Math.floor(data.main.temp)}°C`;
      descUI.innerText = data.weather[0].description;
      windUI.innerText = data.wind.speed + 'm/s';
      humidityUI.innerText = data.main.humidity + '%';
      feelsUI.innerText = `${Math.floor(data.main.feels_like)}°C`;
      if (timeOfDay === 'evening') timeOfDay = 'day';
      const keyWithTime = `${weatherStatus}-${timeOfDay}`;
      if (svgs[keyWithTime]) {
        weatherIcon.innerHTML = svgs[keyWithTime];
        return;
      } else if (svgs[weatherStatus]) {
        weatherIcon.innerHTML = svgs[weatherStatus];
        return;
      } else {
        return;
      }
    })
    .catch((error) => {
      const emptyData = '--';
      console.error('Couldnt receive correct data');
      console.error('Error:', error);
      cityUI.innerText = emptyData;
      tempUI.innerText = emptyData;
      descUI.innerText = emptyData;
      windUI.innerText = emptyData;
      humidityUI.innerText = emptyData;
      feelsUI.innerText = emptyData;
    });
};

refreshBtn.addEventListener('click', () => {
  backgroundChanger();
  userLocationRequest();
})