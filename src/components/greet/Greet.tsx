type GreetProps = {
	name?: string;
};

export const Greet = (prop: GreetProps) => {
	return (
		<>
			<div>Hello {prop.name} </div>
			<h3>Greetings Titan</h3>
			<h2>More content</h2>
		</>
	);
};
