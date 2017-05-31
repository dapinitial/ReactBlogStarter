import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
