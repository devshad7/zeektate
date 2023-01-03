import style from "../../styles/MobileNav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.logo}>
          <Link href="/">
            <img src="./assets/logo.svg" alt="" />
          </Link>
        </div>
        <div className={style.menu}>
          <MenuIcon sx={{ fontSize: "28px" }} />
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
};

export default MobileNav;
