import React, { Component } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GiCompactDisc } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { DiscList, Search } from './styles';
import api from '../../service/api';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      discs: [],
      upload: 'http://localhost:3333/uploads/files',
      errors: [],
    };
  }

  componentDidMount() {
    api.get('discs').then(response => {
      this.setState({
        discs: response.data,
      });
    });
  }

  handleDelete = id => {
    try {
      api.delete(`/discs/${id}`).then(response => {
        this.setState({
          discs: response.data,
        });
      });
    } catch (error) {
      this.setState({
        errors: [...this.state.errors, 'Try Again'],
      });
    }
  };

  handleSearch = e => {
    const text = e.target.value;
    api.get(`/discs/${text}`).then(response => {
      this.setState({
        discs: response.data,
      });
    });
  };

  render() {
    const { discs, upload, errors } = this.state;
    return (
      <>
        <Container>
          {errors &&
            errors.map(error => {
              console.log(error);
            })}
          <div className="wrapper">
            <div className="head">
              <h1>Discs</h1>
              <Link to="/add">
                <span>
                  Add Disc <IoMdAddCircleOutline className="icon" />
                </span>
              </Link>
            </div>
            <Search placeholder="Search..." onChange={this.handleSearch} />
            {discs &&
              discs.map(disc => (
                <DiscList key={disc.id}>
                  {!disc.DiscFile.path ? (
                    <div className="no-image">
                      <GiCompactDisc />
                    </div>
                  ) : (
                    <img
                      src={`${upload}/${disc.DiscFile.path}`}
                      width="150"
                      alt=""
                    />
                  )}
                  <div className="info">
                    <h4>{disc.name}</h4>
                    <div>{disc.artist}</div>
                    <div>{disc.year}</div>
                    <div>{disc.info}</div>
                  </div>
                  <div className="icons">
                    <Link to={`/edit/${disc.id}`} title="Edit">
                      <FaRegEdit className="icon" />
                    </Link>
                    <FaRegTrashAlt
                      className="icon"
                      onClick={this.handleDelete.bind(this, disc.id)}
                      title="Delete"
                    />
                  </div>
                </DiscList>
              ))}
            {discs.length === 0 && <p>No disc found.</p>}
          </div>
        </Container>
      </>
    );
  }
}

export default Main;
