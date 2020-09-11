import React, { useCallback, useState, useRef } from 'react';
import './Compose.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Compose({ roomId, chatMessages, setChatMessages }) {
  const [message, setMessage] = useState();
  const inputRef = useRef();

  const handleSendMessage = useCallback(() => {
    if (message) {
      axios({
        method: 'POST',
        url: 'https://feestvanverbinding.nl/api/users/sendMessage',
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        data: {
          room_id: roomId,
          message,
        },
      })
        .then((res) => {
          console.log(res.data.success);
          if (res.data.success) {
            setChatMessages([
              ...chatMessages,
              {
                message,
                author: 'me',
                date: new Date().getTime(),
                isRead: false,
                type: 'text',
              },
            ]);
            inputRef.current.value = '';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [roomId, message, inputRef]);

  return (
    <div className="compose">
      <input
        ref={inputRef}
        type="text"
        className="compose-input"
        placeholder="Type a message, @name"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />

      <Button
        size="small"
        variant="outlined"
        color="secondary"
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </div>
  );
}
Compose.propTypes = {
  rightItems: PropTypes.node.isRequired,
};
