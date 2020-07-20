import React, { Component } from 'react';
import Image from './example.png';
import { Rectangle } from './style';

export default class CompaniesProfile extends Component {
    render() {
        return (
            <Rectangle>
                <h1>Bedrijsprofiel</h1>
                <img src={Image}></img>
                <h1>Over Keukenconcurrent</h1>
                <div className="openWorks">
                    <span>Maandag t/m Vrijdag 12:00 - 18:00</span><br />
                    <span>Zaterdag 12:00 - 17:00</span><br />
                    <span>Zondag gesloten!</span>
                </div>
                <h2>www.keukenconcurrent.nl</h2>
                <div className="ratingBox">
                    <div className="ratings">8.6</div>
                    <div className="ratingsText">Beoordeling</div>
                </div>
                <div className="bottomFix">
                    <hr />
                    <h1>Afspraken</h1>
                U heeft nog geen afspraken.
                </div>
            </Rectangle>
        )
    }
}
