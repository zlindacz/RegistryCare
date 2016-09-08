import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="home">
        <section className="home-quote-block">
          <h1 className="home-tagline">GIVING</h1>
          <h1 className="home-tagline2">just got a little easier</h1>
          <h2 className="home-quote">No act of kindness, no matter how small, is ever wasted</h2>
          <h3 className="home-quote-source">- Aesop</h3>
          <button className="home-tour-button">Take A Tour</button>
        </section>

        <section className="home-content-block">
          <div className="home-testimonials">

            <div className="home-user">
              <div className="quote">
                <h2 className="home-testimonial-quote">I move a lot. Using Registry Care, I can find dozens of organizations in my local area that will take my gently using clothes, appliances, and furniture.</h2>
                <h3 className="home-testimonial-source">- Linda in San Francisco</h3>
              </div>
              <img className="home-testimonial-photo" src="http://res.cloudinary.com/zlindacz/image/upload/v1473353879/jeans_yqqo1n.jpg" />
            </div>

            <div className="home-org">
              <img className="home-testimonial-photo" src="http://res.cloudinary.com/zlindacz/image/upload/v1473353782/supplies_kaxqyy.jpg" />
              <div className="quote">
                <h2 className="home-testimonial-quote">Ever since we created our registry, our donation center has seen an increase in supplies every month. We are in the middle of expanding our program, so every bit helps.</h2>
                <h3 className="home-testimonial-source">- For the Children in Ohio</h3>
              </div>
            </div>

            <button className="home-tour-button2">Try us out</button>
          </div>

        </section>
      </div>
    );
  }

}

export default withRouter(Home);
