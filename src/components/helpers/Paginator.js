import { PaginationButton, PaginationContainer } from "../styled/Styled";

export const Pagination = ({ goToNext, goToPrev }) => {
  return (
    <PaginationContainer>
      {goToPrev && (
        <PaginationButton onClick={goToPrev}>{"< PREVIOUS"}</PaginationButton>
      )}
      {goToNext && (
        <PaginationButton onClick={goToNext}>{"NEXT >"}</PaginationButton>
      )}
    </PaginationContainer>
  );
};
