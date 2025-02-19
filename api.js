const API_KEY = "97f5c74fbb244f5494b3256e2558d7aa";

export const fetchWeatherByCity = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("City not found");
    return response.json();
};

export const fetchWeatherByLocation = async (lat, lon) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Location not found");
    return response.json();
};

export const fetchForecast = async (city, days = 1) => {
    const url = days === 1
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
        : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Forecast not found");
    return response.json();
};