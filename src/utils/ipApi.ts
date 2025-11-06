interface IPInfo {
	ip: string;
	city?: string;
	country?: string;
	region?: string;
}

//获取公网ip地址
async function getDetailedIPInfo(): Promise<IPInfo> {
	const response = await fetch("https://ipapi.co/json/");
	const data: IPInfo = await response.json();
	return data;
}

export { getDetailedIPInfo };
