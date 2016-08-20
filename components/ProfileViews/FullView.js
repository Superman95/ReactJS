import React from 'react';

const FullView = ({user}) => {
  return (
    <div>
      <div className="center">
        <a href="javascript:void(0)" className="m-b-1">
          <img src="https://placehold.it/110x110" alt="" className="img-circle"/>
        </a>
        <h1 className=" h2 m-b-0">{user.get('name')}</h1>
        <p className="lead text-muted m-b-0">{user.get('email')}</p>
        <div className="label label-primary">INSTRUCTOR</div>
        <hr/>
      </div>
    </div>
  );
};

FullView.propTypes = {};

export default FullView;
