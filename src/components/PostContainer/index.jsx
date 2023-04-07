import dataApp from '../../data/local.json'

import Post from "../Post";
import useFetch from "../../hooks/useFetch";

export default function PostContainer({className}) {
    const { data, isLoading, error } = useFetch(`https://api.github.com/users/${dataApp.gitProfileName}/repos`);

    if (error) {
        if (import.meta.env.DEV) {
            console.log(error)
        }

        return (
            <div className={"flex flex-col flex-wrap flex-start gap-4 " + className}>
                <h4 className="text-3xl text-jet dark:text-white tracking-[0.25px] font-semibold">Recent Activity</h4>
                <h3 className="text-xl text-jet dark:text-white tracking-[0.75px]  italic font-thin">{dataApp.noDataError}</h3>
            </div>
        )
    }

    if (!isLoading) {
        return(
            <div className={"flex flex-col flex-wrap flex-start gap-4 " + className}>
                <h4 className="text-3xl text-jet dark:text-white tracking-[0.25px] font-semibold">Recent Activity</h4>
                <div className="posts flex flex-wrap lg:flex-col justify-between gap-y-8 lg:gap-2">
                    {data.map((item, i) => {
                        if (item.name != dataApp.gitProfileName && i < 5) {
                            return  (
                                <Post className={"animate-slideTop animation-delay-" + `${i*100}`}
                                    key={item.id}  
                                    name={item.name} 
                                    pushed_at={item.pushed_at.split('T')[0]} 
                                    description={item.description}
                                    html_url={item.html_url}
                                />
                            );                    
                        }
                    })}
                </div>
            </div>
        );
    }
}