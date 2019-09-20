import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";
import styled from "styled-components"; //TODO style this biiiiizz

const Navbar = () => (
  <AccountConsumer>
    { account => (   
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            HOME
          </Menu.Item>
        </NavLink>
        <NavLink to="/account/profile">
          <Menu.Item>
            { account.username } 
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </AccountConsumer>
)

export default Navbar;
