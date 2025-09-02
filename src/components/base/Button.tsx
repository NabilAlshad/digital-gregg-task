import React from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button className={props.className}>{props.children}</button>;
};

export default Button;
