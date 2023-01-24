import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import PostContainer from "../../components/PostContainer";

export default function Home() {
    return (
        <div className="container h-full flex flex-col justify-between">
            <Header />
            <main className="body">
                <Heading className={"col-span-8 self-center"}/>
                <PostContainer className={"col-span-4"}/>
            </main>
            <Footer />
        </div>
    );
}