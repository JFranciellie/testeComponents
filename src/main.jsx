import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalStyled } from "./components/GlobalStyled"
import { ThemeProvider } from "styled-components"
import { theme } from "./components/Theme"

ReactDOM.createRoot(document.getElementById ('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
            <GlobalStyled/>
        </ThemeProvider>
    </React.StrictMode>
)