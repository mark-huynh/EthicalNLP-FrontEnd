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
import ExCard2 from "./ExCard2.js";
import mock from "./mock.json";

import CanvasJSReact from "./canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import CanvasJs from 'canvasjs'

// var dataPoints = mock.map(e => {
//     return e
// });

var prop1Terms = mock["property_1_terms"];
var prop2Terms = mock["property_2_terms"];
var neutral = mock["neutral_terms"];

var dataPoints = [];
console.log(prop1Terms);
for (var key of Object.keys(prop1Terms)) {
  console.log(key);
  dataPoints.push({
    label: key,
    x: prop1Terms[key][0],
    y: prop1Terms[key][1],
    z: prop1Terms[key][2],
  });
}

for (var key of Object.keys(prop2Terms)) {
  dataPoints.push({
    label: key,
    x: prop2Terms[key][0],
    y: prop2Terms[key][1],
    z: prop2Terms[key][2],
  });
}

for (var key of Object.keys(neutral)) {
  dataPoints.push({
    label: key,
    x: neutral[key][0],
    y: neutral[key][1],
    z: neutral[key][2],
  });
}

var options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "", // "light1", "light2", "dark1", "dark2"
  title: {
    text: "",
    fontSize: 26,
  },
  axisX: {
    title: "X",
    logarithmic: true,
  },
  axisY: {
    title: "Y",
  },
  data: [
    {
      type: "bubble",

      indexLabel: "{label}",
      toolTipContent:
        "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
      dataPoints: [

      ],
    },
  ],
};

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
  const onButtonClick = () => {
    console.log(typeof term1Input);
    console.log(typeof term1Input === "string");

    var newArr1 = [];

    if (typeof term1Input === "string" && term1Input !== "") {
      newArr1 = term1Input.split(",");
    } else {
      newArr1 = term1Input;
    }

    var newArr2 = [];

    if (typeof term2Input === "string" && term2Input !== "") {
      newArr2 = term2Input.split(",");
    } else {
      newArr2 = term2Input;
    }

    var newArr3 = [];

    if (typeof term3Input === "string" && term3Input !== "") {
      newArr3 = term3Input.split(",");
    } else {
      newArr3 = term3Input;
    }

    console.log(newArr1);
    console.log(newArr2);
    console.log(newArr3);

    options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "",
        fontSize: 26,
      },
      axisX: {
        title: "X",
        logarithmic: true,
      },
      axisY: {
        title: "Y",
      },
      data: [
        {
          type: "bubble",

          indexLabel: "{label}",
          toolTipContent:
            "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
          dataPoints: dataPoints,
        },
      ],
    };
    // forceUpdate()

    // results = {
    //   "coordinates": {
    //     "she": ["-0.20227532", "0.25464466", "-0.078082986"],
    //     "her": ["-0.21476142", "0.3768191", "0.02148349"],
    //     "he": ["1.2290769", "-0.059459276", "-0.13752913"],
    //     "him": ["0.13921604", "-0.10202482", "0.3984306"],
    //     "doctor": ["-0.42410082", "-0.27203542", "-0.051558696"],
    //     "nurse": ["-0.5271554", "-0.19794445", "-0.1527432"],
    //   },
    // };

    // newDataPoints = [];

    // for (var key in results["coordinates"]) {
    //     newDataPoints.push(
    //         {label: key, x: results[key][0], y: results[key][1]}
    //     )
    // }

      fetch("https://3b4cc59aee8d.ngrok.io/fastText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "OPTIONS": "/fastTest HTTP/1.1"
        },
        body: JSON.stringify({
          "property_terms_1": ["string"],
          "property_terms_2": ["string"],
          "neutral_terms": ["string"],
        }),
      }).then((e) => console.log(e.json()));
  };

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
                  <ExCard2 />
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
            <Button onClick={onButtonClick} variant="outlined" color="primary">
              RUN
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dev;
