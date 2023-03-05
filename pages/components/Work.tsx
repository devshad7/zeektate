import Link from "next/link";
import style from "../../styles/Work.module.css";

const Work = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.titleDiv}>
            <div className={style.title}>
              <h1>My Latest Works</h1>
              <p>Perfect solution for digital experience.</p>
            </div>
            <Link href="/">
              <span>Explore More Works</span>
            </Link>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <div className={style.text}>
                <h2>App Design</h2>
                <p>Food Delivery App</p>
              </div>
              <Link href="/">
                <img src="./assets/app.webp" alt="" />
              </Link>
            </div>
            <div className={style.card}>
              <div className={style.text}>
                <h2>App Design</h2>
                <p>Food Delivery App</p>
              </div>
              <Link href="/">
                <img src="./assets/web.jpg" alt="" />
              </Link>
            </div>
            <div className={style.card}>
              <div className={style.text}>
                <h2>App Design</h2>
                <p>Food Delivery App</p>
              </div>
              <Link href="/">
                <img src="./assets/brand.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
