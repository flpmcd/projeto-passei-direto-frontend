import React, { Component } from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import DiscList from './styles';
import api from '../../service/api';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      discs: [
        {
          "id": 1,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
        {
          "id": 2,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
        {
          "id": 3,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
        {
          "id": 4,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
        {
          "id": 5,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
        {
          "id": 6,
          "name":"The Dark Side Of The Moon",
          "artist": "Pink Floyd",
          "year": "1974",
          "info":"Best"
        },
      ],
      upload: 'http://localhost:3333/uploads/files',
    };
  }

  componentDidMount() {
    // api.get('discs').then(response => {
    //   this.setState({
    //     discs: response.data,
    //   });
    // });


  }

  render() {
    const { discs, upload } = this.state;

    return (
      <>
        <Container>
          <h1>Discs</h1>
          {discs.map(disc => (
            <>
              {/* <img src={`${upload}/${disc.DiscFile.path}`} width="150" alt="" /> */}
              
              <DiscList>
                
              <img src="https://upload.wikimedia.org/wikipedia/pt/3/3b/Dark_Side_of_the_Moon.png" width="150" height="150" alt="" />
              <div className="info">
                <h4>{disc.name}</h4>
                <div>{disc.artist}</div>
                <div>{disc.year}</div>
                <div>{disc.info}</div>
              </div>
              <div className="icons">
              <Link to={`/edit/${disc.id}`}>
                <FaRegEdit className="icon"/>
              </Link>
              <Link to="/delete">
                <FaRegTrashAlt className="icon"/>
              </Link>
              </div>
              </DiscList>
                          
              </>
          ))}
        </Container>
      </>
    );
  }
}

export default Main;
