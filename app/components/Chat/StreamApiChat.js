import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  ChannelList,
  MessageTeam,
  ChannelListMessenger,
  ChannelPreviewMessenger,
  ChannelPreviewCompact,
  ChannelPreviewLastMessage,
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";
import styles from "./chatStyle-jss";

const StreamApiChat = (props) => {
  const { classes } = props;
  // const chatClient = new StreamChat("kkzn98xebx9t");
  const chatClient = new StreamChat("8yzyu9ky2d2d");
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.fgNRZEGEBrgDxKQpYmrOa6IiEOv22D_5b1FurVagZoQ";

  // const userToken = JSON.parse(localStorage.getItem("user")).message_token;

  chatClient.setUser(
    {
      id: "admin",
      // name: "userid_1",
      // role: 'admin',
      image: "https://getstream.io/random_png/?id=userid_1&name=userid_1",
      favorite_color: 'green'
    },
    userToken
  );

  // chatClient.setUser(
  //   {
  //     id: JSON.parse(localStorage.getItem("user")).id.toString(),
  //     name: JSON.parse(localStorage.getItem("user")).id.toString(),
  //     // role: 'admin',
  //     // image: "https://getstream.io/random_png/?id=userid_1&name=userid_1",
  //     favorite_color: "green",
  //   },
  //   userToken
  // );

  const filters = {
    type: "messaging",
    members: { $in: ['userid_1'] },
  };

  const sort = { last_message_at: -1 };

  const options = {
    member: true,
    watch: true,
    limit: 10,
  };
  return (
    <div className={classes.chatBody}>
      <Chat client={chatClient} theme={"messaging light"}>
        <ChannelList
          // List={ChannelListMessenger}
          Preview={ChannelPreviewLastMessage}
          filters={filters}
          // setActiveChannelOnMount={true}
          sort={sort}
          // onChannelUpdated={channel_update}
          options={options}
        />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList className={classes.messageList} />
            {/* {JSON.parse(localStorage.getItem('user')).type==='admin'?'':<MessageInput />} */}
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default withStyles(styles)(StreamApiChat);
