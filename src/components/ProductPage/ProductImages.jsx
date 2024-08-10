import { useState, useEffect } from 'react';

export default function ProductImages({ images, thumbnail, title }) {
    let [imgCont, setImgCont] = useState(thumbnail);

    useEffect(() => {
        setImgCont(thumbnail);
    }, [thumbnail]);

  return (
    <>
    <ul className="flex order-1 lg:order-none lg:flex-col gap-2 *:bg-cover *:size-16 lg:*:size-20 *:bg-center *:bg-no-repeat cursor-pointer">
        {images.map((image) => {
            return (
            <li
                key={image}
                onClick={() => setImgCont(image)}
                className={`border flex items-center justify-center hover:border-stone-950 hover:bg-stone-100 ${
                imgCont === image ? "border-stone-950 bg-stone-100" : ""
                }`}
            >
                <img className="w-12 max-h-full" src={image} alt="" />
            </li>
            );
        })}
    </ul>

    <div className="lg:self-start flex flex-grow justify-center object-contain items-center max-w-full lg:w-[550px] min-h-[350px] lg:h-[700px]">
        <img
        className="w-[250px] md:w-[350px] lg:w-[400px] max-h-full"
        src={imgCont}
        alt={title}
        />
    </div>
    </>

  )
}
