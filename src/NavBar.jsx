import React from 'react'
import styled from 'styled-components'
import sauceIcon from './sauce.png'

const NavBar = ({ links, ...props }) => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <Icon size="small" alt="sauce" src={sauceIcon} />
        </HeaderItem>
        <HeaderItem>
          Recipes
        </HeaderItem>
        <HeaderItem>User@RecipeBoss.com</HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  background-color: orange;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8% ;
  box-shadow: 0 0 10px 0 black;
  z-index: 1000;
  /* background: transparent; */
  /* background-color: #141414; */
  /* background: linear-gradient(180deg,hsla(0,0%,8%,.9),hsla(0,0%,8%,.9) 100%,transparent); */
`
const HeaderMenu = styled.ul`
  margin-top: 0px;
  align-items: center;
  display: flex;
  > li:last-child {
    margin-left: auto;
  }
`
const HeaderItem = styled.li`
  padding: 0 1px 0 1px;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;
  color: #fff;
`
const Icon = styled.img`
  height: 20px;
  width: 15px;
  object-fit: cover;
  border-radius: 50%;
  margin: 18px;
`
