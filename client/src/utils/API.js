import axios from "axios";

export default {

  getItems: function() {
    console.log("Running API getItems");
    return(
      axios.get("/api/items")
    )
  }
  
}