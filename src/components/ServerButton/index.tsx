import React from "react";

/* import Logo from "../../assets/Logo.svg"; */

import { Button } from "./styled";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && (
        <div
          style={{
            width: 20,
            height: 20,
            background: "tomato",
            borderRadius: 10,
          }}
        ></div>
      )}
    </Button>
  );
};

export default ServerButton;
