import React from "react";
import { MyEditor } from "./code editor/MyEditor";
import { Grid } from "@material-ui/core";
import {ArticleContainer} from "./article/ArticleContainer"

export const ChallengeContainer = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <ArticleContainer />
      </Grid>
      <Grid item xs={8}>
        <MyEditor />
      </Grid>
    </Grid>
  );
};
