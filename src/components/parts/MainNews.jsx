import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const MainNews = (props) => {
  const { style, data } = props;

  // RESPONSIVE
  const isMediumSize = useMediaQuery({
    query: "(max-device-width: 900px)",
  });

  const isSmallSize = useMediaQuery({
    query: "(max-device-width: 530px)",
  });

  const renderLittleNews = () => {
    //DESDE SEGUNDA NOTICIA A CUARTA
    const news = data.filter((x, idx) => idx >= 1 && idx <= 4);

    return news.map((x, idx) => (
      <Link
        key={idx}
        style={{
          ...styles.littleNewsContainer,
          ...(isMediumSize && {
            width: "50%",
            height: 200,
          }),
          ...(isSmallSize && {
            width: "100%",
            height: 150,
          }),
        }}
        to={`news/${x.uuid}`}
      >
        <span style={{ ...styles.title, ...{ fontSize: 16 } }}>
          {x.title.substr(0, 50)}...
        </span>
        <img
          style={styles.littleImgContainer}
          src={x.thread.main_image}
          alt={"News"}
        />
      </Link>
    ));
  };

  return (
    <div
      style={{
        ...styles.container,
        ...style,
        ...(isMediumSize && { flexDirection: "column" }),
      }}
    >
      {/*PRIMER NOTICIA*/}
      <Link
        to={`news/${data[0].uuid}`}
        style={{
          ...styles.newsContainer,
          ...(isMediumSize && {
            width: "100%",
            height: 300,
          }),
        }}
      >
        <img
          style={styles.bigNewsImg}
          src={data[0].thread.main_image}
          alt={"News"}
        />
        <span style={{ ...styles.title, ...{ fontSize: 18 } }}>
          {data[0].title}
        </span>
      </Link>
      <div
        style={{
          ...{ padding: 1 },
          ...styles.newsContainer,
          ...(isMediumSize && {
            width: "100%",
            height: "auto",
          }),
        }}
      >
        {renderLittleNews()}
      </div>
    </div>
  );
};

MainNews.propTypes = {
  style: PropTypes.any,
  data: PropTypes.array,
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    /*height: 400*/
  },
  newsContainer: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    width: "50%",
    height: 400,
    overflow: "hidden",
  },
  bigNewsImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  littleNewsContainer: {
    position: "relative",
    padding: 1,
    width: "50%",
    height: "50%",
    overflow: "hidden",
  },
  littleImgContainer: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
    color: "white",
    backgroundColor: "rgba(0,0,0,.5)",
  },
};

export default MainNews;
