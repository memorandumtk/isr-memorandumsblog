import {useRouter} from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import {GetStaticPaths, GetStaticProps} from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import {getPostsByTag, getAllPostsWithTag} from "../../lib/api";
import {CMS_NAME} from "../../lib/constants";
import Intro from "../../components/intro";
import HeroPost from "../../components/hero-post";

export default function Index({postsByTag, preview}) {
    const router = useRouter();
    // If the page is not yet generated, this will be shown
    // initially until getStaticProps() finishes running
    if (router.isFallback || !postsByTag || postsByTag.edges.length === 0) {
        return <ErrorPage statusCode={404}/>;
    }

    const {edges} = postsByTag;
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);

    return (
        <Layout preview={preview}>
            <Head>
                <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
            </Head>
            <Container>
                <Intro/>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.featuredImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({
                                                         params,
                                                         preview = false,
                                                     }) => {

    // Check if params.tag is a string type and treat it accordingly, otherwise take the first element of the array.
    const tagName: string[] = params?.tag ? (Array.isArray(params.tag) ? params.tag : [params.tag]) : [];
    const postsByTag = await getPostsByTag(tagName, preview);

    // Check if postsByTag is false, then return notfound page made by Next.js: true to trigger a 404 page
    if (!postsByTag) {
        return {notFound: true};
    }

    return {
        props: {postsByTag, preview},
        revalidate: 10,
    };
};


export const getStaticPaths: GetStaticPaths = async () => {
    const allTags = await getAllPostsWithTag();

    return {
        paths: allTags.edges.map(({node}) => `/tag/${node.name}`) || [],
        fallback: true,
    };
};
