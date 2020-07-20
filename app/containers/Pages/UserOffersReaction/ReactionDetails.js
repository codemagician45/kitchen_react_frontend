import React, { Component } from 'react';
import styled from 'styled-components';
import pdfImage from '../../../../images/pdf.svg';
import MessageIcon from '@material-ui/icons/Message';
import { Button } from '@material-ui/core';
import { DetailsContainer } from './style';

export default class ReactionDetails extends Component {
    state = {
        file: []
    }

    render() {
        return (
            <div>
                <DetailsContainer>
                    <h1>Bieding</h1>
                    <div className="blueDiv">
                        <span>
                            18-08-2019  om 17:30 uur
                        </span>
                        <h1>
                            € 12,500,-
                        </h1>
                    </div>
                    <div className="lightBlueDiv">
                        <div className='firstDiv'>
                            <img src={pdfImage}></img>
                            Offerte 12-02-2019.pdf
                        </div>
                        <div className='lastDiv'>
                            <span>Ga naar reacties</span>
                            <div className='oval'>1</div>
                        </div>
                    </div>
                    <div className="middleContainer">
                        <span>Heeft u een vraag of wilt u meer informatie?</span>
                        <Button variant="outlined" color="primary" className="button"
                            endIcon={<MessageIcon />}
                        >
                            STUUR EEN BERICHT
                        </Button>
                    </div>

                    <div className="lastContainer">
                        <div className="contentLast">
                            <span>Wilt u het bod vrijblijvend accepteren?</span>
                            <Button variant="contained" color="primary" className="button"
                                size="large"
                            >
                                BOOD ACCEPTEREM
                        </Button>
                        </div>
                    </div>
                </DetailsContainer>
            </div>
        );
    }
}
