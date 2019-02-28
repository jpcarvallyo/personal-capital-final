import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const assets = require('../imgs/personalAssets.png');

class CarouselItemContent extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <h2 className='carousel-h2'>How to get started</h2>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg='4' sm='12'>

            <img alt='Generic image of financial accounts' src={assets}/>
          </Col>
          <Col lg='7' className="align-self-start carousel-right-content">

            <h5 style={{color: '#FD9D2E', fontWeight: 600}}>STEP ONE</h5>
            <h2 style={{color: '#8E959B', fontWeight: 300}}>Register and Link Accounts</h2>
            <div style={{width: '90%'}}>
              <p style={{color: '#5C6670'}}>
                Connect all of your external financial accounts (IRAs, 401ks, mortgages, loans, checking & savings) and get a comprehensive view of your money. Once you have linked your accounts, schedule a free consultation* with a Personal Capital Advisor.
              </p>
              <p>
                * Personal Capital offers wealth management services for a fixed fee. Learn more &raquo;
              </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CarouselItemContent;