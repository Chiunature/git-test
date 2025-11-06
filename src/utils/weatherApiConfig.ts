// 调试：查看所有环境变量（开发环境）
// if (import.meta.env.DEV) {
// 	console.log("=== 环境变量调试 ===");
// 	console.log("import.meta.env:", import.meta.env);
// 	console.log("VITE_API_APP_ID:", import.meta.env.VITE_API_APP_ID);
// 	console.log("VITE_API_APP_SECRET:", import.meta.env.VITE_API_APP_SECRET);
// 	console.log("VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);
// 	console.log("===================");
// }

export const weatherApiConfig = {
	appId: import.meta.env.VITE_API_APP_ID,
	appSecret: import.meta.env.VITE_API_APP_SECRET,
	baseUrl: import.meta.env.VITE_API_BASE_URL,
};

// 验证配置是否完整
export const validateApiConfig = () => {
	if (!weatherApiConfig.appId || !weatherApiConfig.appSecret) {
		console.log("weatherApiConfig", weatherApiConfig);
		console.warn("API 配置不完整，请检查环境变量");
		return false;
	}
	return true;
};
