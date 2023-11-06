import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./input.css";
import App from "./App";
import {BaseUrlProvider} from "./context/BaseUrlContext";

import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BaseUrlProvider>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </BaseUrlProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
