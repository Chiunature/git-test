import { useState, useEffect } from "react";
import styles from "./WeatherCondition.module.css";

interface WeatherConditionData {
	humidity: string;
	win_speed: string;
	air_level: string;
	pressure: string;
}

interface ListItem {
	title: string;
	text: string;
}

const List = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className={styles.listItem}>
			<div className={styles.listItemTitle}>{title}</div>
			<div className={styles.listItemText}>{text}</div>
		</div>
	);
};

const WeatherCondition = ({ weatherConditionData }: { weatherConditionData: WeatherConditionData }) => {
	const [listItems, setListItems] = useState<ListItem[]>([]);
	useEffect(() => {
		setListItems([
			{ title: "湿度", text: weatherConditionData.humidity },
			{ title: "风力", text: weatherConditionData.win_speed },
			{ title: "质量情况", text: weatherConditionData.air_level },
			{ title: "气压", text: weatherConditionData.pressure },
		]);
	}, [weatherConditionData]);
	return (
		<div className={styles.container}>
			{listItems.map((item, index) => {
				return <List key={index} title={item.title} text={item.text} />;
			})}
		</div>
	);
};

export default WeatherCondition;
