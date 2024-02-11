import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="min-h-screen bg-accent-7 text-gray-400 roboto-light">
                <Alert preview={preview}/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
}
