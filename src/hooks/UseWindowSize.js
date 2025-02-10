import { useState, useEffect } from 'react';

function useWindowSize() {
    const [isMobile, setIsMobile] = useState(false);

    const updateSize = () => {
        setIsMobile(window.innerWidth <= 768); 
    };

    useEffect(() => {
        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return isMobile;
}

export default useWindowSize;