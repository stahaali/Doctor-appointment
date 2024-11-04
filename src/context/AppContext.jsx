// AppContext.jsx

import { createContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const AppContext = createContext();

const AppContextProvider = ({ doctors, children }) => {
    const value = { doctors };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Define prop types
AppContextProvider.propTypes = 
{
    doctors: PropTypes.array.isRequired, // Validate 'doctors' prop
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;
