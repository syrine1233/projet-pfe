import Chart from "chart.js";
import { Pie } from "react-chartjs-2";


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
  chartExample3,
} from "variables/charts.js";
const Piechart = () => {
   
  
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
return(

    <Col className="mb-5 mb-xl-0" xl="4">
      <Card className="bg-gradient-default shadow">
        <CardHeader className="bg-transparent">
          <Row className="align-items-center">
            <div className="col">

              <h2 className="text-white mb-0">User Gender</h2>
            </div>
          </Row>
        </CardHeader>
        <CardBody>
          {/* Chart */}
          <div className="chart">
            <Pie
              data={chartExample3.data}
              options={chartExample3.options}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
    

    );
  };
    
 

export default Piechart;
