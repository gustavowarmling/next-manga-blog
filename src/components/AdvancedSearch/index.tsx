import { AdvancedSearchModal } from "../AdvancedSearchModal";
import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { Container, SearchBoxContainer, AdvancedFilter } from "./styles";

export function AdvancedSearch() {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Container>
        <SearchBoxContainer onSubmit={handleSubmit}>
          <input type="search" onChange={(e) => setSearch(e.target.value)} />
          <BiSearch color="#fff" />
        </SearchBoxContainer>

        <AdvancedFilter onClick={() => openModal()}>
          <FaFilter />
        </AdvancedFilter>
      </Container>

      <AdvancedSearchModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
}
