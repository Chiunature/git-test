// App.tsx - 只负责组合和协调
import "./App.css";
import { useWeatherData } from "./hooks/useWeatherData";
import { useSearch } from "./hooks/useSearch";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { AppSearch } from "./components/AppSearch/AppSearch";
import { AppWeather } from "./components/AppWeather/AppWeather";

function App() {
	const {
		weatherShowData,
		weatherConditionData,
		dailyForecastDatas,
		hourlyForecastDatas,
		loading,
		processWeatherData,
	} = useWeatherData();

	const { inputSearchValue, handleInputChange } = useSearch();

	const handleSearch = async () => {
		if (!inputSearchValue.trim()) {
			return;
		}
		await processWeatherData(inputSearchValue, undefined);
	};

	return (
		<div className="app">
			<AppHeader />
			<div className="app-content">How's the sky looking today?</div>
			<AppSearch value={inputSearchValue} onChange={handleInputChange} onSearch={handleSearch} loading={loading} />
			<AppWeather
				weatherShowData={weatherShowData}
				weatherConditionData={weatherConditionData}
				dailyForecastDatas={dailyForecastDatas}
				hourlyForecastDatas={hourlyForecastDatas}
			/>
		</div>
	);
}

export default App;
