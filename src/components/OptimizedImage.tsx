import React, { useState } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';

interface OptimizedImageProps extends HTMLMotionProps<"img"> {
    containerClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    containerClassName = "",
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {/* Shimmer/Placeholder */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-muted animate-pulse z-10"
                    />
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 1.05
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onLoad={() => setIsLoaded(true)}
                className={`${className} ${!isLoaded ? 'invisible' : 'visible'}`}
                loading="lazy"
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;
