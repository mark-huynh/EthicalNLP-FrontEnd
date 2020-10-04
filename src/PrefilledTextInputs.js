import React from 'react'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import weat_data from "./prefills/WEAT_en.json";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



function PrefilledTextInputs(props) {
    const listItems = props.items.map((e) => {
        return <MenuItem value={e}>{e}</MenuItem>;
      });
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Text List</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.term}
              onChange={props.onChange}
            >
              {listItems}
            </Select>
          </FormControl>
          <TextField variant="outlined" id="outlined-basic" label="Standard" value={props.text} onChange={props.inputOnChange}/>
        </div>
    )
}

export default PrefilledTextInputs
