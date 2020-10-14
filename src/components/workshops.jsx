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
                    <img src='images/javadayistanbul.jpeg' width="280px" class="lazy card-img-top" alt="Tesla Battery Range Calculator with Vue.js or
                            ReactJS"/>
                    <div className="desc">
                        <h3>Workshop Vue.js and ReactJS (Instanbul, @JavaDayIstanbul, September 2020)</h3>
                        <p>I give a talk and a workshop about building a Dashboard in Vue and React @JavaDayIstanbul
                           We are going to make a dashboard with which we can calculate how much range the Tesla models has under different circumstances (speed, wheelsize ect.)</p>
                        <a href="https://github.com/petereijgermans11/workshop-reactjs-vuejs" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/angular9.jpeg' width="280px" class="lazy card-img-top" alt="angular9"/>
                    <div className="desc">
                        <h3>Angular advanced Course (Ordina, March 2020)</h3>
                        <p>I have made an ultimate Angular course for Ordina and the Frontend community. What you will learn is how to develop modern, complex, responsive and scalable web applications with Angular 9. 
                        </p>
                        <a href="https://github.com/petereijgermans11/workshop-angular10" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/pwa_ducks.jpeg' width="280px" class="lazy card-img-top" alt="pwa"/>
                    <div className="desc">
                        <h3>Workshop PWA (@Clockwork Ordina, March 2020)</h3>
                        <p>I give a workshop about Progressive Web Apps PWA @clockwork. It was about making an app for making selfies and posting selfies with the BackgroundSync Api, and receiving and enabling Push Notifications with the Push Api. 
                        </p>
                        <a href="https://github.com/petereijgermans11/progressive-web-app/" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
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
                    <img src='images/graphql.jpg' width="280px" class="lazy card-img-top" alt="graphql"/>
                    <div className="desc">
                        <h3>Graphql and Apollo (Ordina, April 2019)</h3>
                        <p>Ordina JTech is organizing another learning weekend on the beach of Renesse. I gave a workshop there about Graphql, Apollo and React
                        </p>
                        <a href="https://github.com/petereijgermans11/workshop-graphql" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/angularreactiveforms.png' width="280px" class="lazy card-img-top" alt="angularreactiveforms"/>
                    <div className="desc">
                        <h3>Angular Reactive Forms (Ordina, May 2019)</h3>
                        <p>I give a workshop about 'Reactive Forms in Angular'. It is part of an accelerator program of Ordina to boost your Frontend expertise to the Next Level!
                        </p>
                        <a href="https://github.com/petereijgermans11/accelerator-programma" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
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
                <div className="services color-1">
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
