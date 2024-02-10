import Link from "next/link";

export default function Tags({tags}) {
    return (
        <div className="max-w-2xl mx-auto">
            <p className="pt-12 text-lg font-bold">
                Tagged
                {tags.edges.map((tag, index) => (
                    <Link href={`/tag/${tag.node.name}`} key={index}>
                          <span className="ml-4 font-normal hover:underline">
                            {tag.node.name}
                          </span>
                    </Link>
                ))}
            </p>
        </div>
    );
}
