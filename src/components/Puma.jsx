import styled from "styled-components";

const Puma = [
    {
      id: 1,
      url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 2,
      url: "https://m.media-amazon.com/images/I/61HDBBzbCGL._UY575_.jpg" ,
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 3,
      url: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/medias/sys_master/root/h22/h90/14240663928862/-473Wx593H-460485151-white-MODEL.jpg",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 5,
      url: "https://m.media-amazon.com/images/I/7189bcbFMTS._UX695_.jpg",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 6,
      url: "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-landing-pages/puma/2022/bts/deluxe_story2.png",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 7,
      url: "https://cdn.gintaa.com/offers/image/20221102/4holrhLnZjn7Ae0Jdv14Fb/thumbs/6vXSQ1fls37afXK56rKRGo_imagecropper1667396030424_400x400.jpg",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 8,
      url: "https://images.puma.net/images/376540/01/sv01/fnd/ARE/",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 9,
      url: "https://cdn.about.puma.com/-/media/images/newsroom/brand-product-news/2018/2018-12-10-puma-reissues-the-rs-computer-shoe/open-graph-rs-computer.jpg?rev=0ac37a6637514537941ed4494848109e",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 10,
      url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/373108/72/sv01/fnd/EEA/fmt/png/X-Ray-2-Square-Trainers",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
    {
      id: 11,
      url: "https://cdn.shopify.com/s/files/1/0518/2249/3850/products/193249_01_sv01.jpg?v=1615887932",
      title: "Puma",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Color-PUMA-Logo.jpg",
    },
  ];
  const  PumaContent = () => {
    return (
      <div>
        <List>
          {Puma.map((item) => (
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
  
  export default PumaContent;
   
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
  background-position: center;
  `
  const Logo = styled.img`
  width: 100px;
  height: 50px;
  object-fit: cover;

  `