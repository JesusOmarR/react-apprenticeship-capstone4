import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

interface Props {
  open: boolean
}

export const Nav = styled.nav`
  position: sticky;
  top: 0px;
  background: #f5f5dc;
  border-bottom: 0.5px solid rgb(192, 192, 192);
  height: 60px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 5vw;
  z-index: 10;
  align-items: center;

  input {
    align-items: center;
    justify-content: space-around;
    color: red;
    padding: 0.3rem 0.5rem;
    margin: auto 4rem;
    border-radius: 5px;
    border: 0.5px solid rgb(192, 192, 192);
  }
`

export const NavLink = styled(Link)`
  color: blue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`

export const NavMenu = styled.div`
  display: flex;
  margin: auto;
  white-space: nowrap;

  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  img {
    width: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 2.2rem;
    }
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const SideNav = styled.div<Props>`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: -0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  @media screen and (max-width: 768px) {
    width: ${(props): any => (props.open ? '60vw' : '0')};
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`
