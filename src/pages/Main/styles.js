import styled from 'styled-components';

const DiscList = styled.div`
background: #f4f4f4;
border-radius: 10px;
width: 80%;
margin: 20px auto;
display: flex;

.info {
    flex:1;
    margin: 10px;
}
.info div{
    padding: 5px;
    margin: 5px 5px;
  }

  .info h4 {
      margin: 5px 10px;
  }

  .icons {
      margin: 15px 10px;
      font-size: 15px;
  }

  .icon {
      margin-left: 5px;
      text-decoration: none;
  }

`;

export default DiscList;
