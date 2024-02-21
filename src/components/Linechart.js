import { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

import {
    Card,
    CardHeader,
    Row,
    Col,
    NavItem,
    NavLink,
    Nav,
    CardBody,
} from "reactstrap";

import {
    chartOptions,
    parseOptions,
    chartExample1,
} from "variables/charts.js";

const Linechart = () => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
  
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  
    const toggleNavs = (e, index) => {
      e.preventDefault();
      setActiveNav(index);
      setChartExample1Data("data" + index);
    };
  return (
    <>
    <Col className="mb-5 mb-xl-0" xl="8">

    <Card className="bg-gradient-default shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-light ls-1 mb-1">
              Overview
            </h6>
            <h2 className="text-white mb-0">New Users</h2>
          </div>
          <div className="col">
            <Nav className="justify-content-end" pills>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: activeNav === 1,
                  })}
                  href="#pablo"
                  onClick={(e) => toggleNavs(e, 1)}
                >
                  <span className="d-none d-md-block">Month</span>
                  <span className="d-md-none">M</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: activeNav === 2,
                  })}
                  data-toggle="tab"
                  href="#pablo"
                  onClick={(e) => toggleNavs(e, 2)}
                >
                  <span className="d-none d-md-block">Week</span>
                  <span className="d-md-none">W</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
        {/* Chart */}
        <div className="chart">
          <Line
            data={chartExample1[chartExample1Data]}
            options={chartExample1.options}
            getDatasetAtEvent={(e) => console.log(e)}
          />
        </div>
      </CardBody>
    </Card>
  </Col>
  </>
  );
};

export default Linechart;
