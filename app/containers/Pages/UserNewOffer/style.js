
import styled from 'styled-components';

export const StyledLastPage = styled.div`
  height:"1500px";
  width:'1000px';
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin-bottom:45px;
  @media screen and (max-width: 400px) {
        font-size: 24px;

    }
`

export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.36,
        marginLeft: '20px'
    },
    margin: {
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '30px'
    },
    upload: {
        marginLeft: '10px',
        marginTop: '20px'
    },
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(15)
    },
    paper: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        width: '100%',
        paddingTop: theme.spacing(2),
    },
    labelError: {
        marginLeft: "20px",
    },
    selectForm: {
        height: "3.6em"
    },
    pushCenter: {
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '15%'
    }
});