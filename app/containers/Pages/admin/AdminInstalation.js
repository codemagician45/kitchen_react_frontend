import React, { Component } from 'react'
import BlankPage from '../BlankPage';
import { Tabs, Tab } from '@material-ui/core';

export default class AdminInstalation extends Component {
    state = {
        value: 1
    }

    handleChange = (e,value) => {

        this.setState({ value })
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <BlankPage desc="Some text description">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="ALGEMEEN" />
                        <Tab label="MAIL TEKSTEN" />
                    </Tabs>

                    <hr />
                    {
                        value === 0 && <div></div>
                    }
                    {
                        value === 1 && <div></div>
                    }

                </BlankPage>
            </div>
        )
    }
}
