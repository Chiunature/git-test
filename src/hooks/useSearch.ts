// hooks/useSearch.ts
import { useState, useCallback } from "react";

export const useSearch = () => {
	const [inputSearchValue, setInputSearchValue] = useState<string>("");

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearchValue(e.target.value);
	}, []);

	const resetSearch = useCallback(() => {
		setInputSearchValue("");
	}, []);

	return {
		inputSearchValue,
		handleInputChange,
		resetSearch,
	};
};
