import React, { useState } from "react";
import { Button, FormSelect, Modal } from "react-bootstrap";
import { serviceList } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

export default function QuoteModal({ on, toggle, services }) {
    const navigate = useNavigate()

  const [selectedService, setSelectedService] = useState("null");

  const handleService = (service) => {
    console.log(service);
    setSelectedService(service);
  };

  const goToServicePage = () => {
    navigate(`/service/${selectedService}`);
  };

  return (
    <Modal
      show={on}
      scrollable={false}
      centered
      className="modal rounded-1 font-weight-italic"
    >
      <Modal.Header className="rounded-3">
        <h3 style={{ fontFamily: "titleFontMd", fontSize: "0.9em" }}>
          What would you like to do?
        </h3>
        <i
          onClick={() => {
            toggle();
            setSelectedService("null");
          }}
          className="bi bi-x"
          style={{ cursor: "pointer" }}
        ></i>
      </Modal.Header>
      <Modal.Body className="rounded-3" style={{ fontFamily: "textFont" }}>
        <div className="w-100 d-flex flex-column align-items-center gap-2 justify-content-center">
          <FormSelect
            onChange={(e) => handleService(e.currentTarget.value)}
            style={{ maxWidth: "15em", fontFamily: "textFont" }}
          >
            <option value={"null"}>Select a Service</option>
            {   
                serviceList.map((serv,index)=>(<option key={index} value={serv.id}>{serv.title}</option>))
            }
          </FormSelect>
          <Button
            disabled={selectedService == "null" ? true : false}
            className="text-light"
            style={{ maxWidth: "15em" }}
            onClick={goToServicePage}
          >
            Proceed
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
