import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { ComponentHello } from "./Components/Hello/Hello";

ReactDOM.render(
  <ComponentHello name="Typescript" enthusiasmLevel={10} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
