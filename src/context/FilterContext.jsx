import React from 'react'
const filterInitialState ={
    ProductsList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
	
};

export const FilterContext = React.createContext(filterInitialState);


export const FilterProvider = ({children}) => {
    const value = {filterInitialState}

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilter = () => {
    const context = React.useContext(FilterContext);
    return context;
}   