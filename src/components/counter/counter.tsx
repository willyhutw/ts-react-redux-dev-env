import * as React from "react";
import { connect } from "react-redux";
import { stateType } from "../../store/reducer";
import { increment, decrement } from "../../store/action";
import * as style from "./counter.scss";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface propsType {
  counter: number;
  increment: () => { type: string };
  decrement: () => { type: string };
}

const Counter = (props: propsType) => {
  return (
    <div className={style.counter}>
      <div className={style.dec} onClick={props.decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className={style.count}>
        <span>{props.counter}</span>
      </div>
      <div className={style.inc} onClick={props.increment}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: stateType) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
