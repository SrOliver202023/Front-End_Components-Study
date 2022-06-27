import { useEffect, useState } from "react";
import { ItemRadio } from "../components/ItemRadio";
import "./App.css";

const list = [
	{
		id: "ABC-100",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: true,
	},
	{
		id: "ABC-200",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: false,
	},
	{
		id: "ABC-300",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: false,
	},
	{
		id: "ABC-400",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: false,
	},
	{
		id: "ABC-500",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: true,
	},
	{
		id: "ABC-600",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: true,
	},
	{
		id: "ABC-700",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: true,
	},
	{
		id: "ABC-800",
		title: "Item",
		description: "Texto de exemplo para item.",
		enabled: true,
	},
];

function App() {
	const [itemList, setItemList] = useState(list);

	function toggleEnabled(id: string) {
		const found = itemList.find((item) => item.id === id);
		if (!found) return;

		found.enabled = found.enabled ? false : true;
		setItemList((item) => [...item]);
	}

	let acc = false;
	return (
		<div className="App">
			<section>
				<ul>
					{itemList.map((item, index) => {
						if (itemList[index + 1]) {
							acc =
								itemList[index + 1].enabled === true && item.enabled === true
									? true
									: false;
						} else {
							acc = false;
						}

						return (
							<ItemRadio
								key={item.id}
								data={{ ...item, isStrokeDown: acc }}
								onToggleEnabled={toggleEnabled}
							/>
						);
					})}
				</ul>
			</section>
		</div>
	);
}

export default App;
