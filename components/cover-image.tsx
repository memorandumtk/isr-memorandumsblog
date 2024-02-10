import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    coverImage: {
        node: {
            sourceUrl: string;
        };
    };
    slug?: string;
    is_individual?: boolean;

}

export default function CoverImage({title, coverImage, slug, is_individual = false}: Props) {

    const imageUrl = coverImage && coverImage.node.sourceUrl ? coverImage.node.sourceUrl : "/images/no-image.jpg";

    const divClass = is_individual
        ? "sm:px-12 lg:px-32"
        : "sm:px-4"

    const image = (
        <Image
            width={2000}
            height={1000}
            alt={`Cover Image for ${title}`}
            src={imageUrl}
            className={cn("shadow-small", {
                "hover:shadow-medium transition-shadow duration-200 aspect-auto": slug,
            })}
        />
    );
    return (
        <div className={divClass}>
            {slug ? (
                <Link href={`/posts/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
