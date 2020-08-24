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
  const chatClient = new StreamChat("kkkqp86hb87x");
  // const userToken =
  //   "4keyfptk88dwz2wp67jj65xugn7xr9349hnsq5wecd3n33w8jpuy43xv2zz669cy";

  const userToken = JSON.parse(localStorage.getItem("user")).message_token;

  chatClient.setUser(
    {
      id: JSON.parse(localStorage.getItem("user")).id.toString(),
      // name: "userid_1",
      // role: 'admin',
      image: "https://getstream.io/random_png/?id=userid_1&name=userid_1",
      favorite_color: "green",
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
    // members: { $in: ['userid_1'] },
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
            {JSON.parse(localStorage.getItem("user")).type === "admin" ? (
              ""
            ) : (
              <MessageInput />
            )}
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default withStyles(styles)(StreamApiChat);
