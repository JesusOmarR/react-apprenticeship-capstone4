import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 19rem;
  cursor: pointer;
  height: 29rem;
  border-radius: 50px;
  paddin: 1rem 1rem;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  border-radius: 5px;
  margin: 1rem auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  .item-name {
    font-size: 1.1rem;
  }
  img {
    border-radius: 5px;
    width: 18rem;
    margin: auto;
  }

  h2 {
    font-size: 1.3rem;
  }

  .item-info {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 1rem;
    color: black;
  }

  .more-info {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem 0.8rem;
    border-bottom-left-radius: 10px;
    background-color: grey;
    transition: all 0.5s, border-radius 2s, top 1s;

    img {
      width: 1.5rem;
      display: block;
    }
    .hidden-info {
      display: none;
      transform: scale(0.5);
      transform: translateY(-200%);
    }

    :hover {
      img {
        width: 1.5rem;
        display: none;
      }
      .hidden-info {
        width: 17rem;
        height: 20rem;
        display: block;
        transform: scale(1);
        transform: translateY(0);
      }
    }
  }
`
