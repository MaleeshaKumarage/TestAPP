import React, { Component } from 'react';
import { WebChat } from './components/WebChat';


// import './custom.css'

export class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { isMobile: false };
  }

  render() {
    const mobileChanged = this.state.isMobile ? 'col-12' : 'col-8';
    return (
      // <Layout>
      //   <Route exact path='/' component={Home} />
      //   <Route path='/counter' component={Counter} />
      //   <Route path='/fetch-data' component={FetchData} />
      // </Layout>

      <div className="row" style={{ height: "90%" }}>
        <div style={{ width: "100%" }}>
          <img className="mobileShow " id="logo" src="images/vevro_logo_min.png" alt="vevro" style={{ float: "left", maxHeight: "40px" }} />
          <img className="mobileShow " id="buttonLogo" src="images/background.png" alt="vevro" style={{ float: "right", maxHeight: "40px" }} />

        </div>
        <div className="col-4 portraitHide " style={{ maxHeight: "100%" }}  >
          <div className="row">
            <img id="logo" src="images/vevro_logo_min.png" alt="vevro" style={{ cursor: "pointer", width: "100%", marginRight: 10, maxWidth: 70, marginBottom: "5%", float: "right" }} />
          </div>
          <div className="row " style={{ maxHeight: "100%" }}>
            <img id="logo" src="images/background.png" alt="vevro" style={{ position: "relative", top: "-100px", width: "100%", padding: '1%', float: "center" }} />
            <div className="col-12" style={{ position: "relative", top: "-80px", width: "100%", textAlign: "center", float: "center" }}>
              <span className="lovespan ">Made with <i className="fa fa-heart pulse"></i> by <span onClick={this.onClickVevro} id="lvevro"
                style={{ cursor: "pointer" }}>Vevro<sup>&copy;</sup></span></span>
              <br />
              <a className="pulse" href="https://vevro.com/docs/VevroPrivacyPolicy.pdf" target="_blank" style={{ color: "gray", fontSize: 10 }}>Privacy&nbsp;Policy</a>
            </div>
          </div>
        </div>
        <div className={mobileChanged} style={{ maxHeight: "100%" }} >
          <WebChat />
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 1200
        });
    }, false);
    window.addEventListener('load', () => {
      this.setState({
          isMobile: window.innerWidth < 1200
      });
  }, false);
}
}
