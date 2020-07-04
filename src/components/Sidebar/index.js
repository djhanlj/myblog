import React from "react";
import * as S from './styled';
import Profile from '../Profile'
import SocialLinks from "../SocialLinks";
import MenuLinks from '../MenuLinks'

const Sidebar = () => (
  <S.SideBarWrapper>
    <Profile />
    <SocialLinks/>
    <MenuLinks/>
  </S.SideBarWrapper>
);

export default Sidebar
