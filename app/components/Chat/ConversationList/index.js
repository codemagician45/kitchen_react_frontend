import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import config from '../../../actions/config';
import './ConversationList.css';

export default function ConversationList() {
  const [conversations, setConversations] = useState([]);

  const getConversations = () => axios({
    method: 'POST',
    url: 'https://feestvanverbinding.nl/api/users/getRooms',
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  })
    .then((res) => {
      console.log('adasda', res.data);
      const newConversations = res.data.map((result) => ({
        photo: config.fetchLinkUrl + result.profilePhoto,
        id: result.id,
        name: result.companyNameAndSurname,
      }));
      setConversations(newConversations);
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
  useEffect(() => {
    getConversations();
  }, []);
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {conversations.map((conversation) => (
        <ConversationListItem key={conversation.name} data={conversation} />
      ))}
    </div>
  );
}
