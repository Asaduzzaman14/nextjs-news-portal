import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const NewsDetails = ({ news }) => {
    return (
        <div>
            <h1>This is news details page</h1>
            <h2>{news?.title}</h2>
            <h2>{news?.author}</h2>
        </div>
    );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {

    const res = await fetch('http://localhost:5000/news')
    const newses = await res.json()

    const paths = newses?.map((news) => ({
        params: { newsId: news.id }
    }))
    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {

    const { params } = context;

    const result = await fetch(`http://localhost:5000/news/${params.newsId}`)

    const data = await result.json()
    console.log(data);

    return {
        props: {
            news: data
        }
    }
}
