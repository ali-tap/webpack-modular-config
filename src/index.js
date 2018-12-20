import React from "react";
import ReactDOM from "react-dom";
// import { IntlProvider } from "react-intl";
import { Provider } from "mobx-react";
import App from "./App.js";

// mobx stores
import UiStateStore from "./store/uiStateStore";

window.appState = UiStateStore;

ReactDOM.render(
	<Provider uiState={UiStateStore}>
		<App />
	</Provider>,
	document.getElementById("app")
);
