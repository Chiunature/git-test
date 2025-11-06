export interface WeatherShowData {
	city: string;
	country: string;
	date: string;
	week: string;
	tem: number;
	wea: string;
}
export interface WeatherConditionData {
	humidity: string;
	win_speed: string;
	air_level: string;
	pressure: string;
}
export interface DailyForecastData {
	week: string;
	wea: string;
	tem1: string;
	tem2: string;
}
export interface HourlyForecastData {
	hours: string;
	wea: string;
	tem: string;
}
