// components/AppSearch/AppSearch.tsx
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface AppSearchProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSearch: () => void;
	loading?: boolean;
}

export const AppSearch = ({ value, onChange, onSearch, loading = false }: AppSearchProps) => {
	return (
		<div className="app-search">
			<Input
				size="large"
				placeholder="Search for a city"
				prefix={<SearchOutlined />}
				className="app-search-Input"
				allowClear
				value={value}
				onChange={onChange}
				onPressEnter={onSearch}
			/>
			<Button type="primary" className="app-search-Button" onClick={onSearch} loading={loading}>
				Search
			</Button>
		</div>
	);
};
