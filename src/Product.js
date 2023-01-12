import styled from "styled-components";
import img01 from "./assets/images/product1.jpg";
import img02 from "./assets/images/product2.jpg";
import img03 from "./assets/images/product3.jpg";
import img04 from "./assets/images/product4.jpg";
import img05 from "./assets/images/product5.jpg";
import img06 from "./assets/images/product6.jpg";

const ItemList = [
  { id: 1, img: img01, text: "신제품2" },
  { id: 2, img: img02, text: "신제품" },
  { id: 3, img: img03, text: "제품6" },
  { id: 4, img: img04, text: "제품5" },
  { id: 5, img: img05, text: "제품4" },
  { id: 6, img: img06, text: "제품소개1" },
];

const ProductBox = styled.div`
  padding: 80px 0;
  width: 1200px;
  margin: 0 auto;
  h1 {
    text-align: center;
    letter-spacing: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    li {
      width: 400px;
      height: 402px;
      padding: 0 30px;
      p {
        text-align: center;
        font-size: 16px;
        padding: 7px 0 0;
        margin: 0;
      }
    }
  }
`;

function Product() {
  return (
    <ProductBox>
      <h1>PRODUCT</h1>
      <ul>
        {ItemList.map((item) => (
          <li key={item.id}>
            <a href="#">
              <img src={item.img} alt={item.text} />
              <p key={item.id}>{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </ProductBox>
  );
}

export default Product;
