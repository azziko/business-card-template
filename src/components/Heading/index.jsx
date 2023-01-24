import data from '../../data/local.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';

export default function Heading({ className }) {
    return (
        <div className={"heading flex flex-col gap-y-5 text-jet dark:text-white " + className}>
            <div className="name">
                <h1 className='opacity-0 animate-slideRight'>{data.firstname}</h1>
                <h1 className='opacity-0 animate-slideRight animation-delay-400'>{data.lastName}</h1>
            </div>
            <p className="text-2xl italic"><span className="not-italic">{data.bioIcon}</span>{data.bio}</p>
            <div className="socials capitalize flex items-center justify-between">
                <div className="icons flex gap-4 text-4xl">
                    {
                        data.socials.map((social, i) => {
                            return <a className='social' key={i} target="_blank" href={social.link}>{social.title}</a>
                        })
                    }
                </div>
                <a href="#" download={'#'} className="button-icon">
                    <FontAwesomeIcon className="h-5" icon={faDownLong} />
                    Download CV
                </a>
            </div>
        </div>
    );
}