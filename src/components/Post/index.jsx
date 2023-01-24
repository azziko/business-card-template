export default function Post({...props}) {
    return (
        <div className={"post opacity-0 flex flex-col items-start gap-1 " + props.className}>
            <a href={props.html_url} className="font-bold text-lg font-ptSans text-jet dark:text-white tracking-[1.5px]">{props.name}</a>
            <div className="font-ptSans flex gap-2 text-base text-jet dark:text-white">
                <span className="rounded-full h-full min-w-[2px] bg-jet dark:bg-white"></span>
                <p className="line-clamp-3">{props.description}</p>
            </div>
            <div className="
            flex items-center justify-between
            text-gray dark:text-pewter text-sm font-openSans
            w-full">
                <p>{props.pushed_at}</p>
                <a href={props.html_url}>View the rest...</a>
            </div>
        </div>
    );
}