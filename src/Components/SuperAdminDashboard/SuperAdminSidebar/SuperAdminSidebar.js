import React, { useContext } from 'react';
import { userContext } from '../../../App';
import { SidebarContainer, SidebarDiv, Container , SidebarBtn} from '../Style/AddSuperAdminStyle';
import SubMenu from './SubMenu';
import {SidebarData} from './SuperAdminSidebarData';

const SuperAdminSidebar = () => {
  
  const { user, setUser } = useContext(userContext);
    return (
      <SidebarContainer>
        <SidebarDiv>
          {/* <SidebarBtn>Hello! {user.username}</SidebarBtn> */}
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </SidebarDiv>
      </SidebarContainer>
    );
};

export default SuperAdminSidebar;