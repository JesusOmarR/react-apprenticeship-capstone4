import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 1rem auto;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 100%;
  }
`

export const GalleryImages = styled.div`
  width: 30rem;
  img {
    width: 30rem;
    @media screen and (max-width: 767px) {
      width: 90vw;
    }
  }
  margin: 1rem 1rem;

  @media screen and (max-width: 767px) {
    width: 90vw;
    margin: 1rem auto;
  }
`

export const InfoDiv = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 90vw;
    margin: 0 auto;
  }

  .badges-container {
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem 0;
  }

  .badge {
    margin: 0 0.2rem;
  }

  .qty-input {
    width: 10rem;
    margin: 1rem 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .cart-btn {
    width: 10rem;
  }

  table {
    margin: 1rem 0;
  }
`
