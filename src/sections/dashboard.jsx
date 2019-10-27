import React from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';


class Dashboard extends React.Component {
  state = {};
  rand= '';
  
  render() {

   // var min = 1;
   // var max = 4;
   // this.rand =  Math.round( min + (Math.random() * (max-min)) );
   this.rand = '¡Hola Nativ@!';


    return (<Content title="Dashboard" subTitle={this.rand} browserTitle="Hola Nativo!!">
      <Row>
        <Col xs={12} md={6}>
          <Box title="Total registros" type="primary" closable collapsable footer={<Button onClick={this.handleClick} type="danger" text="Ir al panel" />}>
            Hello World
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}


export default Dashboard; // Don’t forget to use export default!
 