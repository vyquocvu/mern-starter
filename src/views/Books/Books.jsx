import React from "react";
import { connect } from "react-redux";
import { Grid } from "material-ui";
import Edit from 'components/Book/Edit';
import Create from 'components/Book/Create';
import Show from 'components/Book/Show';
import List from 'components/Book/List';
import { Route } from 'react-router-dom';
import { RegularCard, ItemGrid } from "components";
import { 
  fetchBooks,
  createBook,
  // updateBook,
  // deleteBook,
  // getBook 
} from 'actions/book'

class Books extends React.Component{
  constructor(props){
    super()
  }

  render() {
    const { createBook } = this.props;
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Simple Table"
            cardSubtitle="Here is a subtitle for this table"
            content={
              <div>
                <Route exact path='/book/' component={List} />
                <Route path='/book/edit/:id' component={Edit} />
                <Route path='/book/create' render={(props) => <Create { ...props } createBook={createBook}/>} />
                <Route path='/book/show/:id' component={Show} />
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.data || []
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  createBook: () => dispatch(createBook())
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
