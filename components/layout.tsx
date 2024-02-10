import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="min-h-screen bg-blue-900 text-gray-400">
                <Alert preview={preview}/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
}
