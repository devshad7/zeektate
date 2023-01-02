import Link from "next/link";
import style from "../../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.leftSide}>
          <div className={style.mainDiv}>
            <div className={style.icon} style={{ background: "#00746e" }}>
                <img src="./assets/desktop.svg" alt="" />
            </div>
            <div className={style.title}>
              <h2>Website Design</h2>
              <span>76 Projects</span>
            </div>
          </div>

          <div className={style.mainDiv}>
            <div className={style.icon} style={{ background: "#efcc3a" }}>
                <img src="./assets/mobile-screen.svg" alt="" />
            </div>
            <div className={style.title}>
              <h2>Mobile App Design</h2>
              <span>76 Projects</span>
            </div>
          </div>

          <div className={style.mainDiv}>
            <div className={style.icon} style={{ background: "#ff5027" }}>
                <img src="./assets/code-branch.svg" alt="" />
            </div>
            <div className={style.title}>
              <h2>Identity Design</h2>
              <span>76 Projects</span>
            </div>
          </div>
        </div>

        <div className={style.rightSide}>
          <h1>What do I help?</h1>
          <p>
            I will help you with finging a solution and solve<br />your problems. We
            use process design to create digital<br />products. Besides that also
            help their business.
          </p>
          <p>
            We use process design to create digital products.<br />Besides that aslo
            help their business.
          </p>
          <div className={style.client}>
            <div className={style.comp}>
              <h2>285+</h2>
              <span>Project Completed</span>
            </div>
            <div className={style.happy}>
              <h2>190+</h2>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
