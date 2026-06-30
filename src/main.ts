import {
	Plugin,
} from 'obsidian';
import {
	DEFAULT_SETTINGS,
	GoogleCalendarTasksSettings,
	GoogleCalendarTasksSettingTab,
} from './settings';

export default class GoogleCalendarTasks extends Plugin {
	settings!: GoogleCalendarTasksSettings;

	async onload() {
		// await this.loadSettings();

		// // This creates an icon in the left ribbon.
		// this.addRibbonIcon('dice', 'GoogleCalendarTasks', (_evt: MouseEvent) => {
		// 	// Called when the user clicks the icon.
		// 	new Notice('This is a notice!');
		// });

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-modal-simple',
			name: 'Open modal (simple)',
			callback: () => {

			},
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new GoogleCalendarTasksSettingTab(this.app, this));

		// // When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		// this.registerInterval(
		// 	window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000),
		// );
	}

	onunload() {}

	// async loadSettings() {
	// 	this.settings = Object.assign(
	// 		{},
	// 		DEFAULT_SETTINGS,
	// 		(await this.loadData()) as Partial<GoogleCalendarTasksSettings>,
	// 	);
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }
}
