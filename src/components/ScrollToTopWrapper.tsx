import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // If there is a hash, scroll to the element after a short delay to allow page rendering
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [pathname, hash]);

    return <>{children}</>;
};

export default ScrollToTopWrapper;
