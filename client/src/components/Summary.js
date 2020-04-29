import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  summaryContext: {
    flex: 1,
  },
});

export default function Summary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total reviews</Title>
      <Typography component="p" variant="h4">
        57,231
      </Typography>
      <Typography color="textSecondary" className={classes.summaryContext}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}
