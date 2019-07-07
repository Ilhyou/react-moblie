import React, { Component, Fragment } from "react";
class GoodsDetail extends Component {
  render() {
    console.log(this.props);
    return <Fragment>{this.props.match.params.id}</Fragment>;
  }
}
export default GoodsDetail;
