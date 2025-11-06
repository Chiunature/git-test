import api from "./api";

//定义api返回数据类型

//实况天气借口以及小时天气
export const getRealTimeWeather = async (city?: string, ipAddress?: string) => {
	console.log("getRealTimeWeather", city, ipAddress);
	const response = (await api.get(`/api`, {
		apiType: "weather",
		params: {
			city,
			version: "v63",
			ip: ipAddress,
		},
	})) as any;
	return response;
};

//七日天气
export const getSevenDayWeather = async (city?: string, ipAddress?: string) => {
	const response = (await api.get(`/api`, {
		apiType: "weather",
		params: {
			city,
			ip: ipAddress,
			version: "v9",
		},
	})) as any;
	return response.data;
};
