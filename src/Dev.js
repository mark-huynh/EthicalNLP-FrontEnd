import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import weat_data from "./prefills/WEAT_en.json";
import PrefilledTextInputs from "./PrefilledTextInputs";
import ExCard from "./ExCard.js";

const model1Keys = [
  "female_terms",
  "male_terms",
  "female_names",
  "male_names",
  "young_people_names",
  "old_people_names",
  "european_american_names",
  "african_american_names",
];

const model2Keys = [
  "career",
  "family",
  "math",
  "arts",
  "science",
  "pleasant",
  "unpleasant",
  "mental_disease",
  "physical_disease",
  "instruments",
  "weapons",
  "temporary",
  "permanent",
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#F5F7FC",
    width: "40vw",
  },
}));

function Dev() {
  const [term1, setTerm1] = React.useState("");
  const handleChangeTerm1 = (event) => {
    setTerm1(event.target.value);
    setTerm1Input(weat_data[event.target.value]);
  };
  const [term2, setTerm2] = React.useState("");
  const handleChangeTerm2 = (event) => {
    setTerm2(event.target.value);
    setTerm2Input(weat_data[event.target.value]);
  };
  const [term3, setTerm3] = React.useState("");
  const handleChangeTerm3 = (event) => {
    setTerm3(event.target.value);
    setTerm3Input(weat_data[event.target.value]);
  };
  const [property1, setProperty1] = React.useState("");
  const handleChangeProperty1 = (event) => {
    setProperty1(event.target.value);
    setProperty1Input(weat_data[event.target.value]);
  };
  const [property2, setProperty2] = React.useState("");
  const handleChangeProperty2 = (event) => {
    setProperty2(event.target.value);
    setProperty2Input(weat_data[event.target.value]);
  };

  const [eval1, setEval1] = React.useState("");
  const handleChangeEval1 = (event) => {
    setEval1(event.target.value);
    setEval1Input(weat_data[event.target.value]);
  };

  const [eval2, setEval2] = React.useState("");
  const handleChangeEval2 = (event) => {
    setEval2(event.target.value);
    setEval2Input(weat_data[event.target.value]);
  };

  const [eval1Input, setEval1Input] = React.useState("");
  const handleChangeEval1Input = (event) => {
    setEval1Input(event.target.value);
  };
  const [eval2Input, setEval2Input] = React.useState("");
  const handleChangeEval2Input = (event) => {
    setEval2Input(event.target.value);
  };

  const [term1Input, setTerm1Input] = React.useState("");
  const handleChangeTerm1Input = (event) => {
    setTerm1Input(event.target.value);
  };
  const [term2Input, setTerm2Input] = React.useState("");
  const handleChangeTerm2Input = (event) => {
    setTerm2Input(event.target.value);
  };
  const [term3Input, setTerm3Input] = React.useState("");
  const handleChangeTerm3Input = (event) => {
    setTerm3Input(event.target.value);
  };
  const [property1Input, setProperty1Input] = React.useState("");
  const handleChangeProperty1Input = (event) => {
    setProperty1Input(event.target.value);
  };
  const [property2Input, setProperty2Input] = React.useState("");
  const handleChangeProperty2Input = (event) => {
    setProperty2Input(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={7}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1 className="paperHead">Data Visualization</h1>
                <span className="paperInner">
                  Choose the datasets you want to use for visualization
                </span>
                <Container>
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={term1}
                    onChange={handleChangeTerm1}
                    text={term1Input}
                    inputOnChange={handleChangeTerm1Input}
                  />
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={term2}
                    onChange={handleChangeTerm2}
                    text={term2Input}
                    inputOnChange={handleChangeTerm2Input}
                  />
                  <PrefilledTextInputs
                    items={model2Keys}
                    term={term3}
                    onChange={handleChangeTerm3}
                    text={term3Input}
                    inputOnChange={handleChangeTerm3Input}
                  />
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1 className="paperHead">Debiasing Models:</h1>
                <span className="paperInner">
                  Click on the debiasing model you want to run
                </span>
                <Container>
                  <ExCard />
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={property1}
                    onChange={handleChangeProperty1}
                    text={property1Input}
                    inputOnChange={handleChangeProperty1Input}
                  />
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={property2}
                    onChange={handleChangeProperty2}
                    text={property2Input}
                    inputOnChange={handleChangeProperty2Input}
                  />
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1 className="paperHead">Evaluation Metrics:</h1>
                <span className="paperInner">
                  Click on the evaluation metric you want to use
                </span>
                <Container>
                  <ExCard />
                  <PrefilledTextInputs
                    items={model2Keys}
                    term={eval1}
                    onChange={handleChangeEval1}
                    text={eval1Input}
                    inputOnChange={handleChangeEval1Input}
                  />
                  <PrefilledTextInputs
                    items={model2Keys}
                    term={eval2}
                    onChange={handleChangeEval2}
                    text={eval2Input}
                    inputOnChange={handleChangeEval2Input}
                  />
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          Yo
        </Grid>
      </Grid>
    </div>
  );
}

export default Dev;
