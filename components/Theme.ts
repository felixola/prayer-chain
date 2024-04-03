'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography : {
        fontFamily: ['Archivo', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
          main: "#5D3891",
        }
      },  
   
});



export default theme;