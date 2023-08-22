import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {

        primary: {                      // Cor de maior Destaque
            main: yellow[700],
            dark: yellow[700],
            light: yellow[700],
            contrastText: "#ffffff",    // Cor de constrate para a cor primária

        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#ffffff",    // Cor de constrate para a cor primária

        },
        background: {
            default: "#ffffff",        // Cor que será utilizada no fundo
            paper: "#f7f6f3",           // Cor que que destaca um pouco mais o fundo, exemplo card
        }
    }
});
