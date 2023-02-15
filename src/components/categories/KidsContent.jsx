import styled from "styled-components";

const KidsSneakers = [
  {
    id: 1,
    url: "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwf0a7dc8f/images/page-designer/2022/july/13987_Comp_J_Image.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 2,
    url: "https://www.famousfootwear.com/blob/product-images/20000/59/06/6/59066_pair_large.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 3,
    url: "https://m.media-amazon.com/images/I/81y4bjgImfL._AC_UF1000,1000_QL80_.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 4,
    url: "https://s7d4.scene7.com/is/image/WolverineWorldWide/SAUK-SL165121-JazzLite2-072320-AW21-03?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 5,
    url: "https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2022%2F10%2Fkids-sneaker-roundup-nike-air-jordan-adidas-reebok-1.jpg?w=1600&cbr=1&q=90&fit=max",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 6,
    url: "https://cdn.shopify.com/s/files/1/0002/0647/1226/products/footwear-star-girl-glitter-sneakers-lola-the-boys-28603559444582_2000x.jpg?v=1666468358",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 7,
    url: "https://www.famousfootwear.com/blob/product-images/20000/39/89/6/39896_pair_large.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 8,
    url: "https://www.parents.com/thmb/Qc5oMK_n986488wE0SuyYJfA1cw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kids-weekend-glacier-blue-2000-15f213c144fb4c1bb86fe4612ab91df8.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 9,
    url: "https://www.californian.co.za/wp-content/uploads/2022/10/K1219-PUMA-WHITE-INTENSE-RED-RED-BLUE-X-RAY-2-SQUARE-AC-INF.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 10,
    url: "https://cdn.shopify.com/s/files/1/0063/4680/1237/products/Bathu275_1_800x.jpg?v=1666358956",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
];

const KidsContent = () => {
  return (
    <div>
      <List>
        {KidsSneakers.map((item) => (
          <ListItem key={item.id}>
            <StyledImage src={item.url} alt="product" />
            <h4>{item.description}</h4>
            <p>{item.price}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default KidsContent;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  padding: 15px;
  margin-top: 40px;
  margin-left: 30px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 7);

  h4 {
    color: black;
    font-size: 30px;
    font-weight: 900;
  }
  p {
    font-size: 20px;
    color: black;
  }
`;

const StyledImage = styled.img`
  border-radius: 20px;
  width: 390px;
  height: 50%;
  background-position: center;
  object-fit: cover;
  background-position: center;
`;
