import React, { useState, useContext, useEffect } from "react";
import useJoke from "../hooks/useJoke";
import JokeCard from "./JokeCard";
import { Context } from "../context/LoadingContext";
import { CircularProgress } from "@material-ui/core";

const JokeButton = () => {
  const [setup, setSetup] = useState("Cook me a joke ");
  const [punch, setPunch] = useState("I'm hungry !");
  const [grab, jokes, error] = useJoke({ numberOfJokes: 1 });

  const LoadingContext = useContext(Context);

  useEffect(() => {
    if (jokes) {
      setSetup(jokes[0].setup);
      setPunch(jokes[0].punchline);
    }
  }, [jokes]);

  const grabRandomJoke = async () => {
    LoadingContext.setLoading(true);
    await grab();
    LoadingContext.setLoading(false);
  };

  return (
    <div>
      {LoadingContext.loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <JokeCard setup={setup} punch={punch} cook={grabRandomJoke} />
      )}
    </div>
  );
};

export default JokeButton;
