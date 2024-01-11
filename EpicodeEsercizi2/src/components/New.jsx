import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const MyNew = () => {
  return (
    <div>
      <h4 className='px-4'>Watch Again</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <div>
        <CardImg movies={this.state.movies}/>
        </div>
      </Container>
    </div>
  );
};

export default MyNew;