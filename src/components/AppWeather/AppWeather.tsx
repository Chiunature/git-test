// components/AppWeather/AppWeather.tsx
import WeatherShow from "../WeatherShow/WeatherShow";
import WeatherCondition from "../WeatherCondition/WeatherCondition";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import type { WeatherShowData, WeatherConditionData, DailyForecastData, HourlyForecastData } from "../../types/weather";

interface AppWeatherProps {
	weatherShowData: WeatherShowData;
	weatherConditionData: WeatherConditionData;
	dailyForecastDatas: DailyForecastData[];
	hourlyForecastDatas: HourlyForecastData[];
}

export const AppWeather = ({
	weatherShowData,
	weatherConditionData,
	dailyForecastDatas,
	hourlyForecastDatas,
}: AppWeatherProps) => {
	return (
		<div className="app-weather">
			<div className="app-weather-left">
				<WeatherShow weatherShowData={weatherShowData} />
				<WeatherCondition weatherConditionData={weatherConditionData} />
				<DailyForecast DailyForecastData={dailyForecastDatas} />
			</div>
			<div className="app-weather-right">
				<HourlyForecast HourlyForecastData={hourlyForecastDatas} />
			</div>
		</div>
	);
};
