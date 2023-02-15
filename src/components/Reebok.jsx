import styled from "styled-components";

const Reebok = [
    {
      id: 1,
      url: "https://inter-sport.s3.amazonaws.com/products/GY0955/core%20black_core%20bl/GY0955-1_resized_400X400.png",
      title: "Reebok",
     logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 2,
      url: "https://statics.boyner.com.tr/mnresize/900/1254/productimages/5002918726_305_01.jpg " ,
      title: "Reebok",
     logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 3,
      url: "https://img5.lalafo.com/i/posters/original/ba/94/8b/b6e53e84002a7e8b04cb3eb668.jpeg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 4,
      url: "https://reebok.kiev.ua/files/product-photos/sku-fy0813_6.jpg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 5,
      url: "https://sneakers.by/image/cache/catalog/sneakers-pics/18723/krossovki-reebok-classic-nylon-fv1592-1-1000x800.jpg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 6,
      url: "https://avatars.mds.yandex.net/get-mpic/5240148/img_id7086195273675880623.jpeg/orig",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 7,
      url: "https://images.prom.ua/3781659470_w444_h473_krossovki-reebok-classic.jpg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpDdmaf4Kt9-8P4vRWeBiOHKQHm0--b26jw&usqp=CAU",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 9,
      url: "https://www.спортдлявсех.рус/1848-medium_default/krossovki-reebok-classic-cl-lthr-black.jpg",
      title: "Reebok",
     logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 10,
      url: "https://reebok.kiev.ua/files/product-photos/sku-gw7749_0.jpg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
    },
    {
      id: 11,
      url: "https://reebok.kiev.ua/files/product-photos/sku-ef9144_0.jpg",
      title: "Reebok",
      logo: "https://www.seekpng.com/png/detail/76-763660_reebok-logo-design-vector-reebok.png",
  
    },
  ];
  const  ReebokContent = () => {
    return (
      <div>
        <List>
          {Reebok.map((item) => (
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
  
  export default ReebokContent;
   
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