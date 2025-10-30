import React from "react";
import styles from "./WeatherShow.module.css";
import fog from "@/assets/images/icon-fog.webp";
import overcast from "@/assets/images/icon-overcast.webp";
import partlyCloudy from "@/assets/images/icon-partly-cloudy.webp";
import snow from "@/assets/images/icon-snow.webp";
import rain from "@/assets/images/icon-rain.webp";
import storm from "@/assets/images/icon-storm.webp";
import sunny from "@/assets/images/icon-sunny.webp";
import { Image } from "antd";
const WeatherShow = () => {
	const weatherIconsMap = {
		0: fog,
		1: overcast,
		2: partlyCloudy,
		3: snow,
		4: rain,
		5: storm,
		6: sunny,
	};
	return (
		<div className={styles.container}>
			<div className={styles.address}>
				<span>Berilin,Germany</span>
				<span>Tuesday,Aug 30,2025</span>
			</div>
			<div className={styles.sky}>
				<Image src={weatherIconsMap[0]} alt="fog" width={60} height={60} preview={false} />
				<div className={styles.skyTemperature}>68</div>
			</div>
		</div>
	);
};

export default WeatherShow;
