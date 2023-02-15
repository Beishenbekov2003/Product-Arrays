import styled from "styled-components";

const TheNorthFace = [
    {
      id: 1,
      url: "https://u7q2x7c9.stackpathcdn.com/photos/23/79/359447_18168_XL.jpg",
      title: "The North Face",
     logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 2,
      url: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A4T2W_KZ2_hero?wid=780&hei=906&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0" ,
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 3,
      url: "https://www.highsnobiety.com/static-assets/thumbor/DSRHHrjEGs4WyorilvCowE2hoNY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/05/03150929/the-north-face-stc-drop-2-release-date-price-02.jpg",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 4,
      url: "https://cdn-images.farfetch-contents.com/18/17/71/65/18177165_38981149_600.jpg",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 5,
      url: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A8184_9ZM_hero?hei=650&wid=555&qlt=50&resMode=sharp2&op_sum=0.9,1.0,8,0",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 6,
      url: "https://cdn.shopify.com/s/files/1/0555/9015/8419/products/NF0A52Q2_4S5_hero_2048x2048.jpg?v=1654706778",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 7,
      url: "https://www.bfgcdn.com/1500_1500_90/024-0891/the-north-face-larimer-mid-wp-sneakers-detail-3.jpg",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 8,
      url: "https://believeintherun.com/wp-content/uploads/2022/12/the-north-face-summit-vectiv-pro.jpeg",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 9,
      url: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A5JCX_4AB_hero?hei=650&wid=555&qlt=50&resMode=sharp2&op_sum=0.9,1.0,8,0",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 10,
      url: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A7W51_KX9_hero?hei=650&wid=555&qlt=50&resMode=sharp2&op_sum=0.9,1.0,8,0",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
    {
      id: 11,
      url: "https://img.giglio.com/images/prodZoom/D46368.005_2.jpg",
      title: "The North Face",
      logo: "https://9to5toys.com/wp-content/uploads/sites/5/2021/05/Backcountry-Memorial-Day-Sale.jpg?w=936",
    },
  ];
  const  TheNorthFaceContent = () => {
    return (
      <div>
        <List>
          {TheNorthFace.map((item) => (
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
  
  export default TheNorthFaceContent;
   
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