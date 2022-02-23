import styled from 'styled-components'

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  input {
    margin: 0.5rem 0;
    width: 28rem;
  }

  textarea {
    width: 28rem;
  }

  @media screen and (max-width: 767px) {
    width: 20rem;
    input {
      margin: 0.5rem auto;
      width: 15rem;
    }

    textarea {
      margin: 0.5rem auto;
      width: 15rem;
    }
  }
`
export const CheckOutContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;

  table {
    width: auto;
    height: fit-content;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    table {
      width: 90vw;
    }
  }
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
  text-align: center;

  button {
    width: fit-content;
    margin: 0 auto;
  }
`
