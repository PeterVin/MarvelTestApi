import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { getMarvelCharacter } from "../../utils/apiHandler";
import portrait_xlarge from "../../shared/assets/images/portrait_xlarge.jpeg";

export const ModalWindow = ({ isOpen, handleClose, url }) => {
  const [marvelCharacter, setMarvelCharacter] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    setLoading(true);

    getMarvelCharacter(url).then((marvelCharacter) => {
      setLoading(false);
      setMarvelCharacter(marvelCharacter.data.results[0]);
    });
  }, [url]);

  if (loading && !marvelCharacter) return <p className="loading">Loading ...</p>;

  return (
    <>
      {marvelCharacter && (
        <Modal
          size="lg"
          show={isOpen}
          onHide={handleClose}
          className="character_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="character_name">
                {marvelCharacter ? marvelCharacter.name : null}{" "}
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <object
              data={`${marvelCharacter.thumbnail.path}/portrait_xlarge.jpg`}
              type="image/jpg"
            >
              <img src={portrait_xlarge} alt="Marvel Character Portrait" />
            </object>
            <div  className="character_description">
            {marvelCharacter?.description.length > 2 ? (
              <>
                <h3>{"Description:"}</h3> <p>{marvelCharacter.description} </p>
              </>
            ) : (
              <h3>{"No descripotion jet"}</h3>
            )}
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
