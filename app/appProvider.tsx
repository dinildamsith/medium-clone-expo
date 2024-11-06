import React, { createContext, useState } from 'react';

// @ts-ignore
export const AppContext = createContext();

// @ts-ignore
export const AppProvider = ({ children }) => {
    const [articleData, setArticleData] = useState("");  // Existing state for article data
    const [imageURL, setImageURL] = useState("");  // New state for image URL

    return (
        <AppContext.Provider value={{ articleData, setArticleData, imageURL, setImageURL }}>
            {children}
        </AppContext.Provider>
    );
};
