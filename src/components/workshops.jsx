import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="workshops">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Workshops frontend frameworks</h2>
            </div>
            </div>
            
            <div className="row row-pt-md">

            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/tesla.png' width="280px" class="lazy card-img-top" alt="Tesla Battery Range Calculator with Vue.js or
                            ReactJS"/>
                    <div className="desc">
                        <h3>Workshop Vue.js and ReactJS (Philadelphia USA, LibertyJS, October 2019)</h3>
                        <p>I give a talk and a workshop about building a Dashboard in Vue and React @LibertyJS
                           We are going to make a dashboard with which we can calculate how much range the Tesla models has under different circumstances (speed, wheelsize ect.)</p>
                        <a href="https://github.com/petereijgermans11/workshop-reactjs-vuejs" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/angularreactiveforms.png' width="280px" class="lazy card-img-top" alt="angularreactiveforms"/>
                    <div className="desc">
                        <h3>Angular Reactive Forms (Ordina, May 2019)</h3>
                        <p>I gave a workshop about 'Reactive Forms in Angular'. It is part of an accelerator program of Ordina to boost your Frontend expertise to the Next Level!
                        </p>
                        <a href="https://github.com/petereijgermans11/accelerator-programma" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/angular7.png' width="280px" class="lazy card-img-top" alt="angular7"/>
                    <div className="desc">
                        <h3>Angular 7 advanced Course (Ordina, May 2019)</h3>
                        <p>I have made an Angular course for Ordina JTech. Participants receive a certificate at the end of
                            the three-day course
                        </p>
                        <a href="https://github.com/petereijgermans11/workshop-angular7" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/graphql.jpg' width="280px" class="lazy card-img-top" alt="angular7"/>
                    <div className="desc">
                        <h3>Graphql and Apollo (Ordina, April 2019)</h3>
                        <p>Ordina JTech is organizing another learning weekend on the beach of Renesse. I gave a workshop there about Graphql, Apollo and React
                        </p>
                        <a href="https://github.com/petereijgermans11/workshop-graphql" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <img src='images/nativescriptfirebase.jpeg' width="280px" class="lazy card-img-top" alt="building apps with NativeScript en Firebase"/>
                    <div className="desc">
                        <h3>Workshop NativeScript with Firebase (Snowcamp.io, Jan 2019)</h3>
                        <p>For Snowcamp.io I created a workshop about building apps with NativeScript and
                            Angular or Vue.js. For the backend I used Firebase.</p>
                        <a href="https://github.com/petereijgermans11/workshop-nativescript-firebase" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/tesla.png' width="280px" class="lazy card-img-top" alt="Tesla Battery Range Calculator with Vue.js or
                            ReactJS"/>
                    <div className="desc">
                        <h3>Workshop Vue.js and ReactJS (GDG Heraclion, DevFest Greece Nov/Dec 2018)</h3>
                        <p>The workshop is about creating a Tesla Battery Range Calculator with Vue.js or
                            ReactJS. And finally you implement state management with Redux or Vuex.</p>
                        <a href="https://github.com/petereijgermans11/workshop-reactjs-vuejs" target="_blank" class="btn btn-primary">Check It Out</a>
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
