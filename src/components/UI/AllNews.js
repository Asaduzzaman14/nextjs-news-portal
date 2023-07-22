import React from 'react';
import Image from 'next/image';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from 'antd';
import Link from 'next/link';

const AllNews = ({ allnews }) => {

    const contentStyle = {
        height: "425px",
        border: '2px solid red',
        color: "#000",
    };
    console.log(allnews, 'news');
    return (
        <div>
            <h2>This is all news </h2>
            {
                allnews.map((news) => (
                    <Row key={news.id} >
                        <Col

                            lg={{
                                span: 8,
                            }}
                        >
                            <Image src={news.image_url} alt='news image' width={200} height={300} />
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
                        </Col>
                    </Row>
                ))
            }
        </div>
    );
};

export default AllNews;