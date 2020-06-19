import React from "react";

import { Container, Separator } from "./styled";
import ServerButton from "../ServerButton";

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome />
      <ServerButton hasNotifications />
      <ServerButton />
      <Separator />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <Separator />
    </Container>
  );
};

export default ServerList;
