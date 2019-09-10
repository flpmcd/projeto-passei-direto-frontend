import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    margin: 15px;
  }

  a {
    text-decoration: 'none';
  }

  .wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .head span {
    display: flex;
    align-items: center;
    color: black;
  }

  .head a {
    text-decoration: none;
  }

  .icons {
    margin: 15px 10px;
  }

  .icon {
    margin-left: 10px;
    font-size: 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default Container;
