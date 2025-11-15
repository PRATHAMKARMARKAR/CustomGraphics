
import { useRef, useState, useEffect } from "react";
import CustomGraphicsBorderText from "./CustomGraphicsBorderText";

export const ProjectCard = ({
    titleText = "Project Title",
    borderTextPosition = [],
    variant = "outline",
    className = "",
    showArrow = true,
    onClick = null
}) => {
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!cardRef.current) return
        const updateDimensions = () => {
            const rect = cardRef.current.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const baseClasses = "relative border-2 border-orange-500 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg";
    const variantClasses = variant === "filled" 
        ? "bg-orange-500 text-white"  : "bg-white text-orange-500";

        console.log("variant" ,variantClasses)
    return (
        <div 
            ref={cardRef}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className} `}
        >
            {borderTextPosition.includes("top") && (
                <CustomGraphicsBorderText 
                    position="top" 
                    size={dimensions.width}
                />
            )}
            {borderTextPosition.includes("bottom") && (
                <CustomGraphicsBorderText 
                    position="bottom" 
                    size={dimensions.width}
                />
            )}
            {borderTextPosition.includes("left") && (
                <CustomGraphicsBorderText 
                    position="left" 
                    size={dimensions.height}
                />
            )}
            {borderTextPosition.includes("right") && (
                <CustomGraphicsBorderText 
                    position="right" 
                    size={dimensions.height}
                />
            )}
                <div className="text-center px-4 py-2">
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold">
                    {titleText}
                    {showArrow ? <span className="ml-2 text-base md:text-lg">↗</span> : null}
                </h3>
            </div>
        </div>
    );
};