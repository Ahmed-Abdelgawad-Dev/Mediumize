import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import AfterHeader from "../components/AfterHeader";
// import Page from "./page";

const Home: NextPage = () => {
    return (
        <div className="min-w-2xl max-w-7xl mx-auto">
            <Head>
                <title>Mediumize</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <AfterHeader />
            </main>
        </div>
    );
};

export default Home;
