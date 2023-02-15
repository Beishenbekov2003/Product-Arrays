import styled from "styled-components";

const Kappa = [
  {
    id: 1,
    url: "https://i.ebayimg.com/images/g/Hj4AAOSwNwhcqM5d/s-l1600.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 2,
    url: "http://cdn.shopify.com/s/files/1/2447/5525/products/KAPPA_FOOTWEAR_REDONE_13_1200x630.jpg?v=1649888001",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 3,
    url: "https://www.tradeinn.com/f/13854/138542946/kappa-lineup-low-trainers.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 4,
    url: "https://www.tradeinn.com/f/13900/139006724_3/kappa-3030000-trainers.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 5,
    url: "https://www.kappasa.co.za/wp-content/uploads/cistech/Prod_3112H5W-A1H_35-59501.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 6,
    url: "https://img01.ztat.net/article/spp-media-p1/ad41c419c2c0324ab0aaea064f476e81/bd51046c0d1147f7a6e70007487899f0.jpg?imwidth=762",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 7,
    url: "https://cdn.aboutstatic.com/file/images/ed7700fd44d740370e5009a62a7c3902.png?bg=F4F4F5&quality=75&trim=1&height=480&width=360",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 8,
    url: "https://img01.ztat.net/article/spp-media-p1/cb81b81e21fd491687c1bc4184ac43ef/cb532f790ca44ccd94ded5b798386a00.jpg?imwidth=1800&filter=packshot",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 9,
    url: "https://www.footgear.co.za/wp-content/uploads/2022/07/gallery-XKML0174113-2.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 10,
    url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51zVPMqGJIL._AC_UY500_.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
  {
    id: 11,
    url: "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/1/01_0000209878783_is.jpg",
    title: "Kappa",
    logo: "https://cdn.shopify.com/s/files/1/1244/5002/files/checkout_logo_3.png?height=628&pad_color=fff&v=1613542460&width=1200",
  },
];
const KappaContent = () => {
  return (
    <div>
      <List>
        {Kappa.map((item) => (
          <ListItem key={item.id}>
            <StyledImage src={item.url} alt="product" />
            <Container>
              <h4>{item.title}</h4>
              <Logo src={item.logo} alt="product" />
            </Container>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default KappaContent;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
`;
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
  height: 400px;
  padding: 15px;
  margin-top: 40px;
  margin-left: 30px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 7);

  h4 {
    color: black;
    font-size: 30px;
    font-weight: 900;
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
const Logo = styled.img`
  width: 100px;
  height: 50px;
  object-fit: cover;
`;
