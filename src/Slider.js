import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1592:{items:4},
};
const items = [
    <div className="item" data-value="1"><img src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-men-SuperNighwear-Static-1647268908.jpg" alt='img1'/></div>,
    <div className="item" data-value="2"><img src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-men-Notsobasic-1647326604.jpg" alt='img2'/></div>,
    <div className="item" data-value="3"><img src="https://images.bewakoof.com/uploads/grid/app/holi-1-x1-live-now-men-1647333867.jpg" alt='img3' /></div>,
    <div className="item" data-value="4"><img src="https://images.bewakoof.com/uploads/grid/app/holi-1-x1-live-now-men-1647333867.jpg" alt='img3' /></div>,
];
const Slider = () => {
    // infiniteLoop useKeyboardArrows autoPlay
    return ( 
        <div className='alice-carousel'>
            <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        controlsStrategy="alternate"
    />
    </div>
    
     );
}
 
export default Slider;
