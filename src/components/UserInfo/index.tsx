import React, { useEffect, useState } from "react";
import UserInfoItem from "./UserInfoItem";
import { InfoContainer, InfoContent } from "./styles";
import { DefaultContainer } from "../../styles/DefaultContainer";
import api from "../../services/api";

interface User {
  name?: string;
  address?: string;
  phone?: string;
}

export default function UserInfo() {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    api.get(`/get_user_info?userid=${42}`).then(({ data }) => setUser(data));
  }, []);

  return (
    <DefaultContainer>
      <InfoContent>
        <UserInfoItem title="Nome:" content={user.name} />
        <UserInfoItem title="Endereço:" content={user.address} />
        <UserInfoItem title="Telefone:" content={user.phone} />
      </InfoContent>
    </DefaultContainer>
  );
}
