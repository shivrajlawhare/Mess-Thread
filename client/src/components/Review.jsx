import React from 'react'
import { Rating } from '@mui/material'
import { styled } from "@mui/material/styles";

const CustomRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled, & .MuiRating-iconEmpty": {
    margin: "0 0.4rem", // Adjust the margin between stars
     // Increase the font size of stars
  },
}));

const Review = ({messName, image, dishName, discription, rating}) => {
  return (
    <div className='my-2 border border-black rounded-md w-[83%]'>
      <div className='mess_name font-medium text-xl text-center py-1.5 border-b border-b-black'>
      {messName}
      </div>
      <div className='flex'>
        <div className='image my-4 mx-5'>
            <img src={image} className='w-20 h-20 rounded-full' alt="" />
        </div>
        <div className='my-4'>
            <div className='dish_name font-normal text-sm '>
            {dishName}
            </div>
            <div className="discription text-xs font-light my-1">
            {discription !== "" && discription}
            </div>
            <div className="rating">
            <CustomRating name="read-only" value={rating} readOnly />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
