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

const weatherIconsMap = {
	0: fog,
	1: overcast,
	2: partlyCloudy,
	3: snow,
	4: rain,
	5: storm,
	6: sunny,
};
const days = [
	{ day: "Monday", icon: weatherIconsMap[0], minTemperature: 10, maxTemperature: 20 },
	{ day: "Tuesday", icon: weatherIconsMap[1], minTemperature: 10, maxTemperature: 20 },
	{ day: "Wednesday", icon: weatherIconsMap[2], minTemperature: 10, maxTemperature: 20 },
	{ day: "Thursday", icon: weatherIconsMap[3], minTemperature: 10, maxTemperature: 20 },
	{ day: "Friday", icon: weatherIconsMap[4], minTemperature: 10, maxTemperature: 20 },
	{ day: "Saturday", icon: weatherIconsMap[5], minTemperature: 10, maxTemperature: 20 },
	{ day: "Sunday", icon: weatherIconsMap[6], minTemperature: 10, maxTemperature: 20 },
];

const List = ({
	day,
	icon,
	minTemperature,
	maxTemperature,
}: {
	day: string;
	icon: string;
	minTemperature: number;
	maxTemperature: number;
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

const DailyForecast = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div className={styles.container}>
			<div className={styles.listTitle}>
				Daily Forecast
				<div
					style={{
						position: "fixed",
						top: 0,
						right: 0,
						background: "red",
						color: "white",
						padding: "10px",
						zIndex: 9999,
					}}
				>
					当前宽度: {width}px
				</div>
			</div>
			<div className={styles.listItemsContainer}>
				{days.map((day, index) => {
					return (
						<List
							key={index}
							day={day.day}
							icon={day.icon}
							minTemperature={day.minTemperature}
							maxTemperature={day.maxTemperature}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default DailyForecast;
