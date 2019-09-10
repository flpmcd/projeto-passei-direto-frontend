import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Container from '../../components/Container';
import FormStyle from './styles';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      disc: {},
      file: null,
      action: '',
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    if (id) {
      api.get(`/disc/${id}`).then(response => {
        this.setState({
          disc: response.data,
        });
      });
    } else {
      this.setState({
        action: 'create',
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { disc, file, action } = this.state;

    const formData = new FormData();
    formData.append('name', disc.name);
    formData.append('artist', disc.artist);
    formData.append('year', disc.year);
    formData.append('info', disc.info);
    formData.append('file', file);

    try {
      if (action === 'create') {
        api
          .post('discs', formData)
          .then(response => {
            console.log(response);
            this.setState({
              action: 'redirect',
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        api.put('discs', disc).then(response => {
          console.log(response);
          this.setState({
            action: 'redirect',
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleInputText = e => {
    this.setState({
      disc: {
        ...this.state.disc,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleInputFile = e => {
    this.setState({
      disc: { ...this.state.disc },
      file: e.target.files[0],
    });
  };

  render() {
    const { disc, action } = this.state;
    if (action === 'redirect') {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <FormStyle className="form" onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Album"
            onChange={this.handleInputText}
            value={disc ? disc.name : ''}
            name="name"
            required
          />
          <input
            id="artist"
            type="text"
            placeholder="Artist"
            onChange={this.handleInputText}
            value={disc ? disc.artist : ''}
            name="artist"
            required
          />
          <input
            id="year"
            type="text"
            placeholder="Year"
            onChange={this.handleInputText}
            value={disc ? disc.year : ''}
            name="year"
            required
          />
          <input
            id="info"
            type="text"
            placeholder="Info"
            onChange={this.handleInputText}
            value={disc ? disc.info : ''}
            name="info"
            required
          />
          <input
            id="file"
            name="file"
            type="file"
            onChange={this.handleInputFile}
          />
          <button type="submit">Save</button>
        </FormStyle>
      </Container>
    );
  }
}

export default Form;
