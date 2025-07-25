const data = [
    {
        city: "Ljubljana",
        currentTemperature: 20,
        state: "Clear",
        hourly: [
            {
                hour: "09:00",
                state: "sunny",
                temperature: 18
            },
            {
                hour: "12:00",
                state: "sunny",
                temperature: 25
            },
            {
                hour: "18:00",
                state: "cloudy",
                temperature: 22
            },
            {
                hour: "20:00",
                state: "rainy",
                temperature: 18
            },
            {
                hour: "22:00",
                state: "night",
                temperature: 16
            }
        ],
        details: {
            sunrise: "6:44",
            sunset: "17.58",
            realFeel: 18,
            humidity: 63,
            wind: 3,
            pressure: 1012
        }
    },
    {
        city: "Celje",
        currentTemperature: 17,
        state: "Clear",
        hourly: [
            {
                hour: "09:00",
                state: "sunny",
                temperature: 7
            },
            {
                hour: "12:00",
                state: "cloudy",
                temperature: 24
            },
            {
                hour: "18:00",
                state: "cloudy",
                temperature: 23
            },
            {
                hour: "20:00",
                state: "rainy",
                temperature: 16
            },
            {
                hour: "22:00",
                state: "night",
                temperature: 15
            }
        ],
        details: {
            sunrise: "6:44",
            sunset: "17.58",
            realFeel: 17,
            humidity: 55,
            wind: 3,
            pressure: 912
        }
    }
]

export default data;