import data from '../../data/local.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import CV  from '../../assets/CV/CV.pdf'

export default function Heading({ className }) {
    return (
        <div className={"heading flex flex-col gap-y-5 text-jet dark:text-white " + className}>
            <div className="name">
                <h1 className='opacity-0 animate-slideRight'>{data.firstname}</h1>
                <h1 className='opacity-0 animate-slideRight animation-delay-400'>{data.lastName}</h1>
            </div>
            <p className="text-2xl italic text-center sm:text-left"><span className="not-italic">{data.bioIcon}</span>{data.bio}</p>
            <div className="socials capitalize flex flex-col items-center sm:items-start md:items-center gap-y-7 md:flex-row justify-between">
                <div className="icons flex flex-wrap gap-4 text-4xl">
                    {
                        data.socials.map((social, i) => {
                            return <a className='social' key={i} target="_blank" href={social.link}>{social.title}</a>
                        })
                    }
                </div>
                <a href={CV} download className="button-icon">
                    <FontAwesomeIcon className="h-5" icon={faDownLong} />
                    Download CV
                </a>
            </div>
        </div>
    );
}