import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsQuery } from "@/redux/api/api";


const HomePage = ({ allNews }) => {

  const { data, isLoadng, isError, error } = useGetNewsQuery()
  console.log(data, 'from redux');
  // console.log(allNews);
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of PH made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllNews allnews={allNews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getServerSideProps = async () => {

  const result = await fetch('http://localhost:5000/news')

  const data = await result.json()
  // console.log(data);

  return {
    props: {
      allNews: data
    },
  }
}
