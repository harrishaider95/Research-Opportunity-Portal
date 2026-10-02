import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import './App.css';

const stats = [
  { value: '280+', label: 'Research labs' },
  { value: '4.8/5', label: 'Mentor rating' },
  { value: '1200+', label: 'Open roles' },
];

const featuredOpportunities = [
  {
    title: 'AI for Healthcare Fellowship',
    type: 'Fellowship',
    location: 'Boston, MA',
    details: 'Remote-friendly, 6-month program with biomedical AI mentorship.',
  },
  {
    title: 'Climate Data Research Assistant',
    type: 'Internship',
    location: 'London, UK',
    details: 'Work on satellite analytics and environmental forecasting models.',
  },
  {
    title: 'Computational Biology PhD Track',
    type: 'PhD',
    location: 'Berlin, Germany',
    details: 'Apply machine learning to genomic datasets and translational biology.',
  },
];

const researchAreas = ['Artificial Intelligence', 'Climate Science', 'Bioinformatics', 'Robotics', 'Public Policy'];

function App() {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark">ResearchHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto gap-lg-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#opportunities">Opportunities</Nav.Link>
              <Nav.Link href="#mentors">Mentors</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Button variant="primary" className="rounded-pill px-3">Join now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="page-bg">
        <Container className="py-5">
          <Row className="align-items-center hero-section">
            <Col lg={7} className="mb-4 mb-lg-0">
              <Badge bg="light" text="primary" className="rounded-pill px-3 py-2 mb-3">
                Updated weekly
              </Badge>
              <h1 className="display-5 fw-bold text-dark mb-3">
                Discover the next big step in your research journey.
              </h1>
              <p className="lead text-secondary mb-4">
                Explore scholarships, internships, fellowships, and lab opportunities designed for aspiring researchers and academic innovators.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button variant="primary" size="lg" className="rounded-pill px-4">
                  Explore opportunities
                </Button>
                <Button variant="outline-secondary" size="lg" className="rounded-pill px-4">
                  Become a mentor
                </Button>
              </div>

              <Row className="g-3 mt-2">
                {stats.map((stat) => (
                  <Col xs={4} key={stat.label}>
                    <div className="stat-box">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={5}>
              <Card className="spotlight-card border-0 shadow-sm">
                <Card.Body>
                  <div className="card-topline">Featured opportunity</div>
                  <h3 className="mt-2 mb-3">Quantum Computing Research Sprint</h3>
                  <p className="text-secondary mb-3">
                    A 12-week intensive project for students exploring quantum algorithms and applied systems engineering.
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <Badge bg="primary-subtle" text="primary">Hybrid</Badge>
                    <Badge bg="success-subtle" text="success">Paid</Badge>
                    <Badge bg="warning-subtle" text="warning">Deadline in 8 days</Badge>
                  </div>

                  <ul className="feature-list list-unstyled">
                    <li>Mentorship from industry and academic researchers</li>
                    <li>Hands-on project with publication support</li>
                    <li>Strong networking with global research teams</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section id="opportunities" className="mt-5 pt-4">
            <div className="section-heading mb-4">
              <p className="eyebrow">Featured</p>
              <h2 className="fw-bold text-dark">Research opportunities</h2>
            </div>

            <Row xs={1} md={3} className="g-4">
              {featuredOpportunities.map((opportunity) => (
                <Col key={opportunity.title}>
                  <Card className="h-100 border-0 opportunity-card shadow-sm">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <Badge bg="light" text="primary" className="rounded-pill px-2 py-1">
                          {opportunity.type}
                        </Badge>
                        <span className="text-muted small">{opportunity.location}</span>
                      </div>
                      <Card.Title className="fw-bold text-dark">{opportunity.title}</Card.Title>
                      <Card.Text className="text-secondary flex-grow-1">{opportunity.details}</Card.Text>
                      <Button variant="outline-primary" className="mt-2 rounded-pill">
                        View details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section id="about" className="mt-5 pt-4">
            <Row className="g-4 align-items-stretch">
              <Col lg={7}>
                <div className="info-panel h-100">
                  <p className="eyebrow">Why ResearchHub</p>
                  <h3 className="fw-bold text-dark mb-3">Built for students, researchers, and mentors.</h3>
                  <p className="text-secondary mb-0">
                    We connect ambitious students with credible opportunities, support career growth, and create space for collaboration across disciplines.
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="info-panel h-100">
                  <p className="eyebrow">Areas</p>
                  <div className="d-flex flex-wrap gap-2">
                    {researchAreas.map((area) => (
                      <Badge key={area} bg="secondary-subtle" text="dark" className="rounded-pill px-3 py-2">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;