import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle">
          <span style={{ color: "#FA6E86" }}>A</span> file{" "}
          <span style={{ color: "#FA6E86" }}>list</span> program that supports
          multiple storage.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Alist Tutorial - 2min ⏱️
          </Link>
          <Link
            className="button button--lg"
            to="https://mbd.pub/o/bread/ZJaTl5xy"
          >
            Desktop
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container" style={{ marginTop: 14 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                maxWidth: 500,
              }}
            >
              <a
                href="https://www.mingdao.com?s=utm_51=utm_source=alist&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
                target="_blank"
              >
                <img
                  src="/img/ads/mingdao-h.png"
                  style={{
                    width: "100%",
                  }}
                />
              </a>
              <div
                style={{
                  fontSize: "small",
                  textAlign: "right",
                  color: "#999",
                }}
              >
                赞助商
              </div>
            </div>
          </div>
          <div
            className="wwads wwads-cn wwads-horizontal"
            data-id="219"
            style={{
              width: "100% !important",
            }}
          ></div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
