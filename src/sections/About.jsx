import { useState, useRef, useEffect } from 'react'
import Globe from 'react-globe.gl';
import Button from "../components/Button";

const About = () => {
    const myEmail = "ashutoshanandsharma51@gmail.com"
    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef();

    useEffect(() => {
        globeRef.current.pointOfView({ lat: 20, lng: 80 });
    }, [])

    const pointsData = [{
        lat: 28.7, lng: 77.1, pointAltitude: 5, size: 0.1, color: 'white'
    }]

    const arcsData = [
        { lat: 51.50, lng: 0.12 },        // UK
        { lat: 37.3875, lng: -122.0575 },     // USA
        { lat: 25.2048, lng: 55.2708 },       // Dubai
        { lat: 1.35, lng: 103.81 },       // Singapore
        { lat: -25.27, lng: 133.77 }      // Australia
    ].map(location => (
        {
            startLat: pointsData[0].lat,
            startLng: pointsData[0].lng,
            endLat: location.lat,
            endLng: location.lng,
            color: ['orange', 'white']
        }
    ))

    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail)

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="my-20 c-space" id="about">
            <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hello, I am Ashutosh</p>
                            <p className="grid-subtext">With over a year of experience as a freelancer and through internships, I’ve worked on both backend and frontend development. I’m quick to learn, adapt to new technologies, and good at solving problems</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/mern.avif" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Skills</p>
                            <p className="grid-subtext">I work with React.js and JavaScript, specializing in the frontend and backend with MERN stack.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="w-full rounded-3xl sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                pointsData={pointsData}
                                pointAltitude={0.5}
                                pointRadius={0.5}
                                pointColor={'color'}
                                arcColor={'color'}
                                arcStroke={1}
                                arcAltitude={0.35}
                                arcsData={arcsData}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones</p>
                            <p className="grid-subtext">I'm based in India, with remote work available</p>
                            <a href="#contact" className="w-fit">
                                <Button name="Contact me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding/technology</p>
                            <p className="grid-subtext">I love building and breaking things. I love solving problems and building things through code. I learn things fast and have a knack for figuring things out.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="text-center grid-headtext">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                                <p className="font-medium text-white lg:text-[16px] md:text-xl text-gray_gradient">{myEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;