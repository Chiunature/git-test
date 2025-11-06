import { Image } from "antd";
import fog from "@/assets/images/icon-fog.webp";
import overcast from "@/assets/images/icon-overcast.webp";
import partlyCloudy from "@/assets/images/icon-partly-cloudy.webp";
import snow from "@/assets/images/icon-snow.webp";
import rain from "@/assets/images/icon-rain.webp";
import storm from "@/assets/images/icon-storm.webp";
import sunny from "@/assets/images/icon-sunny.webp";
import styles from "./HourlyForecast.module.css";
interface HourlyForecastData {
	hours: string;
	wea: string;
	tem: string;
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
const HourlyForecast = ({ HourlyForecastData }: { HourlyForecastData: HourlyForecastData[] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.listTitle}>
				<span>Hourly Forecast</span>
				<span>View more</span>
			</div>
			<div className={styles.listItemsContainer}>
				{HourlyForecastData.map((hour, index) => (
					<List key={index} hour={hour.hours} icon={getWeatherIcon(hour.wea)} temperature={Number(hour.tem)} />
				))}
			</div>
		</div>
	);
};
export default HourlyForecast;
