import Chart from "chart.js";
import {  Bar } from "react-chartjs-2";

import {
    Card,
    CardHeader,
    Row,
    Col,
    CardBody,
  } from "reactstrap";

  import {
    chartOptions,
    parseOptions,
    chartExample2,
} from "variables/charts.js";

const Barchart = () => {
   
  
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  
   
  return (
    <Col xl="4">
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">
              Performance
            </h6>
            <h2 className="mb-0"></h2>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
        {/* Chart */}
        <div className="chart">
        <Bar
            data={chartExample2.data}
            options={chartExample2.options}
          />
        </div>
      </CardBody>
    </Card>
  </Col>
  );
};

export default Barchart;
