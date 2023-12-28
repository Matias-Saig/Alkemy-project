import Navbar from "./Nabvar/Navbar";

function Header() {
  return (
    <div className="header">
        <h1 className="header__title"> ShopCart </h1>
      <img
        className="header__img"
        src="../../../public/img/Header/store-4156934_1280.png"
        alt="background"
      />

      <Navbar />
    </div>
  );
}

export default Header;
