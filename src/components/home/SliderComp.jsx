import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    var settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
            <div className='!flex items-center bg-gray-100 px-4'>
                <div className=''>
                    <div className='text-6xl font-bold'>Her Adımda Tarzınızı Yansıtın!</div>
                    <div className='text-lg my-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum dignissimos dolores deserunt. Dolorum, voluptatibus optio amet accusamus, quos itaque natus sapiente, minima a ipsam facere? Aperiam deserunt aut deleniti!</div>
                    <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
                </div>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66832d0b-88d6-4cef-a37e-1aba97e56f02/court-vision-alta-ayakkab%C4%B1s%C4%B1-GvwX8r.png" alt="" />
            </div>
            <div className='!flex items-center bg-gray-100 px-4'>
                <div className=''>
                    <div className='text-6xl font-bold'>Her Adımda Tarzınızı Yansıtın!</div>
                    <div className='text-lg my-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum dignissimos dolores deserunt. Dolorum, voluptatibus optio amet accusamus, quos itaque natus sapiente, minima a ipsam facere? Aperiam deserunt aut deleniti!</div>
                    <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
                </div>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a5c590e-4ba6-4e6a-8a01-790a6c1535c7/legend-essential-3-next-nature-antrenman-ayakkab%C4%B1s%C4%B1-fZj9ZC.png" alt="" />
            </div>
        </Slider>
    </div>
  )
}

export default SliderComp