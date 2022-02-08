import styled from 'styled-components'

export const HomeContainer = styled.div`
  .banner-carousel {
    text-align: center;
    display: flex;
    color: red;
    img {
      width: 100vw;
      height: 35vh;
    }

    h3 {
      color: white;
      margin: 1rem auto;
      padding: 0 1rem;
      background-color: black;
      width: fit-content;
    }

    p {
      color: white;
      margin: 0 auto;
      padding: 0 1rem;
      width: fit-content;

      background-color: black;
    }

    @media only screen and (min-width: 768px) {
      img {
        width: 100vw;
        height: 55vh;
      }
    }
  }
  .banner-item {
    color: black;
  }
`

export const ListContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  margin: 1rem auto;
  align-items: center;
`

export const CategoriesContainer = styled.div`
  display: block;

  text-align: center;
  width: 60vw;
  margin: 0 auto;
`

export const SliderItem = styled.div`
  display: inline-block;
  text-align: center;
  position: relative;
  display: inline-block;
  text-align: center;

  img {
    width: 16rem;
  }

  h3 {
    font-size: 1.4rem;
    position: absolute;
    top: auto;
    border-radius: 5px;
    background-color: grey;
    padding: 0.3rem 0.5rem;
    left: auto;
    color: white;
  }
`
