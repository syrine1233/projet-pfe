import React, { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import {
  Button,
  Card,
  CardHeader,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { university } from "views/examples/University/university.css";

const AddUniversity = () => {
  const [universities, setUniversities] = useState([
    { name: 'Higher Institute of Multimedia Arts of Manouba', abbreviation: 'ISAMM', email: 'isamm@example.com' },
    { name: 'Private Higher School of Engineering and Technology', abbreviation: 'Esprit', email: 'esprit@example.com' },
    { name: 'Faculty of Science of Tunis', abbreviation: 'FST', email: 'fst@example.com' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', abbreviation: '', email: '' });
  const [editIndex, setEditIndex] = useState(null); // Nouveau state pour l'index de l'université en cours d'édition

  // Expression régulière pour valider l'adresse e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si l'adresse e-mail est valide
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (editIndex !== null) {
      // Si editIndex n'est pas null, cela signifie qu'il y a une université en cours d'édition
      const updatedList = [...universities];
      updatedList[editIndex] = formData; // Mettre à jour l'université existante avec les nouvelles données
      setUniversities(updatedList);
      setEditIndex(null); // Réinitialiser l'index d'édition
    } else {
      // Sinon, ajoutez une nouvelle université à la liste
      setUniversities([...universities, formData]);
    }
    // Réinitialiser le formulaire et masquer le formulaire
    setFormData({ name: '', abbreviation: '', email: '' });
    setShowForm(false);
  };

  const deleteRow = (index) => {
    const updatedList = [...universities];
    updatedList.splice(index, 1);
    setUniversities(updatedList);
  };

  const editRow = (index) => {
    // Mettre à jour le formulaire avec les données de l'université sélectionnée
    setFormData(universities[index]);
    setEditIndex(index); // Définir l'index de l'université en cours d'édition
    setShowForm(true); // Afficher le formulaire
  };

  return (
    <>
      <Header />
      <br></br>
      <Col className="mb-5 mb-xl-0" xl="12">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <div className="col">
                <h3 className="mb-0">University</h3>
              </div>
              <div className="col text-right">
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleForm();
                  }}
                  size="sm"
                >
                  Add
                </Button>
              </div>
            </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Abbreviation</th>
                <th scope="col">Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((university, index) => (
                <tr key={index}>
                  <td>{university.name}</td>
                  <td>{university.abbreviation}</td>
                  <td>{university.email}</td>
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(index)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(index)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {showForm && (
            <Form onSubmit={handleSubmit} className={`mt-3 ${showForm ? 'add-form-active' : ''}`}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter university name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="abbreviation">Abbreviation</Label>
                <Input
                  type="text"
                  name="abbreviation"
                  id="abbreviation"
                  placeholder="Enter abbreviation"
                  value={formData.abbreviation}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter university email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                {editIndex !== null ? 'Update' : 'Submit'} 
              </Button>
            </Form>
          )}
        </Card>
      </Col>
    </>
  );
};

export default AddUniversity;
