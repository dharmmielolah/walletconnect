import { StackActions, CommonActions } from "@react-navigation/native";

import * as React from "react";

export const _navigator = React.createRef();

function navigate(name, params) {
  _navigator.current?.navigate(name, params);
}

function reset(routes = [{ name: String, params: Object }], index = 0) {
  _navigator.current?.dispatch(
    CommonActions.reset({
      index: index,
      routes: routes
    })
  );
}

function pop() {
  const popAction = StackActions.pop(1);
  _navigator.current?.dispatch(popAction);
}

function popToTop() {
  _navigator.current?.dispatch(StackActions.popToTop());
}

export default {
  navigate,
  reset,
  pop,
  popToTop
};
