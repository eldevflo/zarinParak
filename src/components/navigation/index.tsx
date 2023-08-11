import Phone from "../UI/icons/Phone";
import Logo from "../UI/icons/Logo";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__phone">
        <Phone />
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <a href="/">صفحه اصلی</a>
        </li>
        <li className="nav__link">
          <a href="">درباره شرکت</a>
        </li>
        <li className="nav__link">
          <a href="">محصولات</a>
        </li>
        <li className="nav__link">
          <a href="">مقالات</a>
        </li>
        <li className="nav__link">
          <a href="">تماس با ما</a>
        </li>
      </ul>
      <div className="nav__logo">
        <Logo />
      </div>
    </nav>
  );
}

export default Navigation;
