import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import AfterHeader from "../components/AfterHeader";

const Home: NextPage = () => {
    return (
        <div className="min-w-2xl max-w-6xl mx-auto">
            <Head>
                <title>Mediumize</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <AfterHeader />
        </div>
    );
};

export default Home;
