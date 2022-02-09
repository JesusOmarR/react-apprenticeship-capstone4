import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 16.1rem;
  cursor: pointer;
  height: 27rem;
  border-radius: 50px;
  paddin: 1rem 1rem;
  transition: box-shadow 0.5s, transform 0.5s;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  border-radius: 5px;
  margin: 1rem auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  .item-name {
    font-size: 1.1rem;
  }
  img {
    border-radius: 5px;
    max-width: 15.9rem;
    margin: auto;
  }

  h2 {
    font-size: 1.3rem;
  }

  .item-info {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0.5rem;
    color: black;
  }

  .more-info {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.9rem 1rem;

    border-bottom-left-radius: 50px;
    background-color: #f3dbc3;
    margin-bottom: 4rem;
    transition: all 0.5s, border-radius 2s, top 1s;

    img {
      width: 1.2rem;
      display: block;
      margin-bottom: 5px;
      margin-left: 8px;
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
        width: 14rem;
        height: 18rem;
        display: block;
        transform: scale(1);
        transform: translateY(0);
      }
    }
  }
`
