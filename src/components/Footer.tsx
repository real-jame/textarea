import React from "react";
import styled from "styled-components";
import { ThemeEntry } from "../utilities/UIThemes";
import Export from "./footer/Export";
import Theme from "./footer/Theme";

const FooterBar = styled.footer`
	position: fixed;
	height: auto;
	width: 100%;
	font-size: 10px;
	bottom: 0px;

	display: flex;

	outline: solid black 1px;
	background-color: ${(props) => props.theme.footerBackgroundColor};
`;

type Props = {
	text: string;
	saveStatus: boolean;
	UITheme: ThemeEntry;
	setUITheme: (newTheme: string) => void;
};

const Footer = (props: Props) => {
	return (
		<FooterBar>
			<Export text={props.text} />
			{/* <SaveStatusText saveStatus={props.saveStatus} /> */}
			<Theme setUITheme={props.setUITheme} UITheme={props.UITheme} />
		</FooterBar>
	);
};

export default Footer;
