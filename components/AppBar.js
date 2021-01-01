import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import { GitHub } from "@material-ui/icons";
import {
  Snackbar,
  IconButton,
  Button,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

//   const snackBarAlert = () => {
//     return (
//       <Snackbar
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         open
//         autoHideDuration={6000}
//         // onClose={handleClose}
//         message="Note archived"
//         action={
//           <React.Fragment>
//             <Button color="secondary" size="small" onClick={null}>
//               UNDO
//             </Button>
//             <IconButton
//               size="small"
//               aria-label="close"
//               color="inherit"
//               //   onClick={handleClose}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />
//     );
//   };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
           <a href="https://github.com/priyank-R/Cook-a-Joke" target="_blank"><GitHub /></a> 
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cook-a-Joke
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
