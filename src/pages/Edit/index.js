import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import Container from '../../components/Container';
import Form from './styles';

class Edit extends Component {
    render(){
        return (
            <Container>
                <Link to="/">
                    <FaArrowLeft />
                </Link>
                <Form className="form">
                    <input placeholder="Album" />
                    <input placeholder="Artist" />
                    <input placeholder="Year" />
                    <input placeholder="Info" />
                    <button>Edit</button>
                    
                </Form>
                
            </Container>
        )
    }
}

export default Edit;