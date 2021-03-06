import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageSimple } from "@fuse";
import ServiceModal from "./components/service";
import Table from "./components/service_front";

const styles = theme => ({
  layoutRoot: {}
});

class Service extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FusePageSimple
        classes={{
          root: classes.layoutRoot
        }}
        header={<div className="p-24"></div>}
        contentToolbar={<div className="px-24"></div>}
        content={
          <div className="p-24">
            <Table />
          </div>
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Service);
