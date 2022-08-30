import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Footer } from "../components/Footer/Footer"

const FlagProvider = dynamic(() => import("@unleash/proxy-client-react"), { ssr: false})

const unleash_config = {
    url: "http://localhost:3000/proxy",
    clientKey: "some-secret",
    refreshInterval: 15,
    appName: 'frontend',
    environment: 'development',
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <FlagProvider config={unleash_config}>
                <Component {...pageProps} />
                <Footer />
            </FlagProvider>
        </>
    )
}

export default MyApp;
