import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();

  return (
    <div className="container header">
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src="images/buzzer-logo.svg" alt="Logo" />
        </div>
        <div className="shopping-cart">
          <Link href="/"><a className={`link${router.pathname == "/" ? " link-active":""}`}>Orders</a></Link>
          <Link href="/menu"><a className={`link${router.pathname == "/menu" ? " link-active":""}`}>Menu</a></Link>
        </div>
      </div>
      <div className="restaurant">
        <div className="restaurant-info">
          <h1>650 Cafe</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from, Contrary to popular belief,
            random text.
          </p>
        </div>
        <div className="restaurant-logo">
            <img src="images/caffe-logo.svg" alt="Restaurant logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
