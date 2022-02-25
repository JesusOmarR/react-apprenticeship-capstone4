import styled from 'styled-components'

export const CartTable = styled.table`
  font-size: 1rem;
  img {
    width: 5rem;
  }
  th {
    margin: 0 1rem;
    padding: 0 1rem;
  }
  td {
    margin: 0 1rem;
    padding: 0 1rem;
    width: 10rem;
  }
  input {
    width: 5rem;
  }

  button {
    font-size: 1rem;
    width: auto;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.5rem;
    img {
      width: 2rem;
    }
    td {
      margin: 0 1rem;
      padding: 0 0.7rem;
      width: 3.5rem;
    }
    input {
      width: 3rem;
    }
    button {
      font-size: 0.5rem;
      padding: 0;
      width: 2rem;
    }
  }
`

export const CartContainer = styled.div`
  min-height: 100vh;
  justify-content: center;
  margin: 1rem 2rem;

  h2 {
    font-size: auto;
  }

  @media screen and (max-width: 767px) {
    margin: 1rem 0rem;

    h2 {
      font-size: 1rem;
    }

    .checkout {
      font-size: 0.5rem;
      width: 5rem;
    }
  }
`
