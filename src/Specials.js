import React from 'react';

function Specials() {
  return (
    <section className="highlights">
      <h2>This Week's Specials</h2>
      <div className="specials-container">
        <div className="special">
          {/* Correct path referencing images in public/icons_assets */}
          <img src={`${process.env.PUBLIC_URL}/icons_assets/greek_salad.jpg`} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh tomatoes, cucumbers, olives, and feta cheese.</p>
          <p>$12.99</p>
        </div>
        <div className="special">
          <img src={`${process.env.PUBLIC_URL}/icons_assets/bruchetta.svg`} alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Grilled bread topped with tomatoes, garlic, and basil.</p>
          <p>$8.99</p>
        </div>
        <div className="special">
          <img src={`${process.env.PUBLIC_URL}/icons_assets/lemon_dessert.jpg`} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>A sweet, tangy lemon pie with whipped cream.</p>
          <p>$6.99</p>
        </div>
      </div>
      <button className="order-btn">Order Online</button>
    </section>
  );
}

export default Specials;

