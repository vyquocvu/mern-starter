import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormControl } from 'material-ui/Form';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.setState,
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.createBook(this.state);
  }

  render() {
    console.log('State', this.props);
    const { isbn, title, author, description, published_year, publisher } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD BOOK
            </h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/">
                <span className="glyphicon glyphicon-th-list" aria-hidden="true">
                </span> 
                Book List
              </Link>
            </h4>
            <FormControl >
                {/* {<InputLabel htmlFor="isbn">ISBN:</InputLabel>} */}
                <input type="text" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
                <br />
                {/* {<InputLabel htmlFor="title">Title:</InputLabel>} */}
                <input type="text" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                {/* {<InputLabel htmlFor="author">Author:</InputLabel>} */}
                <input type="text" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                {/* {<InputLabel htmlFor="description">Description:</InputLabel>} */}
                <textarea
                  name="description"
                  onChange={this.onChange}
                  placeholder="Description"
                  value={description}
                  cols="80"
                  rows="3" />
                {/* {<InputLabel htmlFor="published_date">Published Date:</InputLabel>} */}
                <input type="number" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
                {/* {<InputLabel htmlFor="publisher">Publisher:</InputLabel>} */}
                <input type="text" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              <button type="submit" onClick={this.onSubmit}>Submit</button>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;