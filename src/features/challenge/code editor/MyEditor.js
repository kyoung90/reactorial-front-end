import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Grid } from "@material-ui/core";

export const MyEditor = () => {
  return (
    <Grid container>
      <LiveProvider code="() => <strong>Hello World!</strong>">
        <Grid item xs={6}>
          <LiveEditor className="live-editor" />
          <LiveError />
        </Grid>
        <Grid item xs={6}>
          <LivePreview className="live-preview" />
        </Grid>
      </LiveProvider>
    </Grid>
  );
};
