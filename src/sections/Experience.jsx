import { workExperiences } from "../constants";

const Experience = () => {
    return (
        <section className="my-20 c-space" id="experience">
            <div className="w-full text-white-600">
                <h3 className="head-text">Work Experience</h3>

                <div className="work-container">
                    <div className="work-canvas">

                    </div>
                </div>
                <div className="work-content">
                    <div className="py-5 sm:py-10 sm:px-5">
                        {workExperiences.map((item, index) => (
                            <div key={index} className="work-content_container group">
                                <div className="flex flex-col items-center justify-start h-full py-2">
                                    <div className="work-content_logo">
                                        <img src={item.icon} alt="logo" className="w-full h-full" />
                                    </div>
                                    <div className="work-content_bar" />
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800"> {item.name} </p>
                                    <p className="mb-5 text-sm"> {item.pos} |  {item.duration} </p>
                                    <p className="transition duration-500 ease-in-out group-hover:text-white">{item.title}</p>
                                    <ul className='mt-5 ml-5 space-y-2 list-disc'>
                                        {item.points.map((point, index) => (
                                            <li
                                                key={`experience-point-${index}`}
                                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                                            >
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience;