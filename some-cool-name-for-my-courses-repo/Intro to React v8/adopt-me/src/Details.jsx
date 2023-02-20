import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import AdoptedPetContext from "./AdoptedPetContext";

import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);

  const [showModal, setShowModal] = useState(false);
  const [_, setAdoptedPet] = useContext(AdoptedPetContext); // eslint-disable-line no-unused-vars

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💫</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    /** @comment You could catch at this component event bubbling from events happened in the modal (which render in the index.html)*/
    <div className="details">
      <Carousel images={pet.images} />

      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>

      {showModal && (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}? </h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
