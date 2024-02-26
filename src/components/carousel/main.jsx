import jsonData from './carouselData.json';
import CarouselMain from './page'
const main = () => {
  return (
    <div className='mt-5'>
    <h3 className='text-center'>What our clients says about us</h3>
    <CarouselMain data = {jsonData}/>
    {/* <Testimonials/> */}
    </div>
  )
}

export default main