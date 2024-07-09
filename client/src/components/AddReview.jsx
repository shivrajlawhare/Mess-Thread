import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Box,
  Typography,
  Rating,
} from "@mui/material";
import Navbar from "./Navbar";
import fileIcon from "../assets/file-upload-icon.png";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessArray, addNewMess } from "../features/mess/messSlice";
import { useNavigate } from "react-router-dom";
import { createReview } from "../api";

const CustomRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled, & .MuiRating-iconEmpty": {
    margin: "0 10px", // Adjust the margin between stars
    // Increase the font size of stars
  },
}));

const AddReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messArray = useSelector((state) => state.messArray.messArray);
  const [open, setOpen] = useState(false);
  // const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [newOption, setNewOption] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
  const [dishName, setDishName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [base64File, setBase64File] = useState("");
  const [discription, setDiscription] = useState("");
  const [rating, setrating] = useState(0);

  const [newMessError, setNewMessError] = useState(false);

  const [messNameError, setMessNameError] = useState(false);
  const [dishNameError, setDishNameError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [sameNameError, setSameNameError] = useState(false);

  useEffect(() => {
    dispatch(fetchMessArray());
    // console.log(messArray);
  }, [dispatch]);

  const handleSelectChange = (event) => {
    if (event.target.value === "add") {
      setOpen(true);
    } else {
      setSelectedValue(event.target.value);
      setMessNameError(false);
    }
  };

  const handleDishNameChange = (e) => {
    setDishName(e.target.value);
    if (e.target.value.trim() !== "") {
      setDishNameError(false);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    const files = event.target.files;
    const file = files[0];
    getBase64(file);
    if (event.target.files[0]) {
      setFileError(false);
    }
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //   onLoad(reader.result);
      //setPostData({...postData,selectedFile: reader.result})
      setBase64File(reader.result);
    };
  };

  const handleDiscriptionChange = (e) => {
    setDiscription(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setNewOption("");
    setNewMessError(false);
    setSameNameError(false);
  };

  const handleAddOption = async () => {
    if (newOption.trim() === "") {
      setNewMessError(true);
      return;
    }
    if(messArray.some(mess => mess.messName.toLowerCase() === newOption.toLowerCase())){
      setSameNameError(true);
      return;
    }
    await dispatch(addNewMess({ messName: newOption }));
    // setOptions([...options, newOption]);
    setSelectedValue(newOption);
    handleClose();
  };

  const handleSubmit = () => {
    var flag = false;
    if (selectedValue.trim() === "") {
      setMessNameError(true);
      flag = true;
    }
    if (dishName.trim() === "") {
      setDishNameError(true);
      flag = true;
    }
    if (selectedFile === "") {
      setFileError(true);
      flag = true;
    }
    if (rating === 0) {
      setRatingError(true);
      flag = true;
    }
    if (flag) {
      return;
    }
    const newReviewData = {
      messName: selectedValue,
      dishName: dishName,
      image: base64File,
      discription: discription,
      rating: rating,
    };
    try {
      createReview(newReviewData).then((res) => {
        console.log(res.data);
        navigate("/success");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 flex flex-col items-center">
        <FormControl
          variant="outlined"
          sx={{ width: "80%", display: "flex", alignItems: "center" }}
        >
          <div className="w-full my-1">
            <InputLabel
              fullWidth
              id="custom-select-label"
              sx={{
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
              {messArray.map((option, index) => (
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
              ))}
              <MenuItem
                value="add"
                sx={{
                  fontFamily: "Josefin Sans",
                  color: "#580000",
                }}
              >
                Add New Mess/Restaurant +
              </MenuItem>
            </Select>
            {messNameError && (
              <div className="text-red-400 text-xs mt-1">
                *Please select a Mess/Restaurant.
              </div>
            )}
          </div>
          <div className="w-full my-1">
            <TextField
              onChange={(e) => {
                handleDishNameChange(e);
              }}
              fullWidth
              margin="dense"
              label="Dish item Name"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#580000", // Label color
                  fontFamily: "Josefin Sans",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#580000", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#982323",
                  },
                  "&:hover fieldset": {
                    borderColor: "#982323",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#982323",
                    borderWidth: "1px", // Ensure the focus border doesn't override the border style
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#580000", // Input text color
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#982323 !important", // Ensure this style takes precedence
                },
              }}
            />
            {dishNameError && (
              <div className="text-red-400 text-xs mt-1">
                *Please enter the Dish Name.
              </div>
            )}
          </div>
          <div className="w-full my-1 flex flex-col items-center">
            <Box
              onClick={() => document.getElementById("file-input").click()}
              sx={{
                width: "185px",
                height: "221px",
                borderRadius: "4px 0px 0px 0px",
                border: "1px solid #982323",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#982323",
                },
              }}
            >
              <input
                id="file-input"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                style={{
                  display: "none",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt="Uploaded File"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                    }}
                  />
                ) : (
                  <>
                    <img src={fileIcon} alt="Upload Icon" style={{}} />
                    <Typography
                      sx={{
                        color: "#580000", // Label color
                        fontFamily: "Josefin Sans",
                        mt: 4,
                      }}
                    >
                      Add Image
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
            {fileError && (
              <div className="text-red-400 text-xs mt-1">
                *Please select the image.
              </div>
            )}
          </div>

          <TextField
            onChange={(e) => {
              handleDiscriptionChange(e);
            }}
            fullWidth
            margin="dense"
            label="Description (optional)"
            sx={{
              my: 1,
              "& .MuiInputLabel-root": {
                color: "#580000", // Label color
                fontFamily: "Josefin Sans",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#580000", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#982323",
                },
                "&:hover fieldset": {
                  borderColor: "#982323",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#982323",
                  borderWidth: "1px", // Ensure the focus border doesn't override the border style
                },
                "& .MuiOutlinedInput-input": {
                  color: "#580000", // Input text color
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#982323 !important", // Ensure this style takes precedence
              },
            }}
          />
          <div className="w-full my-1 flex flex-col items-center">
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                color: "#580000",
              }}
            >
              rate item
            </Typography>
            <CustomRating
              name="customized-icons"
              value={rating}
              onChange={(event, newValue) => {
                setrating(newValue);
                if (newValue !== 0) {
                  setRatingError(false);
                }
              }}
              icon={<StarIcon />}
            />
            {ratingError && (
              <div className="text-red-400 text-xs mt-1">
                *Please rate the item.
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#982323] hover:bg-[#580000] text-white font-normal text-4xl w-full py-3 rounded-full mt-6 md:mt-3 md:text-xl"
          >
            Submit
          </button>
        </FormControl>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
            sx={{
              fontFamily: "Josefin Sans",
              color: "#580000",
            }}
          >
            Add New Mess/Restaurant
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                fontFamily: "Josefin Sans",
                color: "#580000",
              }}
            >
              Please enter the name of new Mess/Restaurant to add to the list.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="New Mess/Restaurant"
              fullWidth
              value={newOption}
              onChange={(e) => {
                setNewOption(e.target.value);
                if (e.target.value.trim() !== "") {
                  setNewMessError(false);
                }
                if(messArray.some(mess => mess.messName.toLowerCase() !== newOption.toLowerCase())){
                  setSameNameError(false);
                }
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#580000", // Label color
                  fontFamily: "Josefin Sans",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#580000", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#982323",
                  },
                  "&:hover fieldset": {
                    borderColor: "#982323",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#982323",
                  },
                  fontFamily: "Josefin Sans",
                  color: "#580000",
                },
              }}
            />
            {newMessError && (
              <div className="text-red-400 text-xs">
                *Mess Name can not be empty.
              </div>
            )}
            {sameNameError && (
              <div className="text-red-400 text-xs">
                *This Mess/Restaurant already exists.
              </div>
            )}
            
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                color: "#580000",
                fontFamily: "Josefin Sans",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddOption}
              sx={{
                color: "#580000",
                fontFamily: "Josefin Sans",
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AddReview;
