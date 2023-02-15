import React from "react";
import styled from "styled-components";

/// jenskiy /// mufskoy ///detskiy /// brends - adidas nike puma lining ecco, {image logo title} 15 brend
const Nike = [
  {
    id: 1,
    url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/lddanijntooidcnakfzc/air-max-excee-mens-shoes-vl97pm.png",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 2,
    url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e7c969b-a36f-4d25-ae53-80ca724ea237/air-max-systm-shoes-wjnQSh.png" ,
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 3,
    url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/10ad9134-ca07-4002-9f64-03ff2bc90327/custom-nike-air-max-95-by-you.png" ,
    title: "Nike Air",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 4,
    url: "https://static.nike.com/a/images/t_default/a38773bb-9591-49e3-a233-bc098d5a773c/air-max-270-womens-shoes-Pgb94t.png",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 5,
    url: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/airli0aepmuyh9hxduns/nike-air-max-air-max-day.jpg",
    title: "Nike Air",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 6,
    url: "https://sneakernews.com/wp-content/uploads/2023/01/nike-air-max-90-black-university-blue-FJ4218-001-6.jpg",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 7,
    url: "https://media.kohlsimg.com/is/image/kohls/4228758_Black_Green_White?wid=600&hei=600&op_sharpen=1",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 8,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/602efea5-19bc-4f75-8cef-1cabb4abdde9/air-max-furyosa-shoes-5MgrrZ.png",
    title: "Nike Air",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 9,
    url: "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Air-Max-2021-XXXV-Mens-DH5135-001-8.jpg",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 10,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1U66rY6G0AGJWm2zkoIp2spqbCh4p8ruSQ&usqp=CAU",
    title: "Nike Air",
   logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  },
  {
    id: 11,
    url: "https://media.gq-magazine.co.uk/photos/633eab4246e9ddeb400c0d5e/master/pass/Nike-air-max.jpg",
    title: "Nike Air",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",

  },
];
const  NikeContent = () => {
  return (
    <div>
      <List>
        {Nike.map((item) => (
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

export default NikeContent;
 
const Container = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
align-items: center;
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
margin-left: 50px;
flex-wrap: wrap;
`
const ListItem = styled.li`
display: flex; 
flex-direction: column;
width: 400px;
height: 400px;
padding: 15px;
margin-top: 40px;
margin-left: 30px;
box-shadow: 1px 5px 5px rgba(0,0,0,7);


h4{
color: black;
font-size: 30px;
font-weight: 900;
}

`

const StyledImage = styled.img`
border-radius: 20px;
width: 390px;
height: 50%;
background-position: center;
object-fit: cover;
`
const Logo = styled.img`
width: 100px;
height: 50px;
`