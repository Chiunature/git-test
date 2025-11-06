import styles from "./WeatherShow.module.css";
import fog from "@/assets/images/icon-fog.webp";
import overcast from "@/assets/images/icon-overcast.webp";
import partlyCloudy from "@/assets/images/icon-partly-cloudy.webp";
import snow from "@/assets/images/icon-snow.webp";
import rain from "@/assets/images/icon-rain.webp";
import storm from "@/assets/images/icon-storm.webp";
import sunny from "@/assets/images/icon-sunny.webp";
import { Image } from "antd";
interface WeatherShowProps {
	city: string; //城市
	country: string; //国家
	date: string; //日期
	week: string; //星期
	tem: number; //现在温度
	wea: string; //现在天气
}
//Todo wea 多云，晴，阴
const WeatherShow = ({ weatherShowData }: { weatherShowData: WeatherShowProps }) => {
	const { city, country, date, week, tem, wea } = weatherShowData;
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

	return (
		<div className={styles.container}>
			<div className={styles.address}>
				<span>
					{country},{city}
				</span>
				<span>
					{week},{date}
				</span>
			</div>
			<div className={styles.sky}>
				<Image src={getWeatherIcon(wea)} alt={wea} width={60} height={60} preview={false} />
				<div className={styles.skyTemperature}>{tem}</div>
			</div>
		</div>
	);
};

export default WeatherShow;
