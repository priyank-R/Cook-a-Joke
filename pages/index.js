import Head from "next/head";
import { useContext } from "react";
import SingleJoke from "../components/SingleJoke";
import AppBar from "../components/AppBar";
import styles from "../styles/Home.module.css";
import { Box, Container, LinearProgress } from "@material-ui/core/";
import LoadingContext from "../context/LoadingContext";

export default function Home() {
  return (
    <>
      <AppBar />
      <body id="gradient">
        <LoadingContext>
          <div>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
              <SingleJoke />
            </Box>
          </div>
        </LoadingContext>
      </body>
      <footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
        <script src="/scripts/background.js"></script>
      </footer>
    </>
  );
}
