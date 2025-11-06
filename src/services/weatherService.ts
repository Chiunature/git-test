// services/weatherService.ts
import { getRealTimeWeather, getSevenDayWeather } from "../utils/weatherApi";
import type { WeatherShowData, WeatherConditionData, DailyForecastData, HourlyForecastData } from "../types/weather";

// API 返回的原始数据类型
interface ApiWeatherResponse {
	city: string;
	country: string;
	date: string;
	week: string;
	tem: number;
	wea: string;
	win_speed: string;
	humidity: string;
	air_level: string;
	pressure: string;
	hours: Array<{
		hours: string;
		wea: string;
		tem: string;
	}>;
}

interface ApiSevenDayWeatherItem {
	week: string;
	wea: string;
	tem1: string;
	tem2: string;
}

export interface WeatherData {
	weatherShowData: WeatherShowData;
	weatherConditionData: WeatherConditionData;
	dailyForecastDatas: DailyForecastData[];
	hourlyForecastDatas: HourlyForecastData[];
}

export const weatherService = {
	/**
	 * 获取并处理天气数据
	 */
	async processWeatherData(city?: string, ipAddress?: string): Promise<WeatherData> {
		// 并发获取天气数据
		const [weather, sevenDayWeather] = await Promise.all([
			getRealTimeWeather(city, ipAddress) as Promise<ApiWeatherResponse>,
			getSevenDayWeather(city, ipAddress) as Promise<ApiSevenDayWeatherItem[]>,
		]);

		// 数据转换：API 数据 -> 组件需要的格式
		return {
			weatherShowData: {
				city: weather.city,
				country: weather.country,
				date: weather.date,
				week: weather.week,
				tem: weather.tem,
				wea: weather.wea,
			},
			weatherConditionData: {
				humidity: weather.humidity,
				win_speed: weather.win_speed,
				air_level: weather.air_level,
				pressure: weather.pressure,
			},
			dailyForecastDatas: sevenDayWeather.map((item) => ({
				week: item.week,
				wea: item.wea,
				tem1: item.tem1,
				tem2: item.tem2,
			})),
			hourlyForecastDatas: weather.hours.map((item) => ({
				hours: item.hours,
				wea: item.wea,
				tem: item.tem,
			})),
		};
	},
};
