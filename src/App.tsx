import "./App.css";
import logo from "@/assets/images/logo.svg";
import units from "@/assets/images/icon-units.svg";
import { Button, Input, Image, Dropdown } from "antd";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
const unitsItems: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				1st menu item
			</a>
		),
	},
	{
		key: "2",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				2nd menu item (disabled)
			</a>
		),
		icon: <SmileOutlined />,
	},
	{
		key: "3",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
				3rd menu item (disabled)
			</a>
		),
	},
];
function App() {
	return (
		<div className="app">
			<div className="app-header">
				<Image src={logo} alt="logo" preview={false} />
				<div>
					<Dropdown menu={{ items: unitsItems }}>
						<div className="app-header-Dropdown-Content">
							<Image src={units} alt="units" width={20} height={20} preview={false} />
							<span>设置</span>
							<DownOutlined className="app-header-Dropdown-Content-DownOutlined" />
						</div>
					</Dropdown>
				</div>
			</div>
			<div className="app-content">How's the sky looking today?</div>
			<div className="app-search">
				<Input
					size="large"
					placeholder="Search for a city"
					prefix={<SearchOutlined />}
					className="app-search-Input"
					allowClear
				/>
				<Button type="primary" className="app-search-Button">
					Search
				</Button>
			</div>
			<div className="app-weather"></div>
		</div>
	);
}

export default App;
