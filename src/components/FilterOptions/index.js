import React from 'react';
import { Box } from '@mui/material';

import CategoriesDd from '../CategoriesDd';
import SubCategoriesCheckboxList from '../SubCategoriesCheckboxList';
import PriceRange from '../PriceRange';
import BrandsCheckboxList from '../BrandsCheckboxList';

export default function FilterOptions() {
    let [selectedCategory, setSelectedCategory] = React.useState(null);
    let [priceRange, setPriceRange] = React.useState({min: 1, max: 100000})

    function updateSelectedCategory(category) {
        setSelectedCategory(category);
    }

    function updatePriceRange(newRange) {
        setPriceRange(newRange);
    }

    return (
        <Box>
            <CategoriesDd onSelect={updateSelectedCategory} />
            <SubCategoriesCheckboxList category={selectedCategory} />
            <PriceRange min={priceRange.min} max={priceRange.max} onChange={updatePriceRange} />
            <BrandsCheckboxList category={selectedCategory} />
        </Box>
    )
}