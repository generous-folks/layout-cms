import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing(3)
  }
});

const Counter = ({
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
  counter,
  classes
}) => {
  return (
    <p>
      <span>Clicked: {counter} times</span>{" "}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={increment}
      >
        +
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={decrement}
      >
        -
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={incrementIfOdd}
      >
        Increment if odd
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => incrementAsync()}
      >
        Increment async
      </Button>
      <Button
        component={Link}
        to="/about"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        About ...
      </Button>
    </p>
  );
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Counter);
