interface ICircleProps {
    number: number
}

const Circle = ({ number }: ICircleProps) => {
    const RADIUS = 265;
    const points = Array.from({ length: number }, (_, i) => i);

    const renderPoints = (): React.ReactNode => {
        return points.map((_, i) => {
            const angle = (2 * Math.PI / number) * i;
            const x = RADIUS * Math.cos(angle);
            const y = RADIUS * Math.sin(angle);

            return (
                <div
                    className="point_wrapper"
                    key={i}
                    style={{
                        position: 'absolute',
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                >
                    <div className="point"/>
                    <span>{i + 1}</span>
                </div>
            );
        });
    }

    return (
        <div className="circle">{renderPoints()}</div>
    );
};

export default Circle;