import RootLayout from '@/components/Layouts/RootLayout';
import { Col, Image, Row } from 'antd';
import React from 'react';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import Link from 'next/link';

const NewsDetails = ({ news }) => {

    if (!news) {
        return <p>Loading......</p>
    }


    return (
        <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
                <div>
                    <Image src={news.image_url}
                        responsive
                        alt='news image' width={500} height={300} />
                </div>
            </Col>
            <Col span={12}>
                <div>
                    <h1 style={{ fontSize: "20px" }}>
                        {news.title}
                    </h1>
                    <div
                        className="line"
                        style={{
                            height: "5px",
                            margin: "20px 0",
                            background: "#000",
                            width: "95%",
                        }}
                    ></div>

                    <p
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "90%",
                            color: "gray",
                            margin: "10px 0px",
                        }}
                    >
                        <span>
                            <CalendarOutlined />{news.release_date}
                        </span>
                        <span>
                            <CommentOutlined /> {news.comment_count} NO COMMENTS
                        </span>
                        <span>
                            <ProfileOutlined /> {news.category}
                        </span>
                    </p>

                    <p style={{ fontSize: "20px" }}>
                        {news.description}
                    </p>
                    <Link href={`/news/${news.id}`}>
                        <p
                            style={{
                                fontSize: "20px",
                                margin: "20px 0px",
                                backgroundColor: "black",
                                color: "white",
                                width: "168px",
                                padding: "2px 5px ",
                                fontWeight: "300",
                                letterSpacing: "3px",
                            }}
                        >
                            Keep Reading <ArrowRightOutlined />
                        </p>
                    </Link>
                </div>
            </Col>
        </Row>
    );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {

//     const res = await fetch('http://localhost:5000/news')
//     const newses = await res.json()

//     const paths = newses?.map((news) => ({
//         params: { newsId: news.id }
//     }))
//     return { paths, fallback: false }
// }


export const getServerSideProps = async (context) => {
    const { params } = context;
    const result = await fetch(`http://localhost:5000/news/${params.newsId}`)

    const data = await result.json()
    // console.log(data);
    return {
        props: {
            news: data
        }
    }
}
