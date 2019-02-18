import React, { Component } from "react";
import API from "../utils/API";
import ItemCard from "../components/ItemCard";

class Items extends Component {
  state = {
    items: []
  };


  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(allData => this.setState({ items: allData.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <ItemCard
            item={item}>
          </ItemCard>
        ))}
      </div>
    )
  }
}

