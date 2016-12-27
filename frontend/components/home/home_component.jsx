import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.guestLogin();
  }


  render() {
    return (
      <div className="home">
        <section className="home-quote-block">
          <h1 className="home-tagline">giving</h1>
          <h1 className="home-tagline2">just got easier</h1>
          <button className="home-tour-button" onClick={this.guestLogin}>Take a tour</button>
        </section>

        <section className="home-content-block">
          <div className="home-testimonials">

            <div className="home-user">
              <div className="quote">
                <h2 className="home-testimonial-quote">I move a lot. Using Registry Care, I can find dozens of organizations in my local area that will take my gently using clothes, appliances, and furniture.</h2>
                <h3 className="home-testimonial-source">- Linda in San Francisco</h3>
              </div>
              <img className="home-testimonial-photo"
                   src="http://res.cloudinary.com/zlindacz/image/upload/c_scale,h_300,q_100,w_533/v1475086346/furniture_yb6krb.jpg"
                   alt="photo of a single seat sofa on a street outside" />
            </div>

            <div className="home-org">
              <img className="home-testimonial-photo"
                   src="http://res.cloudinary.com/zlindacz/image/upload/c_scale,h_300,q_100,w_450/v1475086345/cafeteria5_dmbfek.jpg"
                   alt="photo of a green-tiled cafeteria" />
              <div className="quote">
                <h2 className="home-testimonial-quote">Ever since we created our registry, our donation center has seen an increase in supplies every month. We are in the middle of expanding our program, so every bit helps.</h2>
                <h3 className="home-testimonial-source">- For the Children in Ohio</h3>
              </div>
            </div>

            <div className="why-quotes">
              <h2 className="home-quote">No act of kindness, no matter how small, is ever wasted</h2>
              <h3 className="home-quote-source">- Aesop</h3>
            </div>

            <div className="last-bid">
              <h2 className="give-today">Start giving today.</h2>
              <button className="home-tour-button2" onClick={this.guestLogin}>Try us out</button>
            </div>
          </div>

        </section>
      </div>
    );
  }

}

export default withRouter(Home);

// IMAGE CREDIT:
// Furniture & Cafeteria: www.pexels.com
