import Head from "next/head";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Container>
        <Header />
      </Container>
      {children}
      <Footer />
    </>
  );
}
