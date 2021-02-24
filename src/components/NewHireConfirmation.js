import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  Grid,
  Typography,
  Icon,
} from "@material-ui/core/";

import { Assignment as AssignmentIcon } from "@material-ui/icons/";

export default function NewHireConfirmation() {
  return (
    <div className="container review">
      <h3>Offer letter draft complete!</h3>
      <p>
        Please review the initial offer draft and confirm. We will review your
        draft shortly and get back to you within 24 hours.
      </p>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h3>Offer documents</h3>
          </Grid>
          <Grid item container xs={12} component={Card}>
            <Grid item xs={2}>
              <Icon clickable={false}>
                <AssignmentIcon fontSize="large" />
              </Icon>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Typography>Offer Draft</Typography>
              <Typography color="textSecondary">
                Date created: 2/24/2021
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={4}
              justify="space-around"
              alignItems="center"
            >
              <Grid item component={Button} variant="contained">
                View
              </Grid>
              <Grid item component={Button} variant="contained" color="primary">
                Download
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
