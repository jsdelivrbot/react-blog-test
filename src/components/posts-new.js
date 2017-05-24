import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

import Validator from '../utilities/validation';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <field.elementType
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-danger">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    elementType="input"
                    type="text"
                    component={this.renderField}
                    validate={[
                        Validator.required({msg: 'Please enter a title for your post'})
                    ]}
                />
                <Field
                    label="Categories"
                    name="categories"
                    elementType="input"
                    type="text"                    
                    component={this.renderField}
                    validate={[
                        Validator.required({msg: 'Please enter a category'})
                    ]}
                />
                <Field
                    label="Content"                
                    name="content"
                    elementType="textarea"
                    component={this.renderField}
                    validate={[
                        Validator.required()
                    ]}
                />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-secondary" to="/">Cancel</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);