import React, { Component } from 'react';
import styled from 'styled-components';
import pdfImage from '../../../../images/pdf.svg';






const DetailsContainer = styled.div`
    margin-top:40px;
    margin-bottom:40px;
    & .list-item
    {
        font-size:17px;
        font-weight:600;
        text-align:left;
        display:flex;
        letter-spacing:normal;
        line-height:1.35;
        letter-spacing:2px;
        margin-top:20px;
        div 
        {
            width:80px;
            font-weight:bold;
            color:#000000;
            line-height: 1.35;
        }
    }
`;
export default class OffersDetails extends Component {
    state={
        file:[]
    }

    render() {
        return (
            <div>
                <DetailsContainer>
                    <div className="list-item">
                        <div>Type:</div>
                        Offete vergelijking
                    </div>
                    <div className="list-item">
                        <div>Datum:</div>
                        18-08-2019
                    </div>
                    <div className="list-item">
                        <div>Prijs:</div>
                        € 12.450  ( of n.v.t )
                    </div>
                    <div className="list-item">
                        <div>Item1:</div>
                        Omschrijving van item
                    </div>
                    <div className="list-item">
                        <div>Item2:</div>
                        Omschrijving van item
                        
                    </div>
                    <div className="list-item">
                        <div>Item3:</div>
                        Omschrijving van item
                        
                    </div>
                </DetailsContainer>
            </div>
        );
    }
}
