import { Container, Row } from "reactstrap";
import { Card, CardBody, CardTitle, Col } from "reactstrap";

const CardData = [
  { title: "MATCH", value: 390, icon: "fas fa-users", change: "1.10%", since: "Since yesterday", color: "bg-yellow" },
  { title: "SWIPE", value: 250, icon: "fas fa-users", change: "-0.5%", since: "Since last week", color: "bg-yellow" },
  { title: "Social TRAFFIC", value: 1200, icon: "fas fa-chart-line", change: "2.5%", since: "Since last month", color: "bg-green" },
  { title: "NEW USERS", value: 50, icon: "fas fa-user-plus", change: "3%", since: "Since last day", color: "bg-red" }
];

const CardComponent = ({ title, value, icon, change, since, color }) => {
  return (
    <Col lg="6" xl="3">
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                {title}
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">{value}</span>
            </div>
            <Col className="col-auto">
              <div className={`icon icon-shape ${color} text-white rounded-circle shadow`}>
                <i className={icon} />
              </div>
            </Col>
          </Row>
          <p className="mt-3 mb-0 text-muted text-sm">
            <span className="text-warning mr-2">
              <i className="fas fa-arrow-down" /> {change}
            </span>{" "}
            <span className="text-nowrap">{since}</span>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              {CardData.map((card, index) => (
                <CardComponent
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  change={card.change}
                  since={card.since}
                  color={card.color}
                />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
