import { useEffect } from "react";

const ScrollProgressBar = () => {
    useEffect(() => {
        const progressPath = document.querySelector(".progress-wrap path");
        const pathLength = progressPath.getTotalLength();

        // Set up path properties
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };

        const handleScroll = () => {
            updateProgress();
            const progressWrap = document.querySelector(".progress-wrap");
            if (window.scrollY > 50) {
                progressWrap.classList.add("active-progress");
            } else {
                progressWrap.classList.remove("active-progress");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="progress-wrap" onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
    );
};

export default ScrollProgressBar;
