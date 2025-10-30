import React from "react";
import styles from "./WeatherCondition.module.css";

const List = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className={styles.listItem}>
			<div className={styles.listItemTitle}>{title}</div>
			<div className={styles.listItemText}>{text}</div>
		</div>
	);
};
const listItems = [
	{
		title: "Feels like",
		text: "68℃",
	},
	{
		title: "Humidity",
		text: "40%",
	},
	{
		title: "Wind",
		text: "10km/h",
	},
	{ title: "Precipitation", text: "0 in" },
];
const WeatherCondition = () => {
	return (
		<div className={styles.container}>
			{listItems.map((item, index) => {
				return <List key={index} title={item.title} text={item.text} />;
			})}
		</div>
	);
};

export default WeatherCondition;
