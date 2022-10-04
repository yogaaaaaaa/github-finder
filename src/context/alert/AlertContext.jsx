import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  
  //set initial state======================
  const initialState = null;

  //use reducer function ==================
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //make function to set alert ==========================
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        msg,
        type,
      },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider

      //value that exported======================
      value={{
        alert: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext