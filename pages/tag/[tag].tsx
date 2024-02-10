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
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import {CMS_NAME} from "../../lib/constants";
import Intro from "../../components/intro";
import HeroPost from "../../components/hero-post";

export default function Index({posts: {edges}, preview}) {
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
                                                         previewData,
                                                     }) => {
    console.log('tag.tsx 52')
    console.log(params)
    // Check if params.tag is an array and treat it accordingly, otherwise wrap it in an array
    const tagName: string[] = params?.tag ? (Array.isArray(params.tag) ? params.tag : [params.tag]) : [];
    const postsByTag = await getPostsByTag(tagName, preview, previewData);

    return {
        props: {posts: postsByTag, preview},
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
