import { Slider } from "@mui/material";
import React from "react";

export default function PriceRange({ min, max, onChange }) {
    let [value, setValue] = React.useState([min, max]);
    return (
        <Slider
            min={min}
            max={max}
            value={value}
            onChange={(e, value) => {
                console.log(value);
                setValue(value)
            }}
            valueLabelDisplay="on"
        />
    )
}