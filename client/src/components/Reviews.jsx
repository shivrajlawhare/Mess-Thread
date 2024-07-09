import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { FormControl, InputLabel, MenuItem, Select, CircularProgress } from "@mui/material";
import Review from "./Review";
import { getAllReviews, getMessReview } from "../api";
import { fetchMessArray } from "../features/mess/messSlice";

const Reviews = () => {
  const dispatch = useDispatch();
  const messArray = useSelector((state) => state.messArray.messArray); // Use the same key as defined in the store
  const [selectedValue, setSelectedValue] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadingMessArray, setLoadingMessArray] = useState(true);

  useEffect(() => {
    const fetchMessData = async () => {
      setLoadingMessArray(true);
      await dispatch(fetchMessArray());
      setLoadingMessArray(false);
    };

    fetchMessData();
  }, [dispatch]);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoadingReviews(true);
      if (selectedValue === "") {
        const response = await getAllReviews();
        setReviews(response.data);
      } else {
        const response = await getMessReview(selectedValue);
        setReviews(response.data);
      }
      setLoadingReviews(false);
    };

    fetchReviews();
  }, [selectedValue]);

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
            {loadingMessArray ? (
              <MenuItem disabled>Loading...</MenuItem>
            ) : (
              messArray.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option.messName}
                  sx={{
                    fontFamily: "Josefin Sans",
                    color: "#580000",
                  }}
                >
                  {option.messName}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </div>
      {loadingReviews ? (
        <div className="mt-20 flex flex-col items-center">
          <CircularProgress sx={{
            color: "#580000",
          }}  />
          <div className="mt-5">Loading Reviews...</div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="w-[50%] text-xl font-medium text-[#580000] mx-auto mt-40 text-center">
          Sorry, no reviews available...
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          {reviews.map((review, index) => (
            <Review
              key={index}
              messName={review.messName}
              image={review.image}
              dishName={review.dishName}
              discription={review.discription}
              rating={review.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
