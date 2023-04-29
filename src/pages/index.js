import GptTable from "@/components/GptTable";
import SharingText from "@/components/SharingText";
import { Col, Row } from "antd";
import Head from "next/head";
import { Fragment } from "react";
import Test from "@/components/Test";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>ChatGPT Sharing</title>
        <meta name='description' content='ChatGPT sharing url' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div style={{ "margin-bottom": "10px", "margin-top": "10px" }}></div>
            <SharingText />
            <div style={{ "margin-bottom": "10px" }}></div>
            <GptTable />
            {/*<Test />*/}
          </Col>
          <Col span={6}></Col>
        </Row>
      </main>
    </Fragment>
  );
}
