import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import ComponentHello from "./Components/Hello/Hello";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Components/Hello/reducer";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ComponentHello name="Oisin" enthusiasmLevel={10} />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
