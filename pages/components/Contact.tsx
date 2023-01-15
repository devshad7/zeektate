import Link from "next/link";
import style from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.left}>
          <h1>
            Let&apos;s make somthing
            <br />
            amazing together
          </h1>
          <h2>
            Start by{" "}
            <a href="mailto:abc@gmail.com" target="_blank" rel="noreferrer">
              saying hi
            </a>
          </h2>
        </div>
        <div className={style.right}>
          <div className={style.text}>
            <h2>Information</h2>
            <p>145 New York, PL 5467, USA</p>
            <div className={style.links}>
              <div>
                <Link href="/">
                  <span>services</span>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <span>works</span>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <span>notes</span>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <span>experience</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
