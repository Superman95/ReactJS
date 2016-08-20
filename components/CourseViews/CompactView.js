import React from 'react';

const CompactView = () => {
  return (
    <div className="card">
      <div className="card-header bg-white">
        <div className="media">
          <div className="media-left media-middle">
            <a href="instructor-course-edit.html">
              <img src="https://placehold.it/100x58" alt="Card image cap" width="100" className="img-rounded"/>
            </a>
          </div>
          <div className="media-body media-middle">
            <h4 className="card-title"><a href="instructor-course-edit.html">Learn VueJs</a></h4>
            <span className="label label-primary">$1230</span> <span
            className="label label-default">34 SALES</span>
          </div>
          <div className="media-right media-middle">
            <a href="instructor-course-edit.html" className="btn btn-white">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CompactView.propTypes = {};

export default CompactView;
