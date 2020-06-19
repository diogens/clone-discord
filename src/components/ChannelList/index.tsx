import React from "react";
import { Container, AddCategoryIcon, Category } from "./styled";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais </span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="Home" />
      <ChannelButton channelName="Projeto" />
      <ChannelButton channelName="Suporte" />
    </Container>
  );
};

export default ChannelList;
