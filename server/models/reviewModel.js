import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    messName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    dishName: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

const Review = mongoose.model('Review', reviewSchema);

export default Review;