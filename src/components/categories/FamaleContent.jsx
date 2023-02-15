import styled from "styled-components";

const FamaleSneakers = [
  {
    id: 1,
    url: "https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0872/3376/products/otbt-201-alstead-dove-gre7-social-02.jpg?v=1626960030",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 3,
    url: "https://m.media-amazon.com/images/I/71dsmh1-tAL._AC._SR360,460.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 4,
    url: "https://pyxis.nymag.com/v1/imgs/bc3/607/9bc84509969e2fa88b1fd5e45f21264574-13---.rsquare.w600.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 5,
    url: "https://m.media-amazon.com/images/I/51N3o5uQBIL._AC._SR360,460.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 6,
    url: "https://pyxis.nymag.com/v1/imgs/b6e/063/968e57c9c492dda0d7ba6fcda1c111e859-8----.rsquare.w600.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 7,
    url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19312894/2022/7/30/c4b9b60c-e83b-47d1-8033-291be7434fda1659171280101AfroJackWomenPinkColourblockedSneakers1.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 8,
    url: "https://www.colehaan.com/dw/image/v2/AALO_PRD/on/demandware.static/-/Sites-itemmaster_colehaan/default/dwf45d62ec/images/W28356/large/5ZG%20EMBROSTITCH%20RNNR_e_A_W28356.jpg?sw=510",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 9,
    url: "https://media.glamour.com/photos/62f582614e21956f282475ed/master/pass/best%20workout%20shoes%20for%20women.jpg",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
  {
    id: 10,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58a2737b-c2ff-45b2-bc00-8ad2e72cf5ad/zoom-superrep-4-next-nature-hiit-class-shoes-3wC06h.png",
    description: "People who viewed this item also viewed",
    price: 1234,
  },
];

const FameleContent = () => {
    return (
      <div>
        <List>
          {FamaleSneakers.map((item) => (
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
  
  export default FameleContent;
  
  
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
    p{
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
  
  