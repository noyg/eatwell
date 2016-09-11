import React from 'react';

export default class Restaurant extends React.Component {
    /*getInitialState() {
        return {editable: false}
    }*/

    handleEdit() {
        if (this.state.editable) {
            var id = this.props.restaurant.id;
            var name = this.refs.name.value;
            var address = this.refs.address.value;
            var restaurant = {id: id, name: name, address: address};
            this.props.handleUpdate(restaurant);

        }
        this.setState({editable: !this.state.editable});
    }

    render() {
        var name = this.state.editable ? <input type='text' defaultValue={this.props.restaurant.name} ref='name'/> :
            <h3>{this.props.restaurant.name}
                <small>{this.props.restaurant.rating}</small>
            </h3>;
        var address = this.state.editable ?
            <input type='text' defaultValue={this.props.restaurant.address} ref='address'/> :
            <p>{this.props.restaurant.address}</p>;
        return (
            <div>
                {name}

                {address}
                <button onClick={this.props.handleDelete}>Delete</button>
                <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
            </div>
        )
    }
}