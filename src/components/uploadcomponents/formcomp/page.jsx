"use client";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'; // Import the CSS module

function MyForm() {
  const [formData, setFormData] = useState({
    contactPerson: '',
    contactNumber: '',
    email: '',
    attorneyName: '',
    caseName: '',
    briefCaseOverview: '',
    otherServices: '',
    specificInstructions: '',
    servicesDesired: [],
    fileDeliveryTime: '',
    specialReport: [],
    document: null,
    folder: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? [...prevData[name], e.target.value] : prevData[name].filter((item) => item !== e.target.value),
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.Container}>
      <Form onSubmit={handleSubmit}>
        <div className={styles.Rows}>
          <div className={styles.Cols}>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Contact Person <span className={styles.Sym}>*</span></div>
              <Form.Control type="text" placeholder="The person uploading these records" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Contact Number <span className={styles.Sym}>*</span></div>
              <Form.Control type="text" placeholder="Office Phone Number or Mobile" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Email <span className={styles.Sym}>*</span></div>
              <Form.Control type="email" placeholder="Contact Person Email" name="email" value={formData.email} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Attorney Name <span className={styles.Sym}>*</span></div>
              <Form.Control type="text" placeholder="Attorney name" name="attorneyName" value={formData.attorneyName} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Case Name <span className={styles.Sym}>*</span></div>
              <Form.Control type="text" placeholder="FirstName MiddleName LastName" name="caseName" value={formData.caseName} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>BRIEF CASE OVERVIEW <span className={styles.Sym}>*</span></div>
              <Form.Control as="textarea" rows={3} placeholder="Issues (if any) & Date of focus…" name="briefCaseOverview" value={formData.briefCaseOverview} onChange={handleChange} required />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>Other Services (Please Specify)</div>
              {/* Adjust the width as needed */}
        <Form.Control as="textarea" rows={3} placeholder="If any kindly mention.." name="otherServices" value={formData.otherServices} onChange={handleChange} />

            </fieldset>
            <div className={styles.fieldsetone}>Note :
<span className={styles.Sym}> *</span> Required fields are mandatory.</div>
            
          </div>
          <div className={styles.Cols}>
            <fieldset className={styles.fieldset}>
              <div className={styles.Head}>Types of Services Desired</div>
              <Form.Group>
                <Form.Check type="checkbox" label="CHRONOLOGY / MEDICAL SUMMARY" name="servicesDesired" value="CHRONOLOGY / MEDICAL SUMMARY" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="NARRATIVE SUMMARY" name="servicesDesired" value="NARRATIVE SUMMARY" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="HYPERLINKS AND BOOKMARKS" name="servicesDesired" value="HYPERLINKS AND BOOKMARKS" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="MEDICAL OPINION" name="servicesDesired" value="MEDICAL OPINION" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="DEMAND LETTER" name="servicesDesired" value="DEMAND LETTER" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="MEDICAL EXPENSES SHEET" name="servicesDesired" value="MEDICAL EXPENSES SHEET" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="NURSING HOME & PRESSURE ULCER MATRIX" name="servicesDesired" value="NURSING HOME & PRESSURE ULCER MATRIX" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="DEPOSITION SUMMARY" name="servicesDesired" value="DEPOSITION SUMMARY" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="MASS TORT CASE SCREENING" name="servicesDesired" value="MASS TORT CASE SCREENING" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="PAIN AND MEDICATION CHART" name="servicesDesired" value="PAIN AND MEDICATION CHART" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="LIFE CARE PLAN" name="servicesDesired" value="LIFE CARE PLAN" onChange={handleCheckboxChange} />
              </Form.Group>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Head}>File Delivery Time</div>
              <Form.Group>
                <Form.Check type="radio" label="Normal Delivery (Approximately 2 weeks)" name="fileDeliveryTime" value="Normal Delivery" onChange={handleChange} />
                <Form.Check type="radio" label="Week or less (25% surcharge)" name="fileDeliveryTime" value="Week or less" onChange={handleChange} />
                <Form.Check type="radio" label="Request an Estimate" name="fileDeliveryTime" value="Request an Estimate" onChange={handleChange} />
                <Form.Check type="radio" label="Special Delivery" name="fileDeliveryTime" value="Special Delivery" onChange={handleChange} />
              </Form.Group>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Head}>Special Report</div>
              <Form.Group>
                <Form.Check type="checkbox" label="Indexing and PDF-Sorting" name="specialReport" value="Indexing and PDF-Sorting" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Plaintiff Fact Sheet" name="specialReport" value="Plaintiff Fact Sheet" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Graphical Timeline Summary" name="specialReport" value="Graphical Timeline Summary" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Pressure Ulcer Matrix" name="specialReport" value="Pressure Ulcer Matrix" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Medical Queries" name="specialReport" value="Medical Queries" onChange={handleCheckboxChange} />
              </Form.Group>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.Text}>SPECIFIC INSTRUCTIONS</div>
              <Col xs={12} md={8}> 
              <Form.Control as="textarea" rows={3} placeholder="If any kindly mention.." name="specificInstructions" value={formData.specificInstructions} onChange={handleChange} />
              </Col>
            </fieldset>
            
          </div>
        </div>
        <div className={styles.Bottom}>
          <Col>
            <fieldset className={styles.fieldset}>
              <div className={styles.Head}>Select Document <span className={styles.Sym}>*</span></div>
              <Form.Group>
                <Form.Control type="file" name="document" onChange={handleFileChange} />
              </Form.Group>
            </fieldset>
          </Col>
          <Col>
            <fieldset className={styles.fieldset}>
              <div className={styles.Head}>Select Folder <span className={styles.Sym}>*</span></div>
              <Form.Group>
                <Form.Control type="file" name="folder" onChange={handleFileChange} />
              </Form.Group>
            </fieldset>
          </Col>
        </div>
        <div className="d-flex justify-content-center m-3" >
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default MyForm;
