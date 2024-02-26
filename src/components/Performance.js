import { Card, CardBody, CardTitle,  Row, Col } from "reactstrap";

const Performance = () => {
    return (
        <Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-0"
                >
                  Performance
                </CardTitle>
                <span className="h2 font-weight-bold mb-0">49,65%</span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                  <i className="fas fa-percent" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              <span className="text-success mr-2">
                <i className="fas fa-arrow-up" /> 12%
              </span>{" "}
              <span className="text-nowrap">Since last month</span>
            </p>
          </CardBody>
        </Card>
      </Col>
    );
};
export default Performance;

