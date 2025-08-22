const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
            <div className="flex gap-2 text-white-500">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a target="_blank" href="https://github.com/Ashutoshvashisht007" className="hover:invert hover:animate-bounce social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ashutosh-anand-sharma-b969441a0/" className="hover:invert hover:animate-bounce social-icon">
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
                {/* <a target="_blank" href="https://x.com/arunrawat404" className="hover:invert hover:animate-bounce social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </a> */}
                <a target="_blank" href="https://leetcode.com/u/Ashutosh_Anand_Sharma/" className="hover:invert hover:animate-bounce social-icon">
                    <img src="/assets/leetcode.svg" alt="leetcode" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© {new Date().getFullYear()} Ashutosh Anand Sharma. All rights reserved. </p>
        </section>
    )
}

export default Footer;

