import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
margin: auto;
background-color:white;
padding:30px;
width:500px;
height:400px;
& div {
    margin:25% 25%;
    & button {
        margin-top:20px;
    }
}
`;

export default class index extends Component {
    handleLogin = () => {
        this.props.history.push('/login');
    }
    render() {
        return (
            <Container>
                <div>

                    <p>Bedankt voor de registratie</p>
                    <p>U heeft zich geregistreerd</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleLogin}
                    >
                        Klik om in te loggen
              </Button>
                </div>
            </Container>
        )
    }
}
