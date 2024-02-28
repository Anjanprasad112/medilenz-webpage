import jsonData from './carouselData.json';
import CarouselMain from './page'
const main = () => {
  return (
    <div className='mt-3'>
    <h2 className='text-center mb-3' style={{fontSize:'32px'}}>What our clients says about us</h2>
    <CarouselMain data = {jsonData}/>
    {/* <Testimonials/> */}
    </div>
  )
}

export default main