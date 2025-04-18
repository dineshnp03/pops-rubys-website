import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../css/styles.css";
import dish1 from "../images/dish1.jpg";
import dish2 from "../images/dish2.jpg";
import dish3 from "../images/dish3.jpg";
import dish4 from "../images/dish4.jpg";
import dish5 from "../images/dish5.jpg";
import dish6 from "../images/dish6.jpg";
import dish7 from "../images/dish7.jpg";
import dish8 from "../images/dish8.jpg";
import dish9 from "../images/dish9.jpg";
import dish10 from "../images/dish10.jpg";


function Menu() {
  const menuItems = [
    { title: "Margherita Pizza", desc: "Classic with mozzarella & basil", price: "$12", img: dish1 },
    { title: "Spaghetti Carbonara", desc: "Creamy pasta with pancetta", price: "$14", img: dish2 },
    { title: "Caesar Salad", desc: "Crisp lettuce with tangy dressing", price: "$10", img: dish3 },
    { title: "Chocolate Lava Cake", desc: "Rich chocolate with molten center", price: "$8", img: dish4 },
    { title: "Grilled Salmon", desc: "Served with lemon butter sauce", price: "$18", img: dish5 },
    { title: "Garlic Bread", desc: "Toasted with herbs and cheese", price: "$6", img: dish6 },
    { title: "Minestrone Soup", desc: "Italian vegetable soup", price: "$9", img: dish7 },
    { title: "Tiramisu", desc: "Coffee-flavored Italian dessert", price: "$7", img: dish8 },
    { title: "Risotto", desc: "Creamy rice with mushrooms", price: "$13", img: dish9 },
    { title: "Bruschetta", desc: "Toasted bread with tomato basil", price: "$6", img: dish10 }
  ];
  return (
    <div className="page">
      <h1>Our Menu</h1>
      <Row>
        {menuItems.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="menu-card">
              <Card.Img variant="top" src={item.img} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text className="text-muted">{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Menu;