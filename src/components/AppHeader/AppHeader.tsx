// components/AppHeader/AppHeader.tsx
import { Image, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "@/assets/images/logo.svg";
import units from "@/assets/images/icon-units.svg";

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

export const AppHeader = () => {
	return (
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
	);
};
