import style from '../../styles/MobileNav.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const MobileNav = () => {
  return (
    <>
        <div className={style.main}>
            <div className={style.logo}>
                <img src="./assets/logo.svg" alt="" />
            </div>
            <div className={style.menu}>
                <MenuIcon sx={{ fontSize: '28px' }} />
            </div>
        </div>
        <div className={style.divider}></div>
    </>
  )
}

export default MobileNav