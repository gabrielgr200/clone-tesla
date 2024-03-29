import styled from 'styled-components';

export const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Heading = styled.div`
margin-top: 16.5vh;
text-align: center;

> h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #393c41;
}

> h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #5c5e62;
}

`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;

  > button {
    background: #fff;
    color: #1a1720;
    opacity: 0.8;
    width: 240px;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 5px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #1a1720;
      color: #fff;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }

`;