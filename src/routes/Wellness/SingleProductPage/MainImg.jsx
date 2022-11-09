import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainImg(){
    // 'horizontal', 'vertical
return <div height="100px" ><Carousel  height="100px" >
<div >
    <img width={"50px"} height="50px" src="https://www.netmeds.com/images/product-v1/600x600/951201/natures_essence_acne_magic_clear_skin_gel_face_wash_100_ml_0_0.jpg" />
    {/* <p className="legend">Legend 1</p> */}
</div>
<div>
    <img width={"50px"} height="50px" src="https://www.netmeds.com/images/product-v1/600x600/951201/natures_essence_acne_magic_clear_skin_gel_face_wash_100_ml_1_0.jpg" />
    {/* <p className="legend">Legend 2</p> */}
</div>
<div>
    <img width={"50px"} height="50px" src="https://www.netmeds.com/images/product-v1/150x150/951201/natures_essence_acne_magic_clear_skin_gel_face_wash_100_ml_2_0.jpg" />
    {/* <p className="legend">Legend 3</p> */}
</div>
</Carousel></div>

}

