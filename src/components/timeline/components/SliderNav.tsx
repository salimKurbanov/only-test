const SliderNav = ({ list, activeIndex, sliderRef }) => {
    return (
        <div className="slider_pagination">
            {list.map((_, i) => (
                <button
                    key={i}
                    className={`${i === activeIndex ? 'active' : ''}`}
                    onClick={() => {
                        const swiperEl = sliderRef.current?.querySelector('.swiper') as any
                        swiperEl.swiper.slideTo(i)
                    }}
                />
            ))}
        </div>
    );
};

export default SliderNav;