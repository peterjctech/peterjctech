import React, { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

interface CarouselProps {
    screenshots: { image: string; caption: string }[];
    closeCarousel: () => void;
}

const Carousel = ({ screenshots, closeCarousel }: CarouselProps) => {
    const [transition, setTransition] = useState("");
    const [index, setIndex] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).id === "carousel") closeCarousel();
    };

    const beginTransition = (isNext: boolean) => {
        if (transition) return;
        const data = {
            class: "",
            isPartial: false,
        };

        if (isNext) {
            if (screenshots[index + 1]) {
                data.class = "next";
            } else {
                data.class = "next-partial";
                data.isPartial = true;
            }
        } else {
            if (screenshots[index - 1]) {
                data.class = "prev";
            } else {
                data.class = "prev-partial";
                data.isPartial = true;
            }
        }
        setTransition(data.class);

        setTimeout(() => {
            if (!data.isPartial) setIndex(isNext ? index + 1 : index - 1);
            setTransition("");
        }, 500);
    };

    return (
        <div id="carousel" onClick={handleClick} className={`carousel ${transition}`}>
            {screenshots[index - 2] && (
                <img src={screenshots[index - 2].image} className="carousel__1 carousel__image" />
            )}
            {screenshots[index - 1] && (
                <img src={screenshots[index - 1].image} className="carousel__3 carousel__image" />
            )}
            <img src={screenshots[index].image} className="carousel__5 carousel__image" />
            {screenshots[index + 1] && (
                <img src={screenshots[index + 1].image} className="carousel__7 carousel__image" />
            )}
            {screenshots[index + 2] && (
                <img src={screenshots[index + 2].image} className="carousel__9 carousel__image" />
            )}
            <GrCaretPrevious
                onClick={() => beginTransition(false)}
                className={` carousel__prev-icon carousel__icon ${!screenshots[index - 1] && "disabled"}`}
            />
            <GrCaretNext
                onClick={() => beginTransition(true)}
                className={` carousel__next-icon carousel__icon ${!screenshots[index + 1] && "disabled"}`}
            />
        </div>
    );
};

export default Carousel;
