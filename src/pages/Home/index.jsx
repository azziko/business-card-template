import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import PostContainer from "../../components/PostContainer";

export default function Home() {
    return (
        <div className="container h-screen flex flex-col gap-y-20 lg:gap-y-0 justify-between">
            <Header />
            <main className="body">
                <Heading className={"md:col-span-8 self-center"}/>
                <PostContainer className={"md:col-span-8 lg:col-span-4"}/>
            </main>
            <Footer />
        </div>
    );
}