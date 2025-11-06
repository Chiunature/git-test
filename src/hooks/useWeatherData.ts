// hooks/useWeatherData.ts
import { useState, useEffect, useCallback } from "react";
import { getDetailedIPInfo } from "../utils/ipApi";
import { weatherService, type WeatherData } from "../services/weatherService";
import type { WeatherShowData, WeatherConditionData, DailyForecastData, HourlyForecastData } from "../types/weather";

const initialWeatherShowData: WeatherShowData = {
	city: "",
	country: "",
	date: "",
	week: "",
	tem: 0,
	wea: "",
};

const initialWeatherConditionData: WeatherConditionData = {
	humidity: "",
	win_speed: "",
	air_level: "",
	pressure: "",
};

export const useWeatherData = () => {
	const [weatherShowData, setWeatherShowData] = useState<WeatherShowData>(initialWeatherShowData);
	const [weatherConditionData, setWeatherConditionData] = useState<WeatherConditionData>(initialWeatherConditionData);
	const [dailyForecastDatas, setDailyForecastDatas] = useState<DailyForecastData[]>([]);
	const [hourlyForecastDatas, setHourlyForecastDatas] = useState<HourlyForecastData[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// 处理天气数据
	const processWeatherData = useCallback(async (city?: string, ipAddress?: string) => {
		setLoading(true);
		setError(null);
		try {
			const data = await weatherService.processWeatherData(city, ipAddress);
			setWeatherShowData(data.weatherShowData);
			setWeatherConditionData(data.weatherConditionData);
			setDailyForecastDatas(data.dailyForecastDatas);
			setHourlyForecastDatas(data.hourlyForecastDatas);
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : "获取天气数据失败";
			setError(errorMessage);
			console.error("获取天气数据失败", err);
		} finally {
			setLoading(false);
		}
	}, []);

	// 初始化：根据 IP 获取天气
	useEffect(() => {
		const initWeather = async () => {
			try {
				const ip = await getDetailedIPInfo();
				await processWeatherData(undefined, ip.ip);
			} catch (err) {
				console.error("初始化失败", err);
			}
		};
		initWeather();
	}, [processWeatherData]);

	return {
		weatherShowData,
		weatherConditionData,
		dailyForecastDatas,
		hourlyForecastDatas,
		loading,
		error,
		processWeatherData,
	};
};
