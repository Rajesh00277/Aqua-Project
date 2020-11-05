export default class Product {
  constructor(id, imageURL, title, description, price, quantity) {
    this.id = id;
    this.imageURL = imageURL;
    this.title = title;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
};