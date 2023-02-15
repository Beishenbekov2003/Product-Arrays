import styled from "styled-components";

const Lining = [
    {
      id: 1,
      url: "https://softech.kg/image/catalog/Products/Odejda/Obuv/Li-ning/%20ARHQ137-1/etrfd.jpg",
      title: "LI-NING",
     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 2,
      url: "https://img5.lalafo.com/i/posters/original/7d/5b/5d/142e4764dba8e8b93a94d60c83.jpeg" ,
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 3,
      url: "https://cdn.bazar.kg/bazar/images/c/f/5/cf5feb4e60159f1229e08d42e99b7aa3_640x480.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 4,
      url: "https://cdn.bazar.kg/bazar/images/a/7/f/a7fc16f46227559f383d4683751b8b00_640x480.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 5,
      url: "https://softech.kg/image/cache/377828cc08d4d00a7f697bd443326966.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 6,
      url: "https://lining.center/upload/iblock/4ce/4cef1d137a5e659c12ef30d08e914de6.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 7,
      url: "https://re.kg/image/e8944d29-1089-404a-815f-2c8697346ed3/700/500/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-adidas-li-ning-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-%D0%B2-%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8-%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7?set=False&path=000000000142658%2Fe8944d29-1089-404a-815f-2c8697346ed3.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 8,
      url: "https://ae04.alicdn.com/kf/S9a737d8310c14c42974e51cac5bb7253t.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 9,
      url: "https://ae04.alicdn.com/kf/S1862c930c5004704a7e0dff5c3fca728x.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 10,
      url: "https://mcmag.ru/wp-content/uploads/2020/02/li-ning-%E2%80%94-sdelano-v-kitae-07-molodezhnyj-czentr-mcmag.ru_.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
    },
    {
      id: 11,
      url: "https://shopsycdn.com/i/p/c1/54/c154008e80ca3e975ac568990fab4ec8_medium.jpg",
      title: "LI-NING",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Li-Ning_logo.svg/1280px-Li-Ning_logo.svg.png",
  
    },
  ];
  const  LiningContent = () => {
    return (
      <div>
        <List>
          {Lining.map((item) => (
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
  
  export default LiningContent;
   
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
  object-fit: cover;

  `