import React, { useEffect } from 'react';
import shave from 'shave';
import PropTypes from 'prop-types';

import './ConversationListItem.css';

export default function ConversationListItem({ data }) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  });

  const { photo, name } = data;

  return (
    <div className="conversation-list-item">
      <img className="conversation-photo" src={photo} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
      </div>
    </div>
  );
}
ConversationListItem.propTypes = {
  data: PropTypes.node.isRequired,
};
