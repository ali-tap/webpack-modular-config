import { observable, action } from "mobx";

class UiStateStore {
	@observable locale = "en";

	@action
	setLocale(locale) {
		this.locale = locale;
	}
}

export default new UiStateStore();
