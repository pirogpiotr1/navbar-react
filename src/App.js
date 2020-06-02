import React, {useState} from 'react';
import { CSSTransition } from "react-transition-group"

function App() {
  return (
      <NavBar>
        <NavItem text="👹" />
        <NavItem text="😱" />
        <NavItem text="😍" />

        <NavItem text="🤑" >
          <DropDownMenu />
        </NavItem>
      </NavBar>
  );
}

function DropDownMenu(){
  const [activeMenu,setActiveMenu] = useState('main');

  const [menuHeight,setMenuHeight] = useState(null);
  function calcHeight( el ){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropDownItem(props){
    return (
      <a href="#" className="menu__item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)} >
        <span className="icon-button" > {props.leftIcon} </span>
        {props.children}
        <span className="icon-right" > {props.rightIcon} </span>
      </a>
    )
  }
  return (
    <div className="dropdown" style={{height:menuHeight}}>
      <CSSTransition in={ activeMenu === 'main' } unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem leftIcon="🤐" rightIcon="🤕" goToMenu="settings">Go to Settings
          </DropDownItem>
         </div>
      </CSSTransition>

      <CSSTransition in={ activeMenu === 'settings' } unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem goToMenu="main">Go to menu </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
          <DropDownItem leftIcon="LOL"> some text </DropDownItem>
         </div>
      </CSSTransition>
    </div>
  );
}
function NavBar(props){
  return(
    <nav className="navbar">
        <ul className="navbar__ul"> { props.children }</ul>
    </nav>
  )
}
function NavItem(props){
  const [open,setOpen] = useState(false);
  return(
    <li className="navbar__item">
      <a href="#" className="navbar__item__a" onClick={()=>setOpen(!open)} > 
        {props.text}
      </a>

      {open && props.children}
    </li>
  )
  ;
}

export default App;
