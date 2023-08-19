import React, { FC } from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
import { arrowDownLottie, sheepLottie } from "./constants";

const strings = ["健健身。", "看看书。", "拍拍照。", "打打游戏。"];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const sheepLottieRef = useLottie(sheepLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>
            我是 <span className={styles.name}>HSH</span>🧑‍💻，
          </p>
          <p>
            一个<span className={styles.fontend}>前端开发工程师</span>，
          </p>
          <p>
            用 <span className={styles.technologyStack}>Vue/React</span> 的，
          </p>
          <p>
            现居<span className={styles.shenzhen}>深圳</span> 🏙️，
          </p>
          <p>
            偶尔
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={sheepLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
