import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Stationary" },
    { id: 4, name: "Footwear" },
]
export default function CategoriesDd({ onSelect }) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categories}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => {
                    return <TextField {...params} label="Categories" />
                }
            }
            onChange={(e, value) => onSelect(value)}
        />
    )
}