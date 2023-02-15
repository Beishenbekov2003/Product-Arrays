import styled from "styled-components";

const Adidas = [
    {
      id: 1,
      url: "https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/5e/1a/5e1a8fbf-0652-409b-9478-260f23b866f0/09-11-2022-adidas-q3-results-press-release.jpg__800x900_q85_crop-smart_subsampling-2.jpg",
      title: "Adidas",
     logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 2,
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Forum_Mid_Shoes_White_FY4976_01_standard.jpg" ,
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 3,
      url: "https://sneakers.by/image/cache/catalog/sneakers-pics/14624/krossovki-adidas-forum-low-fy7757-1-1000x800.jpg",
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 4,
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Running_Shoes_Black_GX6632_01_standard.jpg",
      title: "Adidas",
     logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 5,
      url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/508d2737737f40bbbd66ac5a0160e0e8_9366/samba-vegan-shoes.jpg",
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 6,
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/dd5856ece5894f9987e9ae890026a723_9366/Forum_Low_CL_Shoes_White_HQ6874_01_standard.jpg",
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 7,
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/00097f2522784e6d96b0aba400aa87a1_9366/Daily_3.0_Shoes_Grey_FW3270_01_standard.jpg",
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 8,
      url: "https://sneakerfreak.ru/wp-content/uploads/2021/07/adidas-4D-Cush-1-scaled.jpg",
      title: "Adidas",
     logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 9,
      url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75aee7eb0fc343d484c9adf30019d225_9366/Forum_Low_Shoes_White_GY8556_01_standard.jpg",
      title: "Adidas",
     logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 10,
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/75c1a102b42c46bd8fe9ae8401529982_9366/Ultraboost_1.0_Miami_White_HQ5884_01_standard.jpg",
      title: "Adidas",
      logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 11,
      url: "https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/35/20/3520ae6c-e251-4bd3-b44d-92bc37da4994/2021-07-30_q2_title_pic_v01.jpg__800x900_q85_crop-smart_subsampling-2.jpg",
      title: "Adidas",
     logo: "https://cdn.dribbble.com/users/4532782/screenshots/16020991/media/535537c4e49fd218ab8991b5ed9e03f2.jpg?compress=1&resize=400x300&vertical=top",
  
    },
  ];
  const  AdidasContent = () => {
    return (
      <div>
        <List>
          {Adidas.map((item) => (
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
  
  export default AdidasContent;
   
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