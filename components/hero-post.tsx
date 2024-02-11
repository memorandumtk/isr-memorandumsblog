import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     author,
                                     slug,
                                 }) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                {coverImage && (
                    <CoverImage title={title} coverImage={coverImage} slug={slug}/>
                )}
            </div>
            <div className="grid grid-cols-1 md:px-24 mb-20">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link
                            href={`/posts/${slug}`}
                            className="hover:underline"
                            dangerouslySetInnerHTML={{__html: title}}
                        ></Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <Date dateString={date}/>
                    </div>
                </div>
                <div>
                    <p
                        className="text-lg leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{__html: excerpt}}
                    />
                </div>
            </div>
        </section>
    );
}
