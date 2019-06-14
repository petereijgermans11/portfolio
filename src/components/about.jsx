import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p style={{ maxWidth: 900 }}>Peter Eijgermans is an adventurous and passionate CodeSmith at Ordina Netherlands.
                    He likes to travel around the world with his bike. Always seeking for the unexpected and unknown. 
                    For his job he tries out the latest techniques and frameworks. 
                    He loves to share his experience by speaking at conferences over the World and writing for the Dutch Java magazine and DZone.
                    He believes that you as the front-end developer are the spider in the web to bring the user, the team and the product together.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
