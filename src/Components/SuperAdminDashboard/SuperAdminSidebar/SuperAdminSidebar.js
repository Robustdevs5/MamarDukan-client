import React from 'react';
import { SidebarContainer, SidebarDiv, Container , SidebarBtn} from '../Style/AddSuperAdminStyle';
import SubMenu from './SubMenu';
import {SidebarData} from './SuperAdminSidebarData';

const SuperAdminSidebar = () => {
    return (
      <SidebarContainer>
        <SidebarDiv>
          <SidebarBtn>Hello! Super Admin</SidebarBtn>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </SidebarDiv>
      </SidebarContainer>
    );
};

export default SuperAdminSidebar;