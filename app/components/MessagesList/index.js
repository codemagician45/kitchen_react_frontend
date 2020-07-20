import React, { Component } from 'react';
import css from './index.scss';
import MessagesList from '../../containers/Tables/kitchen/MessagesList';

export default class index extends Component {
    render() {
        return (
            <div className={css.componentMessagesList}>
                <div className={css.listContent}>
                    <h2>Nieuwe berichten </h2>
                    <MessagesList data={this.props.data}/>
                </div>
            </div>
        )
    }
}
