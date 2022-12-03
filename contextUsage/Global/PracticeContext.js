import React from 'react';

const PracticeContext = React.createContext(null);

const PracticeProvider = ({ children }) => {
    const [val, setVal] = React.useState(5);
    return (
        <PracticeContext.Provider value={{
            val,
            setVal,
        }}>
            {children}
        </PracticeContext.Provider>
    )
}
export { PracticeContext, PracticeProvider };
