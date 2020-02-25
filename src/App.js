import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Radio from "@material-ui/core/Radio";
import NativeSelect from "@material-ui/core/NativeSelect";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import AddIcon from "@material-ui/icons/Add";

import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [radio, setRadio] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Container className="app">
        <h1>Material-UI</h1>
        <a href="https://material-ui.com/">Docs</a>
        <p>
          “React components for faster and easier web development.
          <br />
          Build your own design system, or start with Material Design.”
        </p>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <h2>Inputs</h2>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>Button</h3>
              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>CheckBox</h3>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>Floating Action Button</h3>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>KeyboardDatePicker</h3>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                />
              </MuiPickersUtilsProvider>
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>Radio</h3>
              <Radio
                checked={radio === true}
                onClick={() => {
                  setRadio(!radio);
                }}
                value={radio}
                name="radio-button-demo"
                inputProps={{
                  "aria-label": "A description of this radio buttons function"
                }}
              />
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>NativeSelect</h3>
              <NativeSelect
                value={10}
                /*onChange={}*/
                inputProps={{
                  name: "age",
                  id: "age-native-helper"
                }}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>Slider</h3>
              <Slider
                defaultValue={30}
                /*getAriaValueText={}*/
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
              />{" "}
            </Container>
          </Grid>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>Switch</h3>
              <Switch
                checked={radio}
                onChange={() => {
                  setRadio(!radio);
                }}
                value={radio}
              />
            </Container>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <h2>Navigation</h2>

          <Grid container item xs={12}>
            <Container className="item">
              <h3>BottomNavigation</h3>
              <BottomNavigation
                value={0}
                onChange={(event, newValue) => {
                  setRadio(newValue);
                }}
                showLabels
              >
                <BottomNavigationAction
                  label="Recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  icon={<LocationOnIcon />}
                />
              </BottomNavigation>{" "}
            </Container>
          </Grid>
        </Grid>
        {/* !-- GRID of NAVIGATIOSNS --> */}
      </Container>{" "}
      {/* !-- PAGE CONTAINER --> */}
    </div>
  );
}

export default App;
