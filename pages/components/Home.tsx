import Link from "next/link";
import style from "../../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.leftContent}>
          <h1>
            Hey There,
            <br />
            I&apos;m Zeek
          </h1>
          <div className={style.con}>
            <Link href="mailto:zeek@gmail.com">
              <span>zeek@gmail.com</span>
            </Link>
          </div>
          <div className={style.exp}>
            <h2>10</h2>
            <p>
              Year
              <br />
              Experience
            </p>
          </div>
        </div>
        <div className={style.both}>
          <img src="./assets/admin.png" alt="" />
          <div className={style.rightContent}>
            <p>I design beautifully simple things, And I love what I do</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
