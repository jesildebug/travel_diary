import React,{useEffect, useRef} from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink ,Link} from 'react-router-dom';

import './header.css'

import logo from '../../assets/images/logo.png'

const nav__Links =[{
  path:"/home",
  display:'Home'
},
{
  path:"/about",
  display:'About'
},
{
  path:"/tours",
  display:'Tours'
}
]



function Header() {

  const headerRef = useRef(null);

const stickyHeaderFunc = () => {
  window.addEventListener('scroll',()=>{

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  

  })
}

useEffect(() => {
  stickyHeaderFunc();

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', stickyHeaderFunc);
  };
}, []);




  
   
  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
         
         {/* ------------------logo-----------------*/}
         <div className='logo'>
          <img src={logo} alt=''/>

         </div>
           {/* ------------------logo end-----------------*/}

            {/* ------------------Menu start-----------------*/}

                <div className='navigation'>
                  <ul className='menu d-flex align-items-center gap-5'>
                    {nav__Links.map((item,index)=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path}
                      className={navClass=>navClass.isActive?"active__link" : ""}>{item.display}</NavLink>
                    </li>))}
                  </ul>
                </div>

               {/* ------------------Menu End-----------------*/}
             <div className='nav__right d-flex align-items-center gap-4'>
             <div className='nav__btns d-flex align-items-center gap-4'>
              <Button className='btn secondary__btn'><Link to='/login' >Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/register' >Register</Link></Button>
             </div>
             <span className='mobile__menu'></span>
             <i class="ri-menu-line"></i> 
             </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header