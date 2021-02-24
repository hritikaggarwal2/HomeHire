import React from "react";
import { Button, Card, CardActionArea, Grid } from "@material-ui/core/";

export default function NewHireBenefits() {
  return (
    <div className="container benefits">
      <h3>New Hire Benefits</h3>
      <p>
        Choose a benefit package for your new employee. This is a required
        provision for Canadian employees if you intend to hire in British
        Columbia.
      </p>
      <p>
        You may choose one of our pre-designed packages or create a custom
        package depending on you and your employee's specific needs.
      </p>
      <br />
      <Grid container spacing={3} justify="space-around" align="stretch">
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <h4>Basic</h4>
              <ul>
                <li>Annual leave: 2 weeks</li>
                <li>Standard medical insurance</li>
                <li>Internet Expenses</li>
                <li>Parental leave</li>
              </ul>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <h4>Basic+</h4>
              <ul>
                <li>Annual leave: 3 weeks</li>
                <li>Sick leave: 10 days</li>
                <li>Private medical insurance</li>
                <li>Internet Expenses</li>
                <li>Extended parental leave</li>
                <li>$250 Wellness reimbursement</li>
              </ul>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Button variant="contained button btn-add">
            Create New Custom Package
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
