import logo from '../../assets/image.png'
import {Link} from 'react-router-dom'
import { HiOutlineSearch } from "react-icons/hi";
import "./Header.css";

export const Header = () => {
  return (
    <>
     <nav className="header">
     <img src={logo} alt="logo"/>
      <div>
        <Link to="/toShows">Tv Shows</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/recently">Recently Added</Link>
        <Link to="/List">My List</Link>
      </div>
      <span>
        <HiOutlineSearch/>
      </span>
    </nav>
    </>
   
  )
}

