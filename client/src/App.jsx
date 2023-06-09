import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Layout, Products } from "./scenes";

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Navigate to="/dashboard" replace />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/products" element={<Products />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
