import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';

ReactDOM.render(
  <React.StrictMode> 
    <GlobalStyles />   
    {/*<LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>*/}    
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <App />
    </MuiPickersUtilsProvider>
    {/*</LocalizationProvider>*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
