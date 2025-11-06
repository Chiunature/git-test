import React, { useState, useEffect } from "react";
import styles from "./DailyForecast.module.css";
import { Image } from "antd";
import fog from "@/assets/images/icon-fog.webp";
import overcast from "@/assets/images/icon-overcast.webp";
import partlyCloudy from "@/assets/images/icon-partly-cloudy.webp";
import snow from "@/assets/images/icon-snow.webp";
import rain from "@/assets/images/icon-rain.webp";
import storm from "@/assets/images/icon-storm.webp";
import sunny from "@/assets/images/icon-sunny.webp";
interface DailyForecastData {
	week: string;
	wea: string;
	tem1: string;
	tem2: string;
}
const weatherIconsMap = {
	雾: fog,
	阴: overcast,
	多云: partlyCloudy,
	雪: snow,
	雨: rain,
	雷: storm,
	晴: sunny,
} as const;
// 获取天气图标，如果不存在则使用默认图标（多云）
const getWeatherIcon = (weather: string) => {
	return weatherIconsMap[weather as keyof typeof weatherIconsMap] || partlyCloudy;
};
const List = ({
	day,
	icon,
	minTemperature,
	maxTemperature,
}: {
	day: string;
	icon: string;
	minTemperature: string;
	maxTemperature: string;
}) => {
	return (
		<div className={styles.listItem}>
			<div className={styles.listItemDay}>{day}</div>
			<div className={styles.listItemIcon}>
				<Image src={icon} alt="icon" width={30} height={30} preview={false} />
			</div>
			<div className={styles.listItemTemperature}>
				<div className={styles.listItemTemperatureMin}>{minTemperature}</div>
				<div className={styles.listItemTemperatureMax}>{maxTemperature}</div>
			</div>
		</div>
	);
};

const DailyForecast = ({ DailyForecastData }: { DailyForecastData: DailyForecastData[] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.listTitle}>Daily Forecast</div>
			<div className={styles.listItemsContainer}>
				{DailyForecastData.map((day, index) => {
					return (
						<List
							key={index}
							day={day.week}
							icon={getWeatherIcon(day.wea)}
							minTemperature={day.tem1}
							maxTemperature={day.tem2}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default DailyForecast;
