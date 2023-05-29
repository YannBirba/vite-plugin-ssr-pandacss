import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./index.css";
import { Link } from "./Link";
import { useColorMode } from "./hooks/useColorMode";
import { Pressable } from "@ark-ui/react";
import { css } from "../panda/css";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  const { toggle } = useColorMode();
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <Logo />
            <Link variant="primary" href="/">
              Home
            </Link>
            <Link variant="primary" href="/about">
              About
            </Link>
            <Pressable
              name="theme-toggle"
              onPress={toggle}
              className={
                "panda-theme-toggle-button " +
                css({
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "full",
                  width: 35,
                  height: 35,
                  mt: "2xs",
                  bg: "bg.accent",
                  boxShadow: "sm",
                  border: "1px solid gray.500",
                  cursor: "pointer",
                  _before: {
                    position: "absolute",
                  },
                })
              }
            />
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        padding: { base: "lg" },
        paddingBottom: { base: "xl" },
        borderLeft: { base: "2px solid" },
        borderLeftColor: { base: "gray.400" },
        minHeight: "100vh",
      })}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
