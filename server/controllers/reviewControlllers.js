import Review from "../models/reviewModel.js";

export const getAllReviews = async(req, res) => {
    try {
        const allReviews = await Review.find();
        res.status(200).json(allReviews);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const getMessReview = async(req, res) => {
    try {
        // const { messName } = req.query;
        const { messName } = req.params;
        console.log(messName);
        const messReviews = await Review.find({messName: messName})
        res.status(200).json(messReviews);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const createReview = async (req, res) => {
    try {
        const newReviewData =req.body;
        const newReview = new Review(newReviewData);
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (error) {
        res.status(404).json({error})
    }
}