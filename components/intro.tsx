import {CMS_NAME, CMS_URL, MY_CMS_NAME, MY_CMS_URL} from "../lib/constants";

export default function Intro() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:px-8">
                Blog.
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                A statically generated blog using{" "}
                <a
                    href={"https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"}
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    ISR
                </a>{" "}with{" "}
                <a
                    href="https://nextjs.org/"
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    Next.js
                </a>, <br/> which takes my base data from{" "}
                <a
                    href={MY_CMS_URL}
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    {MY_CMS_NAME}
                </a>
                {" "}with utilizing{" "}
                <a
                    href={`https://www.wpgraphql.com/`}
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    WPGraphQL Plugin
                </a>.
            </h4>
        </section>
    );
}
