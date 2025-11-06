import axios, { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { weatherApiConfig, validateApiConfig } from "./weatherApiConfig";

//扩展axios请求拦截器参数类型
declare module "axios" {
	interface InternalAxiosRequestConfig {
		apiType?: "weather" | "ip" | "default"; // API 类型标记
		skipAuth?: boolean; // 跳过认证
	}
	export interface AxiosRequestConfig {
		apiType?: "weather" | "ip" | "default"; // API 类型标记
		skipAuth?: boolean; // 跳过认证
	}
}

// 创建实例
const api: AxiosInstance = axios.create({
	baseURL: weatherApiConfig.baseUrl || "https://gfeljm.tianqiapi.com",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
// 请求拦截器 - 添加 URL 参数认证
api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// 目前只支持天气api，所以apiType为weather
		if (config.apiType === "weather") {
			// 验证配置
			if (!validateApiConfig()) {
				throw new Error("API 配置不完整");
			}
			//  如果 config.params 中没有 version，则使用默认值 v63
			const version = config.params?.version || "v63";
			const ipAddress = config.params?.ip || "";
			// 天气 API 使用 URL 参数传递认证信息
			config.params = {
				...config.params,
				unescape: 1,
				version: version,
				appid: weatherApiConfig.appId,
				appsecret: weatherApiConfig.appSecret,
				ip: ipAddress,
			};
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 响应拦截器 - 天气 API 直接返回数据，不需要特殊处理
api.interceptors.response.use(
	(response) => {
		const apiType = response.config.apiType || "default";

		// 天气 API 直接返回数据对象
		if (apiType === "weather") {
			return response.data;
		}

		// 其他 API 可以返回完整响应或自定义处理
		return response.data;
	},
	(error: AxiosError) => {
		if (error.response) {
			const apiType = error.config?.apiType || "default";
			const apiName = apiType === "weather" ? "天气 API" : "API";

			switch (error.response.status) {
				case 401:
					console.error(`${apiName} 未授权，请检查配置`);
					break;
				case 403:
					console.error(`${apiName} 禁止访问`);
					break;
				case 404:
					console.error(`${apiName} 请求的资源不存在`);
					break;
				case 500:
					console.error(`${apiName} 服务器错误`);
					break;
				default:
					console.error(`${apiName} 请求失败:`, error.message);
			}
		} else if (error.request) {
			console.error("网络错误，请检查网络连接");
		} else {
			console.error("请求配置错误:", error.message);
		}
		return Promise.reject(error);
	}
);

export default api;
