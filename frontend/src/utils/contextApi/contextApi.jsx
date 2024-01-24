import React, { createContext, useEffect, useState } from "react";
import { getDataFromServer } from "../helpers/ApiCalls";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [ bookData, setBookData] = useState(null);
 

  const baseUrl = "http://localhost:1338";

  const fetchData = async (collection) => {

    try {
      const response = await getDataFromServer({
        apiUrl: `${baseUrl}/api/${collection}?populate=deep`,
      });
      return response.data || null;
    } catch (error) {
      console.error(`Error fetching ${collection} data:`, error);
      return null;
    }
  };

  const getpageData = async () => {
    try {
      const [
        bookData
      ] = await Promise.all([
        fetchData("library")
      ]);

      if (bookData) {
        setBookData(bookData);
      } else {
        setBookData("no use-case data found");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!bookData) getpageData();
  }, [bookData]);

  return (
    <AppContext.Provider
      value={{
        bookData,
        baseUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
