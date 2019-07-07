import React, { Component, Fragment } from "react";
import { NavBar, Icon } from "antd-mobile";
import { getGoodsInfo } from "../api/index";
class GoodsDetail extends Component {
  state = {
    getGoodsInfo: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getGoodsInfo(id).then(res => {
      console.log(res);
    });
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <NavBar mode="dark" icon={<Icon type="left" />}>
          商品详情
        </NavBar>
      </Fragment>
    );
  }
}
export default GoodsDetail;
