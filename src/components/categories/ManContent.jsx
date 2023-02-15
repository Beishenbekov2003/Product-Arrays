import styled from "styled-components";

const MaleSneakers = [
  {
    id: 1,
    url: "https://m.media-amazon.com/images/I/41HbWgKCEeL._UX500_.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3084,w_4626,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1123158938_uvcada.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 3,
    url: "https://www.mrporter.com/cms/ycm/resource/blob/23521304/da26ece8858aaad51c9882887888f15d/classic-data.jpg?imwidth=800&improfile=isc",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 4,
    url: "https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-NothingNew-LowTop-Grey-031122-3.4_grande.jpg?v=1647969087",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 5,
    url: "https://i.insider.com/626ac3bfc8c8ac001940ebf9?width=1000&format=jpeg&auto=webp",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 6,
    url: "https://assets.ajio.com/medias/sys_master/root/20220813/nx91/62f6daaaf997dd03e248ca42/-288Wx360H-463631434-grey-MODEL.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 7,
    url: "https://m.media-amazon.com/images/I/418xma8DhVL._UL1000_.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 8,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnuyJGDZZP9lbtyWz_YW7pOQzLIkUYdjtnA&usqp=CAU",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 9,
    url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4860a9794054130bfffad1e0025d699_9366/kaptir-2.0-shoes.jpg",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 10,
    url: "https://images.dsw.com/is/image/DSWShoes/514591_078_ss_01?impolicy=colpg&imwidth=400&imdensity=1",

    description: "People who viewed this item also viewed",
    price: 1234,
  },
];

const MaleContent = () => {
  return (
    <div>
      <List>
        {MaleSneakers.map((item) => (
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

export default MaleContent;

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
