import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    marginTop: '20px'
  },
  padding1: {
    paddingRight: theme.spacing(2),
    ['@media (max-width:600px)']: {
      paddingRight: '0px'
    }
  },
  padding2: {
    paddingRight: theme.spacing(8),
    ['@media (max-width:600px)']: {
      paddingRight: '0px'
    }
  },
  margin1Left: {
    marginLeft: theme.spacing(2),
    ['@media (max-width:600px)']: {
      marginLeft: '0px'
    }
  },
  margin2Left: {
    marginLeft: theme.spacing(12),
    ['@media (max-width:690px)']: {
      marginLeft: '0px'
    }
  },
  marginLeftNormal: {
    marginLeft: theme.spacing(3),
    ['@media (max-width:600px)']: {
      marginLeft: '0px'
    }
  },
  label: {
    ['@media (max-width:950px)']: {
      fontSize: '0.7rem'
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  link: {
    marginTop: '20px',
    fontWeight: 600,
    fontSize: '18px',
    ['@media (max-width:950px)']: {
      fontSize: '0.9rem'
    }
  }
}));


export const ProfileWrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 26px 62px;
    box-shadow: 0 10px 15px 0 rgba(205, 205, 205, 0.5);
    background-color: #ffffff;
    font-family: OpenSans;
  `;

export const ProfilNavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      width: 246px;
      height: 41px;
      border-radius: 18px;
      background-color: #ff6600;
  
      // button text:
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
  `;

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
    margin-top:30px;
    & button:last-child
    {
      margin-left:20px !important;
    }
  `;


export const ProfilePhotoWrapper = styled.figure`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  `;

export const Figcaption = styled.figcaption`
    display: grid;
    margin-left: 18px;
    font-family: SourceSansPro;
    font-size: 14px;
    color: #000000;
  
    button {
      padding: 0;
    }
    span {
      color: #8b8b8b;
      font-size: 14px;
      font-family: SourceSansPro;
    }
  `;
export const FormField = styled.section`
    width: 100%;
    margin-top: 15px;
    text-align: left;
  
    & .formLabel{
      font-size: 14px;
      font-weight: bold;
      color: #000000;
      margin-bottom:-100px !important;
    }
  
    .selectView{
      height:55px;
    }
  
    .formControl{
      width:100%;
    }
    .selectLabel {
      // font-size: 9px; // this value has requested by designer but I think he needs glasses🧐
      font-weight: 600;
      color: #2196f3;
    }
  
    .genderSelection {
      width: 137px;
      height: 40px;
      border-radius: 6px;
      border: solid 1px #2196f3;
    }
    .menuItem{
      font-size: 13px;
      color: rgba(0, 0, 0, 0.54);
    }
  
  `;