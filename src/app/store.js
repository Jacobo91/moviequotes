import { configureStore } from "@reduxjs/toolkit";
import { searchTermReducer } from "../redux/searchTerm/searchTermSlice";
import { quotesReducer } from "../redux/Quotes/quotesSlice";

export const store = configureStore(
    {
        reducer: {
            searchTerm: searchTermReducer,
            quotes: quotesReducer,
        }
    }
);