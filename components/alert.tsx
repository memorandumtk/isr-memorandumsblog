import Container from "./container";
import cn from "classnames";
import {EXAMPLE_PATH, MY_GITHUB} from "../lib/constants";

export default function Alert({preview}) {
    return (
        // <div
        //   className={cn("border-b", {
        //     "bg-accent-7 border-accent-7 text-white": preview,
        //     "bg-accent-7 border-accent-2 text-white": !preview,
        //   })}
        // >
        <div className={"bg-accent-7 border-b border-accent-2 text-gray-300"}>
            <Container>
                <div className="py-2 text-center text-sm">
                    {preview ? (
                        <>
                            This is a page preview.{" "}
                            <a
                                href="/api/exit-preview"
                                className="underline hover:text-cyan duration-200 transition-colors"
                            >
                                Click here
                            </a>{" "}
                            to exit preview mode.
                        </>
                    ) : (
                        <>
                            The source code for this blog is{" "}
                            <a
                                // href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                                href={`${MY_GITHUB}`}
                                className="underline hover:text-success duration-200 transition-colors"
                            >
                                available on GitHub
                            </a>
                            .
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}
