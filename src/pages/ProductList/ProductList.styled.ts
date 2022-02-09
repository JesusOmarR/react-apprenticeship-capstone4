import styled from 'styled-components'

export const ProductsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  .pagination-container {
    display: flex;
    margin: 1rem auto;
  }
  .grid-wrapper {
    text-align: center;
    display: grid;
    grid-template-columns: minmax(80vw, 1fr);
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: minmax(70vw, 1fr);
    }
  }
`

export const SideBar = styled.div`
  width: 15rem;
  height: 100vh;
  position: sticky;
  top: 2rem;
  background-color: grey;
  padding: 1rem 0.95rem;

  @media only screen and (min-width: 320px) and (max-width: 420px) {
    width: 5rem;
  }
  @media screen and (min-width: 420px) and (max-width: 767px) {
    width: 6rem;
  }

  p {
    margin: 3rem auto;
    color: white;
    font-size: 1.5rem;

    :hover {
      color: #615e5b;
      cursor: pointer;
    }
    @media only screen and (min-width: 320px) and (max-width: 420px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 420px) and (max-width: 767px) {
      font-size: 1rem;
    }
  }

  .active {
    color: #86ebf5;
  }
`
export const ProductsGrid = styled.div`
  display: grid;
  width: 75vw;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  margin: 1rem auto;
  align-items: center;
  place-items: center;
  justify-items: center;
`
