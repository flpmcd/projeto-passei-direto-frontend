import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
border-radius: 10px;
width: 80%;

.back {
    font-size: 30px;
}

input {
    border 2px solid #f4f4f4;
    border-radius: 5px;
    margin 5px 20px;
    padding: 15px;
}

input:focus {
    border: 2px solid #287aa9;
}

button {
    background: #287aa9;
    padding: 15px;
    font-weight: 600;
    color: #e4e4e4;
    border-radius: 10px;
    margin-top: 10px;
}
`;

export default Form;
