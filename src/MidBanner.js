import { Link } from "react-router-dom";

function MidBanner() {
  const path = process.env.PUBLIC_URL;
  return (
    <article
      style={{
        width: "100%",
        height: 450,
        background: `url(${path + "/images/banner.jpg"}) no-repeat 50% / cover`,
        padding: 130,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: 35,
          fontWeight: 500,
        }}
      >
        미광디자인이 당신의 미래를 응원합니다.
      </h2>
      <Link to="*"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          boxSizing: "border-box",
          width: 150,
          padding: "15px 5px",
          textDecoration: "none",
          color: "#fff",
          fontSize: 17,
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "5px",
        }}
      >
        상담하기
      </Link>
    </article>
  );
}

export default MidBanner;
