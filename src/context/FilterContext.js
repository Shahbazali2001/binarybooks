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

































// Example usage of filterInitialState
console.log(filterInitialState);