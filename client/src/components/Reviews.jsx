import React, { useState } from "react";
import Navbar from "./Navbar";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Review from "./Review";
import image from '../assets/dish_image.jpeg'


const Reviews = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 flex flex-col items-center">
        <FormControl
          variant="outlined"
          sx={{ width: "80%", display: "flex", alignItems: "center" }}
        >
          <InputLabel
            fullWidth
            id="custom-select-label"
            sx={{
              my: 1,
              color: "#580000",
              fontFamily: "Josefin Sans",
              "&.Mui-focused": {
                color: "#580000",
              },
            }}
          >
            Select Mess/Restaurant
          </InputLabel>
          <Select
            fullWidth
            labelId="custom-select-label"
            value={selectedValue}
            onChange={handleSelectChange}
            label="Select Mess/Restaurant"
            sx={{
              my: 1,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#982323",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#982323",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#982323",
              },
              "& .MuiSvgIcon-root": {
                color: "#580000",
              },
              color: "#580000",
              fontFamily: "Josefin Sans",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                value={option}
                sx={{
                  fontFamily: "Josefin Sans",
                  color: "#580000",
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col items-center mt-8">
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={1} />
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={2} />
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={3} />
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={4} />
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={5} />
            < Review messName="Saavi" image={image} dishName='Chana Masala' discription="Spicy" rating={3} />
      </div>
    </div>
  );
};

export default Reviews;
