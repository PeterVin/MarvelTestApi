import React, { useEffect, useState } from "react";
import {
  getMarvelCharacterList,
  generateUrlAuth,
} from "../../utils/apiHandler";
import { Card, Container, Title } from "../styled/Styled";
import { api_key, private_key, timeStamps } from "../../utils/key";
import portrait_xlarge from "../../shared/assets/images/portrait_xlarge.jpeg";
import { Pagination } from "../helpers/Paginator";
import { ModalWindow } from "../helpers/CharacterModal";

export const Marvel = () => {
  const [maxCharacter, setMaxCharacter] = useState(0);
  const [marvelCharacterList, setMarvelCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);

  const key = `apikey=${api_key}&hash=${generateUrlAuth(
    timeStamps,
    private_key,
    api_key
  )}`;
  const baseUrl = `https://gateway.marvel.com/v1/public/characters`;
  const [currentUrl, setCurrentUrl] = useState(
    `${baseUrl}?limit=20&offset=0&ts=${timeStamps}&${key}`
  );

  useEffect(() => {
    setLoading(true);
    getMarvelCharacterList(currentUrl).then((list) => {
      setLoading(false);
      setMarvelCharacterList(list.data.results);
      setMaxCharacter(list.data.total);
    });
  }, [currentUrl, page]);

  return (
    <Container>
      <div className="background">
        <Title>MARVEL CHARACTERS</Title>
        {isModalOpen && (
          <ModalWindow
            isOpen={isModalOpen}
            handleClose={() => {
              setIsModalOpen(false);
              setModalUrl(null);
            }}
            url={modalUrl}
          />
        )}
        {!loading ? (
          <div className="character_cards">
            {marvelCharacterList.map((marvelCharacter) => (
              <Card
                key={marvelCharacter.id}
                onClick={() => {
                  setIsModalOpen(true);
                  setModalUrl(
                    `${baseUrl}/${marvelCharacter.id}?ts=${timeStamps}&${key}`
                  );
                }}
              >
                <object
                  data={`${marvelCharacter.thumbnail.path}/portrait_xlarge.jpg`}
                  type="image/jpg"
                >
                  <img src={portrait_xlarge} alt="Marvel Character Portrait" />
                </object>
                <div className="character_card_name">{marvelCharacter.name}</div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="loading">Loading ...</p>
        )}
        <div>
          <Pagination
            goToPrev={
              limit > 0
                ? () => {
                    setPage(page - 1);
                    setLimit(limit - 20);
                    setCurrentUrl(
                      `${baseUrl}?limit=20&offset=${
                        limit - 20
                      }&ts=${timeStamps}${key}`
                    );
                  }
                : null
            }
            goToNext={
              page < maxCharacter / limit
                ? () => {
                    setPage(page + 1);
                    setLimit(limit + 20);
                    setCurrentUrl(
                      `${baseUrl}?limit=20&offset=${
                        limit + 20
                      }&ts=${timeStamps}${key}`
                    );
                  }
                : null
            }
          />
        </div>
      </div>
    </Container>
  );
};
