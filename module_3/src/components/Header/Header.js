import './Header.scss';
import image from './../../assets/img/header-back.jpg'
import Search from '../Search';
import Button from '../Button'
import Logo from '../Logo';
import FilmsCounter from '../FilmsCounter';

function Header() {
  return (
    <header className="header">
      <div className="background">
        <img className="background__img" src={image} alt=""/>
        <div className="background__img-blur"></div>
      </div>
      <div className="logo-and-button">
        <Logo></Logo>
        <Button className="header__add-movie-btn" action={'+ Add Movie'}></Button>
      </div>
      <h1 className="header__main-header">Find Your Movie</h1>
      <div className="header__top-container">
        <Search></Search>
        <Button action={'Search'}></Button>
      </div>
    </header>
  );
}

export default Header;