import { Container, Radio, Content } from "./styles";

interface Data {
	id: string;
	title: string;
	description: string;
	enabled: boolean;
	isStrokeDown: boolean;
}
interface ItemRadioProps {
	onToggleEnabled: (id: string) => void;
	data: Data;
}

export function ItemRadio({ data, onToggleEnabled }: ItemRadioProps) {
	const { description, enabled, id, title, isStrokeDown } = data;

	function handleToggleRadio() {
		onToggleEnabled(id);
	}

	return (
		<Container isStrokeDown={isStrokeDown}>
			<div>
				<Radio
					type="radio"
					onClick={handleToggleRadio}
					checked={enabled}
					onChange={() => {}}
				/>
			</div>
			<Content isEnabled={enabled} onClick={handleToggleRadio}>
				<span>{title}</span>
				<p>
					{description}
					{description}
				</p>
			</Content>
		</Container>
	);
}
