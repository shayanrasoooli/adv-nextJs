import Document , { Html , Head , Main , NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        <Html dir="rtl" lang="fa">
            <Head>
                <meta name="author" content="shayan rasouli" />
                <title>salam</title>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    }
}


export default MyDocument;