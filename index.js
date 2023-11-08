document.addEventListener('DOMContentLoaded', function () {
    const weatherForm = document.getElementById('weatherForm');
    const weatherResults = document.getElementById('weatherResults');

    weatherForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const locationInput = document.getElementById('location');
        const location = locationInput.value.trim();

        if (location) {
            const apiKey = // your api key;
            const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
            
                    mylat = data[0].lat
                    mylon = data[0].lon
                    myCityName = data[0].name
                    myStateName = data[0].state
                    myUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=apiKeyab&units=metric`;
                    fetch(myUrlWeather)
                    .then(respone => respone.json())
                    .then(data => {
                        const temperature = Math.round(data.main.temp);
                        const temperatureElement = document.querySelector(".temp-margin");
                        temperatureElement.innerHTML = `${temperature}°C`;

                        const humidity = data.main.humidity;
                        const humidityElement = document.querySelector(".humidity-current");
                        humidityElement.innerHTML = `${humidity} %`

                        const windSpeeds = data.wind.speed;
                        const windSpeedElement = document.querySelector(".wind-speed");
                        windSpeedElement.innerHTML = `${windSpeeds} KM/h`

                        const feelsLike = Math.round(data.main.feels_like);
                        const feelsLikeElement = document.querySelector(".h-margin");
                        feelsLikeElement.innerHTML = `Feels like ${feelsLike}°C`

                        const cloudCovers = data.clouds.all;
                        const cloudCoverElement = document.querySelector(".cloud-cover");
                        cloudCoverElement.innerHTML = `${cloudCovers} %`

                        const locations = data.name;
                        const locationElement = document.querySelector(".place-name");
                        locationElement.innerHTML = `${locations}`

                        const locations1 = data.name;
                        const location1Element = document.querySelector(".report4");
                        location1Element.innerHTML = `${locations1}`

                        const locations2 = data.sys.country;
                        const location2Element = document.querySelector(".the-country-name");
                        location2Element.innerHTML = `${locations2}`
                        
                        const cloudCovers2 = data.weather[0].description;
                        const cloudCover2Element = document.querySelector(".h-margin1");
                        cloudCover2Element.innerHTML = `${cloudCovers2}`
                    })

                    airQualityDataUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${mylat}&lon=${mylon}&appid=apikey`;
                    fetch(airQualityDataUrl)
                    .then(response => response.json())
                    .then(data => {
                        const aqinumber = data.list[0].main.aqi
                        const aqinumberElement = document.querySelector('.aqi-number-value');
                        aqinumberElement.innerHTML = `${aqinumber}`;

                        const conumber = data.list[0].components.co
                        const conumberElement = document.querySelector('.co-number');
                        conumberElement.innerHTML = `${conumber}`;

                        const nonumber = data.list[0].components.no
                        const nonumberElement = document.querySelector('.no-number');
                        nonumberElement.innerHTML = `${nonumber}`;

                        const onumber = data.list[0].components.o3
                        const onumberElement = document.querySelector('.o-number');
                        onumberElement.innerHTML = `${onumber}`;

                        const pmnumber = data.list[0].components.pm10
                        const pmnumberElement = document.querySelector('.pm-number');
                        pmnumberElement.innerHTML = `${pmnumber}`;

                        const pm1number = data.list[0].components.pm2_5
                        const pm1numberElement = document.querySelector('.pm1-number');
                        pm1numberElement.innerHTML = `${pm1number}`;

                        const sonumber = data.list[0].components.so2
                        const sonumberElement = document.querySelector('.so-number');
                        sonumberElement.innerHTML = `${sonumber}`;
                    })

                    
                    tomorrowUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${mylat}%2C%20${mylon}&units=metric&apikey=apikey`;
                    fetch(tomorrowUrl)
                    .then(response => response.json())
                    .then(data => {
                        const uvIndexs = data.data.values.uvIndex;
                        const uvIndexElement = document.querySelector(".uv-index");
                        uvIndexElement.innerHTML = `${uvIndexs}`
                    })

                    tomorrowFiveDaysUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${mylat}%2C%20${mylon}&timesteps=1d&units=metric&apikey=apikey`;
                    fetch(tomorrowFiveDaysUrl)
                    .then(response => response.json())
                    .then(data => {

                        // day 1
                    const today = data.timelines.daily[0].time;
                    const dateElement = document.querySelector(".today-date");
                    const date = new Date(today);
                    const dayOfWeekIndex = date.getDay();
                    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
                    dateElement.innerHTML = `${dayOfWeek}`;
                // temperature
                    const todayf = Math.round(data.timelines.daily[0].values.temperatureMin);
                    const todayFElement = document.querySelector(".min-temp")
                    todayFElement.innerHTML = `${todayf}°C`
                    const todayf1 = Math.round(data.timelines.daily[0].values.temperatureMax);
                    const todayFElement1 = document.querySelector(".max-temp")
                    todayFElement1.innerHTML = `${todayf1}°C`
                // perpetation
                    const perpetation = Math.round(data.timelines.daily[0].values.precipitationProbabilityAvg);
                    // console.log(perpetation)
                    const perpetationElement = document.querySelector(".avg-percipitation");
                    perpetationElement.innerHTML = `${perpetation}%`;
                // humidity
                    const avgHumid = Math.round(data.timelines.daily[0].values.humidityAvg);
                    const avgHumidElement = document.querySelector(".avg-humidity");
                    avgHumidElement.innerHTML = `${avgHumid}%`


                // day 2
                    const today1 = data.timelines.daily[1].time;
                    const dateElement1 = document.querySelector(".today-date11");
                    const date1 = new Date(today1);
                    const dayOfWeekIndex1 = date1.getDay();
                    const daysOfWeek1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek1 = daysOfWeek1[dayOfWeekIndex1];
                    dateElement1.innerHTML = `${dayOfWeek1}`;
                // temperature
                    const todayf2 = Math.round(data.timelines.daily[1].values.temperatureMin);
                    const todayFElement2 = document.querySelector(".min-temp1")
                    todayFElement2.innerHTML = `${todayf2}°C`
                    const todayf3 = Math.round(data.timelines.daily[1].values.temperatureMax);
                    const todayFElement3 = document.querySelector(".max-temp1")
                    todayFElement3.innerHTML = `${todayf3}°C`
                // perpetation
                    const perpetation1 = Math.round(data.timelines.daily[1].values.precipitationProbabilityAvg);
                    const perpetationElement1 = document.querySelector(".avg-percipitation1");
                    perpetationElement1.innerHTML = ` ${perpetation1}%`;
                    // humidity
                    const avgHumid1 = Math.round(data.timelines.daily[1].values.humidityAvg);
                    const avgHumid1Element = document.querySelector(".avg-humidity1");
                    avgHumid1Element.innerHTML = `${avgHumid1}%`


                // day 3
                    const today2 = data.timelines.daily[2].time;
                    const dateElement2 = document.querySelector(".today-date2");
                    const date2 = new Date(today2);
                    const dayOfWeekIndex2 = date2.getDay();
                    const daysOfWeek2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek2 = daysOfWeek2[dayOfWeekIndex2];
                    dateElement2.innerHTML = `${dayOfWeek2}`;
                // temperature
                    const todayf4 = Math.round(data.timelines.daily[2].values.temperatureMin);
                    const todayFElement4 = document.querySelector(".min-temp2")
                    todayFElement4.innerHTML = `${todayf4}°C`
                    const todayf5 = Math.round(data.timelines.daily[2].values.temperatureMax);
                    const todayFElement5 = document.querySelector(".max-temp2")
                    todayFElement5.innerHTML = `${todayf5}°C`
                // perpetation
                    const perpetation2 = Math.round(data.timelines.daily[2].values.precipitationProbabilityAvg);
                    const perpetationElement2 = document.querySelector(".avg-percipitation2");
                    perpetationElement2.innerHTML = ` ${perpetation2}%`;
                    // humidity
                    const avgHumid2 = Math.round(data.timelines.daily[2].values.humidityAvg);
                    const avgHumid2Element = document.querySelector(".avg-humidity2");
                    avgHumid2Element.innerHTML = `${avgHumid2}%`


                // day 4
                    const today3 = data.timelines.daily[3].time;
                    const dateElement3 = document.querySelector(".today-date3");
                    const date3 = new Date(today3);
                    const dayOfWeekIndex3 = date3.getDay();
                    const daysOfWeek3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek3 = daysOfWeek3[dayOfWeekIndex3];
                    dateElement3.innerHTML = `${dayOfWeek3}`;
                // temperature
                    const todayf6 = Math.round(data.timelines.daily[3].values.temperatureMin);
                    const todayFElement6 = document.querySelector(".min-temp3")
                    todayFElement6.innerHTML = `${todayf6}°C`
                    const todayf7 = Math.round(data.timelines.daily[3].values.temperatureMax);
                    const todayFElement7 = document.querySelector(".max-temp3")
                    todayFElement7.innerHTML = `${todayf7}°C`

                // perpetation
                    const perpetation3 = Math.round(data.timelines.daily[3].values.precipitationProbabilityAvg);
                    const perpetationElement3 = document.querySelector(".avg-percipitation3");
                    perpetationElement3.innerHTML = ` ${perpetation3}%`;
                // humidity
                    const avgHumid3 = Math.round(data.timelines.daily[3].values.humidityAvg);
                    const avgHumid3Element = document.querySelector(".avg-humidity3");
                    avgHumid3Element.innerHTML = `${avgHumid3}%`


                // day 5
                    const today4 = data.timelines.daily[4].time;
                    const dateElement4 = document.querySelector(".today-date4");
                    const date4 = new Date(today4);
                    const dayOfWeekIndex4 = date4.getDay();
                    const daysOfWeek4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek4 = daysOfWeek4[dayOfWeekIndex4];
                    dateElement4.innerHTML = `${dayOfWeek4}`;
                // temperature
                    const todayf8 = Math.round(data.timelines.daily[4].values.temperatureMin);
                    const todayFElement8 = document.querySelector(".min-temp4")
                    todayFElement8.innerHTML = `${todayf8}°C`
                    const todayf9 = Math.round(data.timelines.daily[4].values.temperatureMax);
                    const todayFElement9 = document.querySelector(".max-temp4")
                    todayFElement9.innerHTML = `${todayf9}°C`
                // perpetation
                    const perpetation4 = Math.round(data.timelines.daily[4].values.precipitationProbabilityAvg);
                    const perpetationElement4 = document.querySelector(".avg-percipitation4");
                    perpetationElement4.innerHTML = ` ${perpetation4}%`;
                // humidity
                    const avgHumid4 = Math.round(data.timelines.daily[4].values.humidityAvg);
                    const avgHumid4Element = document.querySelector(".avg-humidity4");
                    avgHumid4Element.innerHTML = `${avgHumid4}%`


                // day 6
                    const today5 = data.timelines.daily[5].time;
                    const dateElement5 = document.querySelector(".today-date5");
                    const date5 = new Date(today5);
                    const dayOfWeekIndex5 = date5.getDay();
                    const daysOfWeek5 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const dayOfWeek5 = daysOfWeek5[dayOfWeekIndex5];
                    dateElement5.innerHTML = `${dayOfWeek5}`;
                // temperature
                    const todayf10 = Math.round(data.timelines.daily[5].values.temperatureMin);
                    const todayFElement10 = document.querySelector(".min-temp5")
                    todayFElement10.innerHTML = `${todayf10}°C`
                    const todayf11 = Math.round(data.timelines.daily[5].values.temperatureMax);
                    const todayFElement11 = document.querySelector(".max-temp5")
                    todayFElement11.innerHTML = `${todayf11}°C`
                // perpetation
                    const perpetation5 = Math.round(data.timelines.daily[5].values.precipitationProbabilityAvg);
                    const perpetationElement5 = document.querySelector(".avg-percipitation5");
                    perpetationElement5.innerHTML = ` ${perpetation5}%`;
                // humidity
                    const avgHumid5 = Math.round(data.timelines.daily[5].values.humidityAvg);
                    const avgHumid5Element = document.querySelector(".avg-humidity5");
                    avgHumid5Element.innerHTML = `${avgHumid5}%`
                    })

                    hourlyUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${mylat}&lon=${mylon}&appid=apikeyab&units=metric`;
                    fetch(hourlyUrl)
                    .then(response => response.json())
                    .then(data => {

                    const temperature = Math.round(data.list[0].main.temp);
                    const temperatureElement = document.querySelector(".hourly-temp");
                    temperatureElement.innerHTML = `${temperature}°C`

                    const humidity = data.list[0].main.humidity;
                    const humidityElement = document.querySelector(".hourly-humid");
                    humidityElement.innerHTML = `${humidity}%`

                    const wind = data.list[0].wind.speed;
                    const windElement = document.querySelector(".hourly-wind");
                    windElement.innerHTML = `${wind}km/h`

                    const discription = data.list[0].clouds.all;
                    const discriptionElement = document.querySelector(".hourly-disc");
                    discriptionElement.innerHTML = `${discription}%`

                    const time = data.list[0].dt_txt;
                    const timeElement = document.querySelector(".hourly-time");
                    timeElement.innerHTML = `${time}`


                    const temperature1 = Math.round(data.list[1].main.temp);
                    const temperatureElement1 = document.querySelector(".hourly-temp1");
                    temperatureElement1.innerHTML = `${temperature1}°C`

                    const humidity1 = data.list[1].main.humidity;
                    const humidityElement1 = document.querySelector(".hourly-humid1");
                    humidityElement1.innerHTML = `${humidity1}%`

                    const wind1 = data.list[1].wind.speed;
                    const windElement1 = document.querySelector(".hourly-wind1");
                    windElement1.innerHTML = `${wind1}km/h`

                    const discription1 = data.list[1].clouds.all;
                    const discriptionElement1 = document.querySelector(".hourly-disc1");
                    discriptionElement1.innerHTML = `${discription1}%`

                    const time1 = data.list[1].dt_txt;
                    const timeElement1 = document.querySelector(".hourly-time1");
                    timeElement1.innerHTML = `${time1}`

                    
                    const temperature2 = Math.round(data.list[2].main.temp);
                    const temperatureElement2 = document.querySelector(".hourly-temp2");
                    temperatureElement2.innerHTML = `${temperature2}°C`

                    const humidity2 = data.list[2].main.humidity;
                    const humidityElement2 = document.querySelector(".hourly-humid2");
                    humidityElement2.innerHTML = `${humidity2}%`

                    const wind2 = data.list[2].wind.speed;
                    const windElement2 = document.querySelector(".hourly-wind2");
                    windElement2.innerHTML = `${wind2}km/h`

                    const discription2 = data.list[2].clouds.all;
                    const discriptionElement2 = document.querySelector(".hourly-disc2");
                    discriptionElement2.innerHTML = `${discription2}%`

                    const time2 = data.list[2].dt_txt;
                    const timeElement2 = document.querySelector(".hourly-time2");
                    timeElement2.innerHTML = `${time2}`


                    const temperature3 = Math.round(data.list[3].main.temp);
                    const temperatureElement3 = document.querySelector(".hourly-temp3");
                    temperatureElement3.innerHTML = `${temperature3}°C`

                    const humidity3 = data.list[3].main.humidity;
                    const humidityElement3 = document.querySelector(".hourly-humid3");
                    humidityElement3.innerHTML = `${humidity3}%`

                    const wind3 = data.list[3].wind.speed;
                    const windElement3 = document.querySelector(".hourly-wind3");
                    windElement3.innerHTML = `${wind3}km/h`

                    const discription3 = data.list[3].clouds.all;
                    const discriptionElement3 = document.querySelector(".hourly-disc3");
                    discriptionElement3.innerHTML = `${discription3}%`

                    const time3 = data.list[3].dt_txt;
                    const timeElement3 = document.querySelector(".hourly-time3");
                    timeElement3.innerHTML = `${time3}`


                    const temperature4 = Math.round(data.list[4].main.temp);
                    const temperatureElement4 = document.querySelector(".hourly-temp4");
                    temperatureElement4.innerHTML = `${temperature4}°C`

                    const humidity4 = data.list[4].main.humidity;
                    const humidityElement4 = document.querySelector(".hourly-humid4");
                    humidityElement4.innerHTML = `${humidity4}%`

                    const wind4 = data.list[4].wind.speed;
                    const windElement4 = document.querySelector(".hourly-wind4");
                    windElement4.innerHTML = `${wind4}km/h`

                    const discription4 = data.list[4].clouds.all;
                    const discriptionElement4 = document.querySelector(".hourly-disc4");
                    discriptionElement4.innerHTML = `${discription4}%`

                    const time4 = data.list[4].dt_txt;
                    const timeElement4 = document.querySelector(".hourly-time4");
                    timeElement4.innerHTML = `${time4}`


                    const temperature5 = Math.round(data.list[5].main.temp);
                    const temperatureElement5 = document.querySelector(".hourly-temp5");
                    temperatureElement5.innerHTML = `${temperature5}°C`

                    const humidity5 = data.list[5].main.humidity;
                    const humidityElement5 = document.querySelector(".hourly-humid5");
                    humidityElement5.innerHTML = `${humidity5}%`

                    const wind5 = data.list[5].wind.speed;
                    const windElement5 = document.querySelector(".hourly-wind5");
                    windElement5.innerHTML = `${wind5}km/h`

                    const discription5 = data.list[5].clouds.all;
                    const discriptionElement5 = document.querySelector(".hourly-disc5");
                    discriptionElement5.innerHTML = `${discription5}%`

                    const time5 = data.list[5].dt_txt;
                    const timeElement5 = document.querySelector(".hourly-time5");
                    timeElement5.innerHTML = `${time5}`


                    const temperature6 = Math.round(data.list[6].main.temp);
                    const temperatureElement6 = document.querySelector(".hourly-temp6");
                    temperatureElement6.innerHTML = `${temperature6}°C`

                    const humidity6 = data.list[6].main.humidity;
                    const humidityElement6 = document.querySelector(".hourly-humid6");
                    humidityElement6.innerHTML = `${humidity6}%`

                    const wind6 = data.list[6].wind.speed;
                    const windElement6 = document.querySelector(".hourly-wind6");
                    windElement6.innerHTML = `${wind6}km/h`

                    const discription6 = data.list[6].clouds.all;
                    const discriptionElement6 = document.querySelector(".hourly-disc6");
                    discriptionElement6.innerHTML = `${discription6}%`

                    const time6 = data.list[6].dt_txt;
                    const timeElement6 = document.querySelector(".hourly-time6");
                    timeElement6.innerHTML = `${time6}`


                    const temperature7 = Math.round(data.list[7].main.temp);
                    const temperatureElement7 = document.querySelector(".hourly-temp7");
                    temperatureElement7.innerHTML = `${temperature7}°C`

                    const humidity7 = data.list[7].main.humidity;
                    const humidityElement7 = document.querySelector(".hourly-humid7");
                    humidityElement7.innerHTML = `${humidity7}%`

                    const wind7 = data.list[7].wind.speed;
                    const windElement7 = document.querySelector(".hourly-wind7");
                    windElement7.innerHTML = `${wind7}km/h`

                    const discription7 = data.list[7].clouds.all;
                    const discriptionElement7 = document.querySelector(".hourly-disc7");
                    discriptionElement7.innerHTML = `${discription7}%`

                    const time7 = data.list[7].dt_txt;
                    const timeElement7 = document.querySelector(".hourly-time7");
                    timeElement7.innerHTML = `${time7}`


                    const temperature8 = Math.round(data.list[8].main.temp);
                    const temperatureElement8 = document.querySelector(".hourly-temp8");
                    temperatureElement8.innerHTML = `${temperature8}°C`

                    const humidity8 = data.list[8].main.humidity;
                    const humidityElement8 = document.querySelector(".hourly-humid8");
                    humidityElement8.innerHTML = `${humidity8}%`

                    const wind8 = data.list[8].wind.speed;
                    const windElement8 = document.querySelector(".hourly-wind8");
                    windElement8.innerHTML = `${wind8}km/h`

                    const discription8 = data.list[8].clouds.all;
                    const discriptionElement8 = document.querySelector(".hourly-disc8");
                    discriptionElement8.innerHTML = `${discription8}%`

                    const time8 = data.list[8].dt_txt;
                    const timeElement8 = document.querySelector(".hourly-time8");
                    timeElement8.innerHTML = `${time8}`


                    const temperature9 = Math.round(data.list[9].main.temp);
                    const temperatureElement9 = document.querySelector(".hourly-temp9");
                    temperatureElement9.innerHTML = `${temperature9}°C`

                    const humidity9 = data.list[9].main.humidity;
                    const humidityElement9 = document.querySelector(".hourly-humid9");
                    humidityElement9.innerHTML = `${humidity9}%`

                    const wind9 = data.list[9].wind.speed;
                    const windElement9 = document.querySelector(".hourly-wind9");
                    windElement9.innerHTML = `${wind9}km/h`

                    const discription9 = data.list[9].clouds.all;
                    const discriptionElement9 = document.querySelector(".hourly-disc9");
                    discriptionElement9.innerHTML = `${discription9}%`

                    const time9 = data.list[9].dt_txt;
                    const timeElement9 = document.querySelector(".hourly-time9");
                    timeElement9.innerHTML = `${time9}`


                    const temperature10 = Math.round(data.list[10].main.temp);
                    const temperatureElement10 = document.querySelector(".hourly-temp10");
                    temperatureElement10.innerHTML = `${temperature10}°C`

                    const humidity10 = data.list[10].main.humidity;
                    const humidityElement10 = document.querySelector(".hourly-humid10");
                    humidityElement10.innerHTML = `${humidity10}%`

                    const wind10 = data.list[10].wind.speed;
                    const windElement10 = document.querySelector(".hourly-wind10");
                    windElement10.innerHTML = `${wind10}km/h`

                    const discription10 = data.list[10].clouds.all;
                    const discriptionElement10 = document.querySelector(".hourly-disc10");
                    discriptionElement10.innerHTML = `${discription10}%`

                    const time10 = data.list[10].dt_txt;
                    const timeElement10 = document.querySelector(".hourly-time10");
                    timeElement10.innerHTML = `${time10}`


                    const temperature11 = Math.round(data.list[11].main.temp);
                    const temperatureElement11 = document.querySelector(".hourly-temp11");
                    temperatureElement11.innerHTML = `${temperature11}°C`

                    const humidity11 = data.list[11].main.humidity;
                    const humidityElement11 = document.querySelector(".hourly-humid11");
                    humidityElement11.innerHTML = `${humidity11}%`

                    const wind11 = data.list[11].wind.speed;
                    const windElement11 = document.querySelector(".hourly-wind11");
                    windElement11.innerHTML = `${wind11}km/h`

                    const discription11 = data.list[11].clouds.all;
                    const discriptionElement11 = document.querySelector(".hourly-disc11");
                    discriptionElement11.innerHTML = `${discription11}%`

                    const time11 = data.list[11].dt_txt;
                    const timeElement11 = document.querySelector(".hourly-time11");
                    timeElement11.innerHTML = `${time11}`


                    const temperature12 = Math.round(data.list[12].main.temp);
                    const temperatureElement12 = document.querySelector(".hourly-temp12");
                    temperatureElement12.innerHTML = `${temperature12}°C`

                    const humidity12 = data.list[12].main.humidity;
                    const humidityElement12 = document.querySelector(".hourly-humid12");
                    humidityElement12.innerHTML = `${humidity12}%`

                    const wind12 = data.list[12].wind.speed;
                    const windElement12 = document.querySelector(".hourly-wind12");
                    windElement12.innerHTML = `${wind12}km/h`

                    const discription12 = data.list[12].clouds.all;
                    const discriptionElement12 = document.querySelector(".hourly-disc12");
                    discriptionElement12.innerHTML = `${discription12}%`

                    const time12 = data.list[12].dt_txt;
                    const timeElement12 = document.querySelector(".hourly-time12");
                    timeElement12.innerHTML = `${time12}`


                    const temperature13 = Math.round(data.list[13].main.temp);
                    const temperatureElement13 = document.querySelector(".hourly-temp13");
                    temperatureElement13.innerHTML = `${temperature13}°C`

                    const humidity13 = data.list[13].main.humidity;
                    const humidityElement13 = document.querySelector(".hourly-humid13");
                    humidityElement13.innerHTML = `${humidity13}%`

                    const wind13 = data.list[13].wind.speed;
                    const windElement13 = document.querySelector(".hourly-wind13");
                    windElement13.innerHTML = `${wind13}km/h`

                    const discription13 = data.list[13].clouds.all;
                    const discriptionElement13 = document.querySelector(".hourly-disc13");
                    discriptionElement13.innerHTML = `${discription13}%`

                    const time13 = data.list[13].dt_txt;
                    const timeElement13 = document.querySelector(".hourly-time13");
                    timeElement13.innerHTML = `${time13}`


                    const temperature14 = Math.round(data.list[14].main.temp);
                    const temperatureElement14 = document.querySelector(".hourly-temp14");
                    temperatureElement14.innerHTML = `${temperature14}°C`

                    const humidity14 = data.list[14].main.humidity;
                    const humidityElement14 = document.querySelector(".hourly-humid14");
                    humidityElement14.innerHTML = `${humidity14}%`

                    const wind14 = data.list[14].wind.speed;
                    const windElement14 = document.querySelector(".hourly-wind14");
                    windElement14.innerHTML = `${wind14}km/h`

                    const discription14 = data.list[14].clouds.all;
                    const discriptionElement14 = document.querySelector(".hourly-disc14");
                    discriptionElement14.innerHTML = `${discription14}%`

                    const time14 = data.list[14].dt_txt;
                    const timeElement14 = document.querySelector(".hourly-time14");
                    timeElement14.innerHTML = `${time14}`


                    const temperature15 = Math.round(data.list[15].main.temp);
                    const temperatureElement15 = document.querySelector(".hourly-temp15");
                    temperatureElement15.innerHTML = `${temperature15}°C`

                    const humidity15 = data.list[15].main.humidity;
                    const humidityElement15 = document.querySelector(".hourly-humid15");
                    humidityElement15.innerHTML = `${humidity15}%`

                    const wind15 = data.list[15].wind.speed;
                    const windElement15 = document.querySelector(".hourly-wind15");
                    windElement15.innerHTML = `${wind15}km/h`

                    const discription15 = data.list[15].clouds.all;
                    const discriptionElement15 = document.querySelector(".hourly-disc15");
                    discriptionElement15.innerHTML = `${discription15}%`

                    const time15 = data.list[15].dt_txt;
                    const timeElement15 = document.querySelector(".hourly-time15");
                    timeElement15.innerHTML = `${time15}`


                    const temperature16 = Math.round(data.list[16].main.temp);
                    const temperatureElement16 = document.querySelector(".hourly-temp16");
                    temperatureElement16.innerHTML = `${temperature16}°C`

                    const humidity16 = data.list[16].main.humidity;
                    const humidityElement16 = document.querySelector(".hourly-humid16");
                    humidityElement16.innerHTML = `${humidity16}%`

                    const wind16 = data.list[16].wind.speed;
                    const windElement16 = document.querySelector(".hourly-wind16");
                    windElement16.innerHTML = `${wind16}km/h`

                    const discription16 = data.list[16].clouds.all;
                    const discriptionElement16 = document.querySelector(".hourly-disc16");
                    discriptionElement16.innerHTML = `${discription16}%`

                    const time16 = data.list[16].dt_txt;
                    const timeElement16 = document.querySelector(".hourly-time16");
                    timeElement16.innerHTML = `${time16}`


                    const temperature17 = Math.round(data.list[17].main.temp);
                    const temperatureElement17 = document.querySelector(".hourly-temp17");
                    temperatureElement17.innerHTML = `${temperature17}°C`

                    const humidity17 = data.list[17].main.humidity;
                    const humidityElement17 = document.querySelector(".hourly-humid17");
                    humidityElement17.innerHTML = `${humidity17}%`

                    const wind17 = data.list[17].wind.speed;
                    const windElement17 = document.querySelector(".hourly-wind17");
                    windElement17.innerHTML = `${wind17}km/h`

                    const discription17 = data.list[17].clouds.all;
                    const discriptionElement17 = document.querySelector(".hourly-disc17");
                    discriptionElement17.innerHTML = `${discription17}%`

                    const time17 = data.list[17].dt_txt;
                    const timeElement17 = document.querySelector(".hourly-time17");
                    timeElement17.innerHTML = `${time17}`


                    const temperature18 = Math.round(data.list[18].main.temp);
                    const temperatureElement18 = document.querySelector(".hourly-temp18");
                    temperatureElement18.innerHTML = `${temperature18}°C`

                    const humidity18 = data.list[18].main.humidity;
                    const humidityElement18 = document.querySelector(".hourly-humid18");
                    humidityElement18.innerHTML = `${humidity18}%`

                    const wind18 = data.list[18].wind.speed;
                    const windElement18 = document.querySelector(".hourly-wind18");
                    windElement18.innerHTML = `${wind18}km/h`

                    const discription18 = data.list[18].clouds.all;
                    const discriptionElement18 = document.querySelector(".hourly-disc18");
                    discriptionElement18.innerHTML = `${discription18}%`

                    const time18 = data.list[18].dt_txt;
                    const timeElement18 = document.querySelector(".hourly-time18");
                    timeElement18.innerHTML = `${time18}`


                    const temperature19 = Math.round(data.list[19].main.temp);
                    const temperatureElement19 = document.querySelector(".hourly-temp19");
                    temperatureElement19.innerHTML = `${temperature19}°C`

                    const humidity19 = data.list[19].main.humidity;
                    const humidityElement19 = document.querySelector(".hourly-humid19");
                    humidityElement19.innerHTML = `${humidity19}%`

                    const wind19 = data.list[19].wind.speed;
                    const windElement19 = document.querySelector(".hourly-wind19");
                    windElement19.innerHTML = `${wind19}km/h`

                    const discription19 = data.list[19].clouds.all;
                    const discriptionElement19 = document.querySelector(".hourly-disc19");
                    discriptionElement19.innerHTML = `${discription19}%`

                    const time19 = data.list[19].dt_txt;
                    const timeElement19 = document.querySelector(".hourly-time19");
                    timeElement19.innerHTML = `${time19}`


                    const temperature20 = Math.round(data.list[20].main.temp);
                    const temperatureElement20 = document.querySelector(".hourly-temp20");
                    temperatureElement20.innerHTML = `${temperature20}°C`

                    const humidity20 = data.list[20].main.humidity;
                    const humidityElement20 = document.querySelector(".hourly-humid20");
                    humidityElement20.innerHTML = `${humidity20}%`

                    const wind20 = data.list[20].wind.speed;
                    const windElement20 = document.querySelector(".hourly-wind20");
                    windElement20.innerHTML = `${wind20}km/h`

                    const discription20 = data.list[20].clouds.all;
                    const discriptionElement20 = document.querySelector(".hourly-disc20");
                    discriptionElement20.innerHTML = `${discription20}%`

                    const time20 = data.list[20].dt_txt;
                    const timeElement20 = document.querySelector(".hourly-time20");
                    timeElement20.innerHTML = `${time20}`


                    const temperature21 = Math.round(data.list[21].main.temp);
                    const temperatureElement21 = document.querySelector(".hourly-temp21");
                    temperatureElement21.innerHTML = `${temperature21}°C`

                    const humidity21 = data.list[21].main.humidity;
                    const humidityElement21 = document.querySelector(".hourly-humid21");
                    humidityElement21.innerHTML = `${humidity21}%`

                    const wind21 = data.list[21].wind.speed;
                    const windElement21 = document.querySelector(".hourly-wind21");
                    windElement21.innerHTML = `${wind21}km/h`

                    const discription21 = data.list[21].clouds.all;
                    const discriptionElement21 = document.querySelector(".hourly-disc21");
                    discriptionElement21.innerHTML = `${discription21}%`

                    const time21 = data.list[21].dt_txt;
                    const timeElement21 = document.querySelector(".hourly-time21");
                    timeElement21.innerHTML = `${time21}`


                    const temperature22 = Math.round(data.list[22].main.temp);
                    const temperatureElement22 = document.querySelector(".hourly-temp22");
                    temperatureElement22.innerHTML = `${temperature22}°C`

                    const humidity22 = data.list[22].main.humidity;
                    const humidityElement22 = document.querySelector(".hourly-humid22");
                    humidityElement22.innerHTML = `${humidity22}%`

                    const wind22 = data.list[22].wind.speed;
                    const windElement22 = document.querySelector(".hourly-wind22");
                    windElement22.innerHTML = `${wind22}km/h`

                    const discription22 = data.list[22].clouds.all;
                    const discriptionElement22 = document.querySelector(".hourly-disc22");
                    discriptionElement22.innerHTML = `${discription22}%`

                    const time22 = data.list[22].dt_txt;
                    const timeElement22 = document.querySelector(".hourly-time22");
                    timeElement22.innerHTML = `${time22}`


                    const temperature23 = Math.round(data.list[23].main.temp);
                    const temperatureElement23 = document.querySelector(".hourly-temp23");
                    temperatureElement23.innerHTML = `${temperature23}°C`

                    const humidity23 = data.list[23].main.humidity;
                    const humidityElement23 = document.querySelector(".hourly-humid23");
                    humidityElement23.innerHTML = `${humidity23}%`

                    const wind23 = data.list[23].wind.speed;
                    const windElement23 = document.querySelector(".hourly-wind23");
                    windElement23.innerHTML = `${wind23}km/h`

                    const discription23 = data.list[23].clouds.all;
                    const discriptionElement23 = document.querySelector(".hourly-disc23");
                    discriptionElement23.innerHTML = `${discription23}%`

                    const time23 = data.list[23].dt_txt;
                    const timeElement23 = document.querySelector(".hourly-time23");
                    timeElement23.innerHTML = `${time23}`

                    })

                    weatherAlerts = `https://api.weatherbit.io/v2.0/alerts?lat=${mylat}&lon=${mylon}&key=apikey`;
                    fetch(weatherAlerts)
                    .then(response => response.json())
                    .then(data => {

                    const alert = data.alerts[1].title;
                    const alertElement = document.querySelector(".title-type");
                    alertElement.innerHTML = `Title: ${alert}`

                    const alert1 = data.alerts[1].severity;
                    const alertElement1 = document.querySelector(".severity-type");
                    alertElement1.innerHTML = `Severity: ${alert1}`

                    const alert2 = data.alerts[1].regions;
                    const alertElement2 = document.querySelector(".region-type");
                    alertElement2.innerHTML = `Regions: ${alert2}`

                    const alert3 = data.alerts[1].effective_local;
                    const alertElement3 = document.querySelector(".from-time");
                    alertElement3.innerHTML = `From: ${alert3}`

                    const alert4 = data.alerts[1].ends_local;
                    const alertElement4 = document.querySelector(".end-time");
                    alertElement4.innerHTML = `Until: ${alert4}`

                    const alert5 = data.alerts[1].description;
                    const alertElement5 = document.querySelector(".discription-type");
                    alertElement5.innerHTML = `Discription: ${alert5}`

                    })
                })
                .catch(error => {
                    console.error('Error:', error);
                    weatherResults.innerHTML = '<p>Failed to fetch weather data.</p>';
                });
        } else {
            weatherResults.innerHTML = '<p>Please enter a valid location.</p>';
        }
    });
});










const options = {method: 'GET', headers: {accept: 'application/json'}};
    let data4 = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.565269&lon=126.979478&appid=apikeyab&units=metric`, options)
    .then(respone => respone.json())
    .then(data4 => {
        const temperature = Math.round(data4.main.temp);
        const temperatureElement = document.querySelector(".temp-margin");
        temperatureElement.innerHTML = `${temperature}°C`;

        const humidity = data4.main.humidity;
        const humidityElement = document.querySelector(".humidity-current");
        humidityElement.innerHTML = `${humidity} %`

        const windSpeeds = data4.wind.speed;
        const windSpeedElement = document.querySelector(".wind-speed");
        windSpeedElement.innerHTML = `${windSpeeds} KM/h`

        const feelsLike = Math.round(data4.main.feels_like);
        const feelsLikeElement = document.querySelector(".h-margin");
        feelsLikeElement.innerHTML = `Feels like ${feelsLike}°C`

        const cloudCovers = data4.clouds.all;
        const cloudCoverElement = document.querySelector(".cloud-cover");
        cloudCoverElement.innerHTML = `${cloudCovers} %`

        const locations = data4.name;
        const locationElement = document.querySelector(".place-name");
        locationElement.innerHTML = `${locations}`

        const locations1 = data4.name;
        const location1Element = document.querySelector(".report4");
        location1Element.innerHTML = `${locations1}`

        const locations2 = data4.sys.country;
        const location2Element = document.querySelector(".the-country-name");
        location2Element.innerHTML = `${locations2}`
        
        const cloudCovers2 = data4.weather[0].description;
        const cloudCover2Element = document.querySelector(".h-margin1");
        cloudCover2Element.innerHTML = `${cloudCovers2}`
    })

const options1 = {method: 'GET', headers: {accept: 'application/json'}};
    let data1 = fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=37.565269&lon=126.979478&appid=apikey`, options1)
    .then(respone => respone.json())
    .then(data1 => {
        const aqinumber = data1.list[0].main.aqi
        const aqinumberElement = document.querySelector('.aqi-number-value');
        aqinumberElement.innerHTML = `${aqinumber}`;

        const conumber = data1.list[0].components.co
        const conumberElement = document.querySelector('.co-number');
        conumberElement.innerHTML = `${conumber}`;

        const nonumber = data1.list[0].components.no
        const nonumberElement = document.querySelector('.no-number');
        nonumberElement.innerHTML = `${nonumber}`;

        const onumber = data1.list[0].components.o3
        const onumberElement = document.querySelector('.o-number');
        onumberElement.innerHTML = `${onumber}`;

        const pmnumber = data1.list[0].components.pm10
        const pmnumberElement = document.querySelector('.pm-number');
        pmnumberElement.innerHTML = `${pmnumber}`;

        const pm1number = data1.list[0].components.pm2_5
        const pm1numberElement = document.querySelector('.pm1-number');
        pm1numberElement.innerHTML = `${pm1number}`;

        const sonumber = data1.list[0].components.so2
        const sonumberElement = document.querySelector('.so-number');
        sonumberElement.innerHTML = `${sonumber}`;
    })

const options2 = {method: 'GET', headers: {accept: 'application/json'}};
    let data2 = fetch(`https://api.tomorrow.io/v4/weather/realtime?location=37.565269%2C%20126.979478&units=metric&apikey=apikey`, options2)
    .then(respone => respone.json())
    .then(data2 => {
        const uvIndexs = data2.data.values.uvIndex;
        const uvIndexElement = document.querySelector(".uv-index");
        uvIndexElement.innerHTML = `${uvIndexs}`
    })

const options3 = {method: 'GET', headers: {accept: 'application/json'}};
    let data3 = fetch(`https://api.tomorrow.io/v4/weather/forecast?location=37.565269%2C%20126.979478&timesteps=1d&units=metric&apikey=apikey`, options3)
    .then(respone => respone.json())
    .then(data3 => {

        // day 1
    const today = data3.timelines.daily[0].time;
    const dateElement = document.querySelector(".today-date");
    const date = new Date(today);
    const dayOfWeekIndex = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    dateElement.innerHTML = `${dayOfWeek}`;
// temperature
    const todayf = Math.round(data3.timelines.daily[0].values.temperatureMin);
    const todayFElement = document.querySelector(".min-temp")
    todayFElement.innerHTML = `${todayf}°C`
    const todayf1 = Math.round(data3.timelines.daily[0].values.temperatureMax);
    const todayFElement1 = document.querySelector(".max-temp")
    todayFElement1.innerHTML = `${todayf1}°C`
// perpetation
    const perpetation = Math.round(data3.timelines.daily[0].values.precipitationProbabilityAvg);
    // console.log(perpetation)
    const perpetationElement = document.querySelector(".avg-percipitation");
    perpetationElement.innerHTML = `${perpetation}%`;
// humidity
    const avgHumid = Math.round(data3.timelines.daily[0].values.humidityAvg);
    const avgHumidElement = document.querySelector(".avg-humidity");
    avgHumidElement.innerHTML = `${avgHumid}%`


// day 2
    const today1 = data3.timelines.daily[1].time;
    const dateElement1 = document.querySelector(".today-date11");
    const date1 = new Date(today1);
    const dayOfWeekIndex1 = date1.getDay();
    const daysOfWeek1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek1 = daysOfWeek1[dayOfWeekIndex1];
    dateElement1.innerHTML = `${dayOfWeek1}`;
// temperature
    const todayf2 = Math.round(data3.timelines.daily[1].values.temperatureMin);
    const todayFElement2 = document.querySelector(".min-temp1")
    todayFElement2.innerHTML = `${todayf2}°C`
    const todayf3 = Math.round(data3.timelines.daily[1].values.temperatureMax);
    const todayFElement3 = document.querySelector(".max-temp1")
    todayFElement3.innerHTML = `${todayf3}°C`
// perpetation
    const perpetation1 = Math.round(data3.timelines.daily[1].values.precipitationProbabilityAvg);
    const perpetationElement1 = document.querySelector(".avg-percipitation1");
    perpetationElement1.innerHTML = ` ${perpetation1}%`;
    // humidity
    const avgHumid1 = Math.round(data3.timelines.daily[1].values.humidityAvg);
    const avgHumid1Element = document.querySelector(".avg-humidity1");
    avgHumid1Element.innerHTML = `${avgHumid1}%`


// day 3
    const today2 = data3.timelines.daily[2].time;
    const dateElement2 = document.querySelector(".today-date2");
    const date2 = new Date(today2);
    const dayOfWeekIndex2 = date2.getDay();
    const daysOfWeek2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek2 = daysOfWeek2[dayOfWeekIndex2];
    dateElement2.innerHTML = `${dayOfWeek2}`;
// temperature
    const todayf4 = Math.round(data3.timelines.daily[2].values.temperatureMin);
    const todayFElement4 = document.querySelector(".min-temp2")
    todayFElement4.innerHTML = `${todayf4}°C`
    const todayf5 = Math.round(data3.timelines.daily[2].values.temperatureMax);
    const todayFElement5 = document.querySelector(".max-temp2")
    todayFElement5.innerHTML = `${todayf5}°C`
// perpetation
    const perpetation2 = Math.round(data3.timelines.daily[2].values.precipitationProbabilityAvg);
    const perpetationElement2 = document.querySelector(".avg-percipitation2");
    perpetationElement2.innerHTML = ` ${perpetation2}%`;
    // humidity
    const avgHumid2 = Math.round(data3.timelines.daily[2].values.humidityAvg);
    const avgHumid2Element = document.querySelector(".avg-humidity2");
    avgHumid2Element.innerHTML = `${avgHumid2}%`


// day 4
    const today3 = data3.timelines.daily[3].time;
    const dateElement3 = document.querySelector(".today-date3");
    const date3 = new Date(today3);
    const dayOfWeekIndex3 = date3.getDay();
    const daysOfWeek3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek3 = daysOfWeek3[dayOfWeekIndex3];
    dateElement3.innerHTML = `${dayOfWeek3}`;
// temperature
    const todayf6 = Math.round(data3.timelines.daily[3].values.temperatureMin);
    const todayFElement6 = document.querySelector(".min-temp3")
    todayFElement6.innerHTML = `${todayf6}°C`
    const todayf7 = Math.round(data3.timelines.daily[3].values.temperatureMax);
    const todayFElement7 = document.querySelector(".max-temp3")
    todayFElement7.innerHTML = `${todayf7}°C`

// perpetation
    const perpetation3 = Math.round(data3.timelines.daily[3].values.precipitationProbabilityAvg);
    const perpetationElement3 = document.querySelector(".avg-percipitation3");
    perpetationElement3.innerHTML = ` ${perpetation3}%`;
// humidity
    const avgHumid3 = Math.round(data3.timelines.daily[3].values.humidityAvg);
    const avgHumid3Element = document.querySelector(".avg-humidity3");
    avgHumid3Element.innerHTML = `${avgHumid3}%`


// day 5
    const today4 = data3.timelines.daily[4].time;
    const dateElement4 = document.querySelector(".today-date4");
    const date4 = new Date(today4);
    const dayOfWeekIndex4 = date4.getDay();
    const daysOfWeek4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek4 = daysOfWeek4[dayOfWeekIndex4];
    dateElement4.innerHTML = `${dayOfWeek4}`;
// temperature
    const todayf8 = Math.round(data3.timelines.daily[4].values.temperatureMin);
    const todayFElement8 = document.querySelector(".min-temp4")
    todayFElement8.innerHTML = `${todayf8}°C`
    const todayf9 = Math.round(data3.timelines.daily[4].values.temperatureMax);
    const todayFElement9 = document.querySelector(".max-temp4")
    todayFElement9.innerHTML = `${todayf9}°C`
// perpetation
    const perpetation4 = Math.round(data3.timelines.daily[4].values.precipitationProbabilityAvg);
    const perpetationElement4 = document.querySelector(".avg-percipitation4");
    perpetationElement4.innerHTML = ` ${perpetation4}%`;
// humidity
    const avgHumid4 = Math.round(data3.timelines.daily[4].values.humidityAvg);
    const avgHumid4Element = document.querySelector(".avg-humidity4");
    avgHumid4Element.innerHTML = `${avgHumid4}%`


// day 6
    const today5 = data3.timelines.daily[5].time;
    const dateElement5 = document.querySelector(".today-date5");
    const date5 = new Date(today5);
    const dayOfWeekIndex5 = date5.getDay();
    const daysOfWeek5 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek5 = daysOfWeek5[dayOfWeekIndex5];
    dateElement5.innerHTML = `${dayOfWeek5}`;
// temperature
    const todayf10 = Math.round(data3.timelines.daily[5].values.temperatureMin);
    const todayFElement10 = document.querySelector(".min-temp5")
    todayFElement10.innerHTML = `${todayf10}°C`
    const todayf11 = Math.round(data3.timelines.daily[5].values.temperatureMax);
    const todayFElement11 = document.querySelector(".max-temp5")
    todayFElement11.innerHTML = `${todayf11}°C`
// perpetation
    const perpetation5 = Math.round(data3.timelines.daily[5].values.precipitationProbabilityAvg);
    const perpetationElement5 = document.querySelector(".avg-percipitation5");
    perpetationElement5.innerHTML = ` ${perpetation5}%`;
// humidity
    const avgHumid5 = Math.round(data3.timelines.daily[5].values.humidityAvg);
    const avgHumid5Element = document.querySelector(".avg-humidity5");
    avgHumid5Element.innerHTML = `${avgHumid5}%`
    })

const options4 = {method: 'GET', headers: {accept: 'application/json'}};
    let data = fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=37.565269&lon=126.979478&appid=apikeya25ab&units=metric`, options4)
    .then(respone => respone.json())
    .then(data => {

        const temperature = Math.round(data.list[0].main.temp);
        const temperatureElement = document.querySelector(".hourly-temp");
        temperatureElement.innerHTML = `${temperature}°C`

        const humidity = data.list[0].main.humidity;
        const humidityElement = document.querySelector(".hourly-humid");
        humidityElement.innerHTML = `${humidity}%`

        const wind = data.list[0].wind.speed;
        const windElement = document.querySelector(".hourly-wind");
        windElement.innerHTML = `${wind}km/h`

        const discription = data.list[0].clouds.all;
        const discriptionElement = document.querySelector(".hourly-disc");
        discriptionElement.innerHTML = `${discription}%`

        const time = data.list[0].dt_txt;
        const timeElement = document.querySelector(".hourly-time");
        timeElement.innerHTML = `${time}`


        const temperature1 = Math.round(data.list[1].main.temp);
        const temperatureElement1 = document.querySelector(".hourly-temp1");
        temperatureElement1.innerHTML = `${temperature1}°C`

        const humidity1 = data.list[1].main.humidity;
        const humidityElement1 = document.querySelector(".hourly-humid1");
        humidityElement1.innerHTML = `${humidity1}%`

        const wind1 = data.list[1].wind.speed;
        const windElement1 = document.querySelector(".hourly-wind1");
        windElement1.innerHTML = `${wind1}km/h`

        const discription1 = data.list[1].clouds.all;
        const discriptionElement1 = document.querySelector(".hourly-disc1");
        discriptionElement1.innerHTML = `${discription1}%`

        const time1 = data.list[1].dt_txt;
        const timeElement1 = document.querySelector(".hourly-time1");
        timeElement1.innerHTML = `${time1}`

        
        const temperature2 = Math.round(data.list[2].main.temp);
        const temperatureElement2 = document.querySelector(".hourly-temp2");
        temperatureElement2.innerHTML = `${temperature2}°C`

        const humidity2 = data.list[2].main.humidity;
        const humidityElement2 = document.querySelector(".hourly-humid2");
        humidityElement2.innerHTML = `${humidity2}%`

        const wind2 = data.list[2].wind.speed;
        const windElement2 = document.querySelector(".hourly-wind2");
        windElement2.innerHTML = `${wind2}km/h`

        const discription2 = data.list[2].clouds.all;
        const discriptionElement2 = document.querySelector(".hourly-disc2");
        discriptionElement2.innerHTML = `${discription2}%`

        const time2 = data.list[2].dt_txt;
        const timeElement2 = document.querySelector(".hourly-time2");
        timeElement2.innerHTML = `${time2}`


        const temperature3 = Math.round(data.list[3].main.temp);
        const temperatureElement3 = document.querySelector(".hourly-temp3");
        temperatureElement3.innerHTML = `${temperature3}°C`

        const humidity3 = data.list[3].main.humidity;
        const humidityElement3 = document.querySelector(".hourly-humid3");
        humidityElement3.innerHTML = `${humidity3}%`

        const wind3 = data.list[3].wind.speed;
        const windElement3 = document.querySelector(".hourly-wind3");
        windElement3.innerHTML = `${wind3}km/h`

        const discription3 = data.list[3].clouds.all;
        const discriptionElement3 = document.querySelector(".hourly-disc3");
        discriptionElement3.innerHTML = `${discription3}%`

        const time3 = data.list[3].dt_txt;
        const timeElement3 = document.querySelector(".hourly-time3");
        timeElement3.innerHTML = `${time3}`


        const temperature4 = Math.round(data.list[4].main.temp);
        const temperatureElement4 = document.querySelector(".hourly-temp4");
        temperatureElement4.innerHTML = `${temperature4}°C`

        const humidity4 = data.list[4].main.humidity;
        const humidityElement4 = document.querySelector(".hourly-humid4");
        humidityElement4.innerHTML = `${humidity4}%`

        const wind4 = data.list[4].wind.speed;
        const windElement4 = document.querySelector(".hourly-wind4");
        windElement4.innerHTML = `${wind4}km/h`

        const discription4 = data.list[4].clouds.all;
        const discriptionElement4 = document.querySelector(".hourly-disc4");
        discriptionElement4.innerHTML = `${discription4}%`

        const time4 = data.list[4].dt_txt;
        const timeElement4 = document.querySelector(".hourly-time4");
        timeElement4.innerHTML = `${time4}`


        const temperature5 = Math.round(data.list[5].main.temp);
        const temperatureElement5 = document.querySelector(".hourly-temp5");
        temperatureElement5.innerHTML = `${temperature5}°C`

        const humidity5 = data.list[5].main.humidity;
        const humidityElement5 = document.querySelector(".hourly-humid5");
        humidityElement5.innerHTML = `${humidity5}%`

        const wind5 = data.list[5].wind.speed;
        const windElement5 = document.querySelector(".hourly-wind5");
        windElement5.innerHTML = `${wind5}km/h`

        const discription5 = data.list[5].clouds.all;
        const discriptionElement5 = document.querySelector(".hourly-disc5");
        discriptionElement5.innerHTML = `${discription5}%`

        const time5 = data.list[5].dt_txt;
        const timeElement5 = document.querySelector(".hourly-time5");
        timeElement5.innerHTML = `${time5}`


        const temperature6 = Math.round(data.list[6].main.temp);
        const temperatureElement6 = document.querySelector(".hourly-temp6");
        temperatureElement6.innerHTML = `${temperature6}°C`

        const humidity6 = data.list[6].main.humidity;
        const humidityElement6 = document.querySelector(".hourly-humid6");
        humidityElement6.innerHTML = `${humidity6}%`

        const wind6 = data.list[6].wind.speed;
        const windElement6 = document.querySelector(".hourly-wind6");
        windElement6.innerHTML = `${wind6}km/h`

        const discription6 = data.list[6].clouds.all;
        const discriptionElement6 = document.querySelector(".hourly-disc6");
        discriptionElement6.innerHTML = `${discription6}%`

        const time6 = data.list[6].dt_txt;
        const timeElement6 = document.querySelector(".hourly-time6");
        timeElement6.innerHTML = `${time6}`


        const temperature7 = Math.round(data.list[7].main.temp);
        const temperatureElement7 = document.querySelector(".hourly-temp7");
        temperatureElement7.innerHTML = `${temperature7}°C`

        const humidity7 = data.list[7].main.humidity;
        const humidityElement7 = document.querySelector(".hourly-humid7");
        humidityElement7.innerHTML = `${humidity7}%`

        const wind7 = data.list[7].wind.speed;
        const windElement7 = document.querySelector(".hourly-wind7");
        windElement7.innerHTML = `${wind7}km/h`

        const discription7 = data.list[7].clouds.all;
        const discriptionElement7 = document.querySelector(".hourly-disc7");
        discriptionElement7.innerHTML = `${discription7}%`

        const time7 = data.list[7].dt_txt;
        const timeElement7 = document.querySelector(".hourly-time7");
        timeElement7.innerHTML = `${time7}`


        const temperature8 = Math.round(data.list[8].main.temp);
        const temperatureElement8 = document.querySelector(".hourly-temp8");
        temperatureElement8.innerHTML = `${temperature8}°C`

        const humidity8 = data.list[8].main.humidity;
        const humidityElement8 = document.querySelector(".hourly-humid8");
        humidityElement8.innerHTML = `${humidity8}%`

        const wind8 = data.list[8].wind.speed;
        const windElement8 = document.querySelector(".hourly-wind8");
        windElement8.innerHTML = `${wind8}km/h`

        const discription8 = data.list[8].clouds.all;
        const discriptionElement8 = document.querySelector(".hourly-disc8");
        discriptionElement8.innerHTML = `${discription8}%`

        const time8 = data.list[8].dt_txt;
        const timeElement8 = document.querySelector(".hourly-time8");
        timeElement8.innerHTML = `${time8}`


        const temperature9 = Math.round(data.list[9].main.temp);
        const temperatureElement9 = document.querySelector(".hourly-temp9");
        temperatureElement9.innerHTML = `${temperature9}°C`

        const humidity9 = data.list[9].main.humidity;
        const humidityElement9 = document.querySelector(".hourly-humid9");
        humidityElement9.innerHTML = `${humidity9}%`

        const wind9 = data.list[9].wind.speed;
        const windElement9 = document.querySelector(".hourly-wind9");
        windElement9.innerHTML = `${wind9}km/h`

        const discription9 = data.list[9].clouds.all;
        const discriptionElement9 = document.querySelector(".hourly-disc9");
        discriptionElement9.innerHTML = `${discription9}%`

        const time9 = data.list[9].dt_txt;
        const timeElement9 = document.querySelector(".hourly-time9");
        timeElement9.innerHTML = `${time9}`


        const temperature10 = Math.round(data.list[10].main.temp);
        const temperatureElement10 = document.querySelector(".hourly-temp10");
        temperatureElement10.innerHTML = `${temperature10}°C`

        const humidity10 = data.list[10].main.humidity;
        const humidityElement10 = document.querySelector(".hourly-humid10");
        humidityElement10.innerHTML = `${humidity10}%`

        const wind10 = data.list[10].wind.speed;
        const windElement10 = document.querySelector(".hourly-wind10");
        windElement10.innerHTML = `${wind10}km/h`

        const discription10 = data.list[10].clouds.all;
        const discriptionElement10 = document.querySelector(".hourly-disc10");
        discriptionElement10.innerHTML = `${discription10}%`

        const time10 = data.list[10].dt_txt;
        const timeElement10 = document.querySelector(".hourly-time10");
        timeElement10.innerHTML = `${time10}`


        const temperature11 = Math.round(data.list[11].main.temp);
        const temperatureElement11 = document.querySelector(".hourly-temp11");
        temperatureElement11.innerHTML = `${temperature11}°C`

        const humidity11 = data.list[11].main.humidity;
        const humidityElement11 = document.querySelector(".hourly-humid11");
        humidityElement11.innerHTML = `${humidity11}%`

        const wind11 = data.list[11].wind.speed;
        const windElement11 = document.querySelector(".hourly-wind11");
        windElement11.innerHTML = `${wind11}km/h`

        const discription11 = data.list[11].clouds.all;
        const discriptionElement11 = document.querySelector(".hourly-disc11");
        discriptionElement11.innerHTML = `${discription11}%`

        const time11 = data.list[11].dt_txt;
        const timeElement11 = document.querySelector(".hourly-time11");
        timeElement11.innerHTML = `${time11}`


        const temperature12 = Math.round(data.list[12].main.temp);
        const temperatureElement12 = document.querySelector(".hourly-temp12");
        temperatureElement12.innerHTML = `${temperature12}°C`

        const humidity12 = data.list[12].main.humidity;
        const humidityElement12 = document.querySelector(".hourly-humid12");
        humidityElement12.innerHTML = `${humidity12}%`

        const wind12 = data.list[12].wind.speed;
        const windElement12 = document.querySelector(".hourly-wind12");
        windElement12.innerHTML = `${wind12}km/h`

        const discription12 = data.list[12].clouds.all;
        const discriptionElement12 = document.querySelector(".hourly-disc12");
        discriptionElement12.innerHTML = `${discription12}%`

        const time12 = data.list[12].dt_txt;
        const timeElement12 = document.querySelector(".hourly-time12");
        timeElement12.innerHTML = `${time12}`


        const temperature13 = Math.round(data.list[13].main.temp);
        const temperatureElement13 = document.querySelector(".hourly-temp13");
        temperatureElement13.innerHTML = `${temperature13}°C`

        const humidity13 = data.list[13].main.humidity;
        const humidityElement13 = document.querySelector(".hourly-humid13");
        humidityElement13.innerHTML = `${humidity13}%`

        const wind13 = data.list[13].wind.speed;
        const windElement13 = document.querySelector(".hourly-wind13");
        windElement13.innerHTML = `${wind13}km/h`

        const discription13 = data.list[13].clouds.all;
        const discriptionElement13 = document.querySelector(".hourly-disc13");
        discriptionElement13.innerHTML = `${discription13}%`

        const time13 = data.list[13].dt_txt;
        const timeElement13 = document.querySelector(".hourly-time13");
        timeElement13.innerHTML = `${time13}`


        const temperature14 = Math.round(data.list[14].main.temp);
        const temperatureElement14 = document.querySelector(".hourly-temp14");
        temperatureElement14.innerHTML = `${temperature14}°C`

        const humidity14 = data.list[14].main.humidity;
        const humidityElement14 = document.querySelector(".hourly-humid14");
        humidityElement14.innerHTML = `${humidity14}%`

        const wind14 = data.list[14].wind.speed;
        const windElement14 = document.querySelector(".hourly-wind14");
        windElement14.innerHTML = `${wind14}km/h`

        const discription14 = data.list[14].clouds.all;
        const discriptionElement14 = document.querySelector(".hourly-disc14");
        discriptionElement14.innerHTML = `${discription14}%`

        const time14 = data.list[14].dt_txt;
        const timeElement14 = document.querySelector(".hourly-time14");
        timeElement14.innerHTML = `${time14}`


        const temperature15 = Math.round(data.list[15].main.temp);
        const temperatureElement15 = document.querySelector(".hourly-temp15");
        temperatureElement15.innerHTML = `${temperature15}°C`

        const humidity15 = data.list[15].main.humidity;
        const humidityElement15 = document.querySelector(".hourly-humid15");
        humidityElement15.innerHTML = `${humidity15}%`

        const wind15 = data.list[15].wind.speed;
        const windElement15 = document.querySelector(".hourly-wind15");
        windElement15.innerHTML = `${wind15}km/h`

        const discription15 = data.list[15].clouds.all;
        const discriptionElement15 = document.querySelector(".hourly-disc15");
        discriptionElement15.innerHTML = `${discription15}%`

        const time15 = data.list[15].dt_txt;
        const timeElement15 = document.querySelector(".hourly-time15");
        timeElement15.innerHTML = `${time15}`


        const temperature16 = Math.round(data.list[16].main.temp);
        const temperatureElement16 = document.querySelector(".hourly-temp16");
        temperatureElement16.innerHTML = `${temperature16}°C`

        const humidity16 = data.list[16].main.humidity;
        const humidityElement16 = document.querySelector(".hourly-humid16");
        humidityElement16.innerHTML = `${humidity16}%`

        const wind16 = data.list[16].wind.speed;
        const windElement16 = document.querySelector(".hourly-wind16");
        windElement16.innerHTML = `${wind16}km/h`

        const discription16 = data.list[16].clouds.all;
        const discriptionElement16 = document.querySelector(".hourly-disc16");
        discriptionElement16.innerHTML = `${discription16}%`

        const time16 = data.list[16].dt_txt;
        const timeElement16 = document.querySelector(".hourly-time16");
        timeElement16.innerHTML = `${time16}`


        const temperature17 = Math.round(data.list[17].main.temp);
        const temperatureElement17 = document.querySelector(".hourly-temp17");
        temperatureElement17.innerHTML = `${temperature17}°C`

        const humidity17 = data.list[17].main.humidity;
        const humidityElement17 = document.querySelector(".hourly-humid17");
        humidityElement17.innerHTML = `${humidity17}%`

        const wind17 = data.list[17].wind.speed;
        const windElement17 = document.querySelector(".hourly-wind17");
        windElement17.innerHTML = `${wind17}km/h`

        const discription17 = data.list[17].clouds.all;
        const discriptionElement17 = document.querySelector(".hourly-disc17");
        discriptionElement17.innerHTML = `${discription17}%`

        const time17 = data.list[17].dt_txt;
        const timeElement17 = document.querySelector(".hourly-time17");
        timeElement17.innerHTML = `${time17}`


        const temperature18 = Math.round(data.list[18].main.temp);
        const temperatureElement18 = document.querySelector(".hourly-temp18");
        temperatureElement18.innerHTML = `${temperature18}°C`

        const humidity18 = data.list[18].main.humidity;
        const humidityElement18 = document.querySelector(".hourly-humid18");
        humidityElement18.innerHTML = `${humidity18}%`

        const wind18 = data.list[18].wind.speed;
        const windElement18 = document.querySelector(".hourly-wind18");
        windElement18.innerHTML = `${wind18}km/h`

        const discription18 = data.list[18].clouds.all;
        const discriptionElement18 = document.querySelector(".hourly-disc18");
        discriptionElement18.innerHTML = `${discription18}%`

        const time18 = data.list[18].dt_txt;
        const timeElement18 = document.querySelector(".hourly-time18");
        timeElement18.innerHTML = `${time18}`


        const temperature19 = Math.round(data.list[19].main.temp);
        const temperatureElement19 = document.querySelector(".hourly-temp19");
        temperatureElement19.innerHTML = `${temperature19}°C`

        const humidity19 = data.list[19].main.humidity;
        const humidityElement19 = document.querySelector(".hourly-humid19");
        humidityElement19.innerHTML = `${humidity19}%`

        const wind19 = data.list[19].wind.speed;
        const windElement19 = document.querySelector(".hourly-wind19");
        windElement19.innerHTML = `${wind19}km/h`

        const discription19 = data.list[19].clouds.all;
        const discriptionElement19 = document.querySelector(".hourly-disc19");
        discriptionElement19.innerHTML = `${discription19}%`

        const time19 = data.list[19].dt_txt;
        const timeElement19 = document.querySelector(".hourly-time19");
        timeElement19.innerHTML = `${time19}`


        const temperature20 = Math.round(data.list[20].main.temp);
        const temperatureElement20 = document.querySelector(".hourly-temp20");
        temperatureElement20.innerHTML = `${temperature20}°C`

        const humidity20 = data.list[20].main.humidity;
        const humidityElement20 = document.querySelector(".hourly-humid20");
        humidityElement20.innerHTML = `${humidity20}%`

        const wind20 = data.list[20].wind.speed;
        const windElement20 = document.querySelector(".hourly-wind20");
        windElement20.innerHTML = `${wind20}km/h`

        const discription20 = data.list[20].clouds.all;
        const discriptionElement20 = document.querySelector(".hourly-disc20");
        discriptionElement20.innerHTML = `${discription20}%`

        const time20 = data.list[20].dt_txt;
        const timeElement20 = document.querySelector(".hourly-time20");
        timeElement20.innerHTML = `${time20}`


        const temperature21 = Math.round(data.list[21].main.temp);
        const temperatureElement21 = document.querySelector(".hourly-temp21");
        temperatureElement21.innerHTML = `${temperature21}°C`

        const humidity21 = data.list[21].main.humidity;
        const humidityElement21 = document.querySelector(".hourly-humid21");
        humidityElement21.innerHTML = `${humidity21}%`

        const wind21 = data.list[21].wind.speed;
        const windElement21 = document.querySelector(".hourly-wind21");
        windElement21.innerHTML = `${wind21}km/h`

        const discription21 = data.list[21].clouds.all;
        const discriptionElement21 = document.querySelector(".hourly-disc21");
        discriptionElement21.innerHTML = `${discription21}%`

        const time21 = data.list[21].dt_txt;
        const timeElement21 = document.querySelector(".hourly-time21");
        timeElement21.innerHTML = `${time21}`


        const temperature22 = Math.round(data.list[22].main.temp);
        const temperatureElement22 = document.querySelector(".hourly-temp22");
        temperatureElement22.innerHTML = `${temperature22}°C`

        const humidity22 = data.list[22].main.humidity;
        const humidityElement22 = document.querySelector(".hourly-humid22");
        humidityElement22.innerHTML = `${humidity22}%`

        const wind22 = data.list[22].wind.speed;
        const windElement22 = document.querySelector(".hourly-wind22");
        windElement22.innerHTML = `${wind22}km/h`

        const discription22 = data.list[22].clouds.all;
        const discriptionElement22 = document.querySelector(".hourly-disc22");
        discriptionElement22.innerHTML = `${discription22}%`

        const time22 = data.list[22].dt_txt;
        const timeElement22 = document.querySelector(".hourly-time22");
        timeElement22.innerHTML = `${time22}`


        const temperature23 = Math.round(data.list[23].main.temp);
        const temperatureElement23 = document.querySelector(".hourly-temp23");
        temperatureElement23.innerHTML = `${temperature23}°C`

        const humidity23 = data.list[23].main.humidity;
        const humidityElement23 = document.querySelector(".hourly-humid23");
        humidityElement23.innerHTML = `${humidity23}%`

        const wind23 = data.list[23].wind.speed;
        const windElement23 = document.querySelector(".hourly-wind23");
        windElement23.innerHTML = `${wind23}km/h`

        const discription23 = data.list[23].clouds.all;
        const discriptionElement23 = document.querySelector(".hourly-disc23");
        discriptionElement23.innerHTML = `${discription23}%`

        const time23 = data.list[23].dt_txt;
        const timeElement23 = document.querySelector(".hourly-time23");
        timeElement23.innerHTML = `${time23}`

        })

const options6 = {method: 'GET', headers: {accept: 'application/json'}};
    let data6 = fetch(`https://api.weatherbit.io/v2.0/alerts?lat=37.565269&lon=126.979478&key=apikey`, options6)
    .then(respone => respone.json())
    .then(data6 => {

        const alert = data.alerts[1].title;
        const alertElement = document.querySelector(".title-type");
        alertElement.innerHTML = `Title: ${alert}`

        const alert1 = data6.alerts[1].severity;
        const alertElement1 = document.querySelector(".severity-type");
        alertElement1.innerHTML = `Severity: ${alert1}`

        const alert2 = data6.alerts[1].regions;
        const alertElement2 = document.querySelector(".region-type");
        alertElement2.innerHTML = `Regions: ${alert2}`

        const alert3 = data6.alerts[1].effective_local;
        const alertElement3 = document.querySelector(".from-time");
        alertElement3.innerHTML = `From: ${alert3}`

        const alert4 = data6.alerts[1].ends_local;
        const alertElement4 = document.querySelector(".end-time");
        alertElement4.innerHTML = `Until: ${alert4}`

        const alert5 = data6.alerts[1].description;
        const alertElement5 = document.querySelector(".discription-type");
        alertElement5.innerHTML = `Discription: ${alert5}`

        })
        


