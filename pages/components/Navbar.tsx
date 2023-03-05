import Link from "next/link";
import style from "../../styles/Navbar.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Navbar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.logo}>
            <Link href="/">
              <img src="./assets/logo.svg" alt="" />
            </Link>
          </div>
          <div className={style.navLinks}>
            <Link href="/">
              <span>services</span>
            </Link>
            <Link href="/">
              <span>work</span>
            </Link>
            <Link href="/">
              <span>notes</span>
            </Link>
            <Link href="/">
              <span>experience</span>
            </Link>
          </div>
          <div className={style.contact}>
            <span>+001 (313) 345 678</span>
            <div className={style.icon}>
              <LocalPhoneOutlinedIcon sx={{ color: "#25847e" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
