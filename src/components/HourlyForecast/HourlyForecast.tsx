import { Image } from "antd";
import fog from "@/assets/images/icon-fog.webp";
import overcast from "@/assets/images/icon-overcast.webp";
import partlyCloudy from "@/assets/images/icon-partly-cloudy.webp";
import snow from "@/assets/images/icon-snow.webp";
import rain from "@/assets/images/icon-rain.webp";
import storm from "@/assets/images/icon-storm.webp";
import sunny from "@/assets/images/icon-sunny.webp";
import styles from "./HourlyForecast.module.css";
const weatherIconsMap = {
	0: fog,
	1: overcast,
	2: partlyCloudy,
	3: snow,
	4: rain,
	5: storm,
	6: sunny,
};
const hours = [
	{ hour: "12:00", icon: weatherIconsMap[0], temperature: 10 },
	{ hour: "13:00", icon: weatherIconsMap[1], temperature: 10 },
	{ hour: "14:00", icon: weatherIconsMap[2], temperature: 10 },
	{ hour: "15:00", icon: weatherIconsMap[3], temperature: 10 },
	{ hour: "16:00", icon: weatherIconsMap[4], temperature: 10 },
	{ hour: "17:00", icon: weatherIconsMap[5], temperature: 10 },
	{ hour: "18:00", icon: weatherIconsMap[6], temperature: 10 },
	{ hour: "19:00", icon: weatherIconsMap[0], temperature: 10 },
	{ hour: "20:00", icon: weatherIconsMap[1], temperature: 10 },
	{ hour: "21:00", icon: weatherIconsMap[2], temperature: 10 },
	{ hour: "22:00", icon: weatherIconsMap[3], temperature: 10 },
	{ hour: "23:00", icon: weatherIconsMap[4], temperature: 10 },
	{ hour: "00:00", icon: weatherIconsMap[5], temperature: 10 },
	{ hour: "01:00", icon: weatherIconsMap[6], temperature: 10 },
	{ hour: "02:00", icon: weatherIconsMap[0], temperature: 10 },
	{ hour: "03:00", icon: weatherIconsMap[1], temperature: 10 },
];
const List = ({ hour, icon, temperature }: { hour: string; icon: string; temperature: number }) => {
	return (
		<div className={styles.listItem}>
			<div className={styles.listItemIcon}>
				<Image src={icon} alt="icon" width={30} height={30} preview={false} />
			</div>
			<div className={styles.listItemHour}>{hour}</div>
			<div className={styles.listItemTemperature}>{temperature}°</div>
		</div>
	);
};
const HourlyForecast = () => {
	return (
		<div className={styles.container}>
			<div className={styles.listTitle}>
				<span>Hourly Forecast</span>
				<span>View more</span>
			</div>
			<div className={styles.listItemsContainer}>
				{hours.map((hour, index) => (
					<List key={index} hour={hour.hour} icon={hour.icon} temperature={hour.temperature} />
				))}
			</div>
		</div>
	);
};
export default HourlyForecast;
