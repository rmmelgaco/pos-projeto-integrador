import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type ImageProps = {
    src: string,
    alt: string
}

const ImageWithSkeleton = ({ src, alt }: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className="w-full h-64 mb-4">
            {!isLoaded && <Skeleton height={256} />}
            <img
                src={src}
                alt={alt}
                className={`w-full h-64 object-cover ${isLoaded ? 'block' : 'hidden'}`}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default ImageWithSkeleton;
