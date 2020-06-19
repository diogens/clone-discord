import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styled";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

    console.log(div);
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Diogenes"
            date="10/10/2010"
            content="Bom dia ❤"
          />
        ))}

        <ChannelMessage
          author="Bot"
          date="12/12/2012"
          content={
            <>
              <Mention>@Robot</Mention>, :) 🎉
            </>
          }
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Envie #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
