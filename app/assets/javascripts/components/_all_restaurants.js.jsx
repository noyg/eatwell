var AllRestaurants = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    onUpdate(restaurant) {
        this.props.onUpdate(restaurant);
    },

    render() {
        // const { restaurants } = this.props;
        var restaurants = this.props.restaurants.map((restaurant) => {
            return (
                    <Restaurant key={restaurant.id} restaurant={restaurant}
                                handleDelete={this.handleDelete.bind(this, restaurant.id)}
                                handleUpdate={this.onUpdate}/>
            )
        });
        return (
            <div>
                {restaurants}
            </div>
        )
    }
});