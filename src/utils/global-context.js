import React from "react"

const defaultGlobalState = {
theme: 'dark'
};
const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

export const useGlobalState = () => [
    React.useContext(globalStateContext),
    React.useContext(dispatchStateContext)
];

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        defaultGlobalState
    );
    return (
        <globalStateContext.Provider value={state}>
        <dispatchStateContext.Provider value={dispatch}>
            {children}
        </dispatchStateContext.Provider>
        </globalStateContext.Provider>
    );
};

export default GlobalStateProvider;