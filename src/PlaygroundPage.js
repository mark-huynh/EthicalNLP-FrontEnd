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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

function PlaygroundPage() {
  const classes = useStyles();
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

  return (
    <div>
      <Grid container>
        <Grid item x={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <PrefilledTextInputs
                items={model1Keys}
                term={term1}
                onChange={handleChangeTerm1}
                text={term1Input}
                inputOnChange={handleChangeTerm1Input}
              />
            </Grid>
            <Grid item xs={6}>
              <PrefilledTextInputs
                items={model1Keys}
                term={term2}
                onChange={handleChangeTerm2}
                text={term2Input}
                inputOnChange={handleChangeTerm2Input}
              />
            </Grid>
            <Grid item xs={6}>
              <PrefilledTextInputs
                items={model2Keys}
                term={term3}
                onChange={handleChangeTerm3}
                text={term3Input}
                inputOnChange={handleChangeTerm3Input}
              />
            </Grid>
            Hello
            <div id="myDiv"></div>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Paper>
                Debiasing Models <br />
                <Grid item xs={6}>
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={property1}
                    onChange={handleChangeProperty1}
                    text={property1Input}
                    inputOnChange={handleChangeProperty1Input}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PrefilledTextInputs
                    items={model1Keys}
                    term={property2}
                    onChange={handleChangeProperty2}
                    text={property2Input}
                    inputOnChange={handleChangeProperty2Input}
                  />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlaygroundPage;
