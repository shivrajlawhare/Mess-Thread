import Mess from "../models/messModel.js";

export const getAllMess = async (req, res) => {
    try {
        const allMess = await Mess.find();
        res.status(200).json(allMess);
    } catch (error) {
        res.status(404).json({error})
    }
}

export const createNewMess = async(req, res) => {
    try {
        const newMessData = req.body;
        const existingMess = await Mess.findOne({messName: newMessData.messName});
        if (existingMess){
            return res.status(400).json({message: "Mess already exists!"})
        }
        const newMess = new Mess(newMessData);
        const savedMess = await newMess.save();

        res.status(200).json(savedMess);
    } catch (error) {
        res.status(404).json({error})
    }
}