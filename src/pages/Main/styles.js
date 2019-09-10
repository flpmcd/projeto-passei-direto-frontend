import styled from 'styled-components';

export const DiscList = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;

  .no-image {
    width: 150px;
    height: 150px;
    text-align: center;
    padding-top: 40px;
    font-size: 70px;
  }
  .info {
    flex: 1;
    margin: 10px;
  }
  .info div {
    padding: 5px;
    margin: 5px 5px;
  }

  .info h4 {
    margin: 5px 10px;
  }
`;

export const Search = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #287aa9;
  font-size: 15px;
`;
