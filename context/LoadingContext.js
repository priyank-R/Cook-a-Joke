import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";

export const Context = React.createContext();

const LoadingContext = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider value={{ setLoading, loading }}>
      {loading ? <LinearProgress /> : null}
      {props.children}
    </Context.Provider>
  );
};

export default LoadingContext;
