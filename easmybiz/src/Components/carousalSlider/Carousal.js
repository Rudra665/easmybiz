import Carousel from 'react-bootstrap/Carousel';
import c3 from "../../Assets/images/c3.jpg"
import c1 from "../../Assets/images/c1.jpg"
import c2 from "../../Assets/images/c2.jpg"
import Box  from '@mui/material/Box';
function Carousal() {
  return (
    <Carousel slide>
      <Carousel.Item interval={1500} >
        <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
          height="500vh"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={c2}
          alt="Second slide"
          height="500vh"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
          height="500vh"
        />
        
      </Carousel.Item>      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          src={c1}
          alt="Third slide"
          height="500vh"
        />
        
      </Carousel.Item>
     
      
    </Carousel>
  );
}

export default Carousal;