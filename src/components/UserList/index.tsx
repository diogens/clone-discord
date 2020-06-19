import React from "react";

import { Container, Role, User, Avatar } from "./styled";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Mauricio" />

      <Role>Offline - 4</Role>
      <UserRow nickname="Doug" isBot />
      <UserRow nickname="João" />
      <UserRow nickname="Daniel" />
      <UserRow nickname="Guilheme" />
      <UserRow nickname="Madruga" />
    </Container>
  );
};

export default UserList;
