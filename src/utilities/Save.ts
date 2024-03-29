const STORAGE_KEYS = {
	TEXT: "text",
	SETTINGS: "settings",
};

export type SettingsType = {
	[key: string]: string | boolean;
	Theme: string;
	WordWrap: boolean;
	SpellCheck: boolean;
	FontFamily: string;
	ExportFileName: string;
};

const DEFAULT_SETTINGS = {
	Theme:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "Default Dark"
			: "Default Light",
	WordWrap: true,
	SpellCheck: true,
	FontFamily:
		'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	ExportFileName: "textarea-exported.txt",
} as SettingsType;

function getFromStorage(key: string, defaultValue: any = ""): any {
	return localStorage.getItem(key) || defaultValue;
}

function saveToStorage(key: string, value: any): void {
	localStorage.setItem(key, value);
}

// Text
function getText(): string {
	return getFromStorage(STORAGE_KEYS.TEXT, "");
}

function saveText(text: string): void {
	saveToStorage(STORAGE_KEYS.TEXT, text);
}

// Settings
function getSettings(): SettingsType {
	const settings = getFromStorage(
		STORAGE_KEYS.SETTINGS,
		JSON.stringify(DEFAULT_SETTINGS)
	);
	return JSON.parse(settings);
}

function saveSettings(settings: SettingsType): void {
	settings = { ...DEFAULT_SETTINGS, ...settings };
	saveToStorage(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

function resetSettings(): void {
	console.log("resetting settings");
	saveSettings(DEFAULT_SETTINGS);
}

export { getText, saveText, getSettings, saveSettings, resetSettings };
