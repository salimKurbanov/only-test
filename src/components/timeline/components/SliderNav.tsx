const SliderNav = ({ list, activeIndex, sliderRef, setActiveIndex }) => {
    return (
        <div className="slider_pagination">
            {list.map((_, i) => (
                <button
                    key={i}
                    className={`${i === activeIndex ? 'active' : ''}`}
                    onClick={() => {
                        const swiperEl = sliderRef.current?.querySelector('.swiper') as any
                        swiperEl.swiper.slideTo(i)
                        setActiveIndex(i)
                    }}
                />
            ))}
        </div>
    );
};

export default SliderNav;