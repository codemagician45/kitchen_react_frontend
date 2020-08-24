import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button, Grid } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { becomeBidder } from "../../../data/data";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const DetailsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 190px;
  border-radius: 20px;
  background-color: #b3fce8;
  padding: 15px;
  & .input-part {
    background-color: white;
    border-radius: 7px;
    border: 1px #b9b9b9;
    // font-size: 17px;
    // font-weight: 600;
    // text-align: left;
    // display: flex;
    // letter-spacing: normal;
    // line-height: 1.35;
    // letter-spacing: 2px;
    // margin-top: 20px;
    // div {
    //   width: 80px;
    //   font-weight: bold;
    //   color: #000000;
    //   line-height: 1.35;
    // }
  }

  & .uploadButton {
    background-color: #0090e3;
    color: white;
    margin-bottom: 5px;
  }
  & .button-part {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  & .send_button {
    margin-top: 5px;
    background-color: #ff6600;
    color: white;
    width: 100%;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "&.Mui-focused": {
      border: "2px solid red",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiInput-input": {
      backgroundColor: "white",
    },
    "& .MuiInput-root": {
      backgroundColor: "white",
      border: 0,
    },
    "& .MuiInputAdornment-root": {
      alignItems: "center",
      textAlign: "right",
    },
    "& .MuiInput-multiline": {
      paddingTop: 0,
    },
    "& .MuiInputBase-input:focus": {
      border: 0,
    },
  },
}));

const NewOffer = (props) => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [bid, setBid] = useState("");
  const [note, setNote] = useState("");
  const [snackbarSatus, setSnackbarStatus] = useState({
    open: false,
    color: "",
    message: "",
  });

  const handleBid = (e) => {
    console.log(e.target.value);
    setBid(e.target.value);
  };

  const getFiles = (e) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setSnackbarStatus({
        open: false,
        color: "",
        message: "",
      });
    }
  };

  const sendBidder = () => {
    if (bid && note && files.length) {
      let bid_data = {
        bid: bid,
        note: note,
        offer_id: props.offer_id,
      };
      let data = new FormData();
      for (let i = 0; i < files.length; i++) {
        data.append("files[]", files[i], files[i].name);
      }
      data.append("bid", JSON.stringify(bid_data));
      console.log(data);
      becomeBidder(data).then((res) => {
        if (res.isError || res.shouldLogin) {
          console.error("errors");
        }
        if (res.error) {
          console.error("error");
        }
        console.log("I am here", res.data);
        props.history.push("/companies");
      });
    } else
      setSnackbarStatus({
        open: true,
        color: "red",
        message: "input all bid data",
      });
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarSatus.open}
        onClose={handleClose}
      >
        <SnackbarContent
          aria-describedby="message-id2"
          style={{ backgroundColor: snackbarSatus.color }}
          message={
            <span id="message-id2">
              <div>{snackbarSatus.message}</div>
            </span>
          }
        />
      </Snackbar>
      <DetailsContainer>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="input-part">
            <Grid container>
              <TextField
                value={bid}
                onChange={handleBid}
                type="number"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" backgroundColor="white">
                      €
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid container>
              <Grid xs={12} md={7} item>
                <TextField
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  fullWidth
                  multiline
                  rows={2}
                  rowsMax={3}
                  placeholder="Typ hier een omschrijving over uw bod!"
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid xs={12} md={5} item className="button-part">
                <Button
                  className="uploadButton"
                  variant="contained"
                  component="label"
                >
                  BLADEREN
                  <PublishIcon />
                  <input
                    multiple
                    type="file"
                    style={{ display: "none" }}
                    onChange={getFiles}
                  />
                </Button>
              </Grid>
            </Grid>
          </div>
          <Grid container>
            <Button className="send_button" onClick={sendBidder}>
              BOD PLAATSEN
            </Button>
          </Grid>
        </form>
      </DetailsContainer>
    </div>
  );
};

export default NewOffer;
