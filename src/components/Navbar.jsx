import React,{useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <p className="text-pink-600">ALAMUTU TEMILOLUWA</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
        <Link to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
        <Link to="About"  smooth={true}  duration={500} >
          About
        </Link>
         </li>
        <li><Link to="Skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li><Link to="Project"  smooth={true}  duration={500} >
          Project
        </Link> </li>
        <li><Link to="Contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <MenuIcon /> : < CloseIcon />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        
        <li className='py-6 text-4xl'><Link  onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="About"  smooth={true}  duration={500} >
          About
        </Link> </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Project"  smooth={true}  duration={500} >
          Project
         </Link> </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Contact"  smooth={true}  duration={500} >
          Contact
         </Link></li>
      </ul>

      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={'https://www.linkedin.com/in/temiloluwa-alamutu-522645225'}
            >
              Linkedin <LinkedInIcon size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={'https://github.com/Thegirltemi'}
            >
              Github <GitHubIcon size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={'https://www.twitter.com/thegirltemi'}
            >
              Twitter <TwitterIcon size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;