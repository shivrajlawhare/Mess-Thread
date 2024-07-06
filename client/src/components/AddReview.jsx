import React, { useState } from "react";
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

const CustomRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled, & .MuiRating-iconEmpty": {
    margin: "0 10px", // Adjust the margin between stars
    // Increase the font size of stars
  },
}));

const AddReview = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [newOption, setNewOption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleSelectChange = (event) => {
    if (event.target.value === "add") {
      setOpen(true);
    } else {
      setSelectedValue(event.target.value);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewOption("");
  };

  const handleAddOption = () => {
    setOptions([...options, newOption]);
    setSelectedValue(newOption);
    handleClose();
  };

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
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
          <TextField
            fullWidth
            margin="dense"
            label="Dish item Name"
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
          <Box
            onClick={() => document.getElementById("file-input").click()}
            sx={{
              my: 1,
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
          <TextField
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
          <Typography
            sx={{
              my: 1,
              fontFamily: "Josefin Sans",
              color: "#580000",
            }}
          >
            rate item
          </Typography>
          <CustomRating
            name="customized-icons"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            icon={<StarIcon />}
          />
          <button className="bg-[#982323] hover:bg-[#580000] text-white font-normal text-4xl w-full py-3 rounded-full mt-6 md:mt-3 md:text-xl">
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
              onChange={(e) => setNewOption(e.target.value)}
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
