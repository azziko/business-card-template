import Post from "../Post";

export default function PostContainer({className}) {
    return(
        <div className={"flex flex-col flex-wrap flex-start gap-4 " + className}>
            <h4 className="text-3xl text-jet dark:text-white tracking-[0.25px] font-semibold">Recent Activity</h4>
            <div className="posts flex flex-col gap-2">
                <Post className="animate-slideTop" name={"telegram-bot-api"} pushed_at={"2022-18-04"} description={"Lorem ipsun dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet ammet ammet"}/>
                <Post className="animate-slideTop animation-delay-100" name={"telegram-bot-api"} pushed_at={"2022-18-04"} description={"Lorem ipsun dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet"}/>
                <Post className="animate-slideTop animation-delay-200" name={"telegram-bot-api"} pushed_at={"2022-18-04"} description={"Lorem ipsun dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet"}/>
                <Post className="animate-slideTop animation-delay-300" name={"telegram-bot-api"} pushed_at={"2022-18-04"} description={"Lorem ipsun dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet dolor sit ammet"}/>
            </div>
        </div>
    );
}