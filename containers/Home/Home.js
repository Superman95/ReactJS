import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    // require the logo image both from client and server
    return (
      <div className="layout-container ls-top-navbar si-l3-md-up">
        <Helmet title="Home"/>
        <div className="card card-stats-primary">
          <div className="card-block">
            <div className="media">
              <div className="media-left media-middle">
                <i className="material-icons text-muted-light">credit_card</i>
              </div>
              <div className="media-body media-middle">
                Your subscription ends on <strong>25 February 2015</strong>
              </div>
              <div className="media-right">
                <a className="btn btn-success btn-rounded" href="pay.html">Upgrade</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header bg-white">
                <div className="media">
                  <div className="media-body">
                    <h4 className="card-title">Courses</h4>
                    <p className="card-subtitle">Your recent courses</p>
                  </div>
                  <div className="media-right media-middle">
                    <a className="btn btn-white" href="#"> View All</a>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-fit m-b-0">
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <a href="take-course.html">Basics of HTML</a>
                    </div>
                    <div className="media-right media-middle">
                      <div className="center">
                        <span className="label label-pill label-primary m-b-05">25%</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <a href="take-course.html">Angular in Steps</a>
                    </div>
                    <div className="media-right media-middle">
                      <div className="center">
                        <span className="label label-pill label-success m-b-05">100%</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <a href="take-course.html">Bootstrap Foundations</a>
                    </div>
                    <div className="media-right media-middle">
                      <div className="center">
                        <span className="label label-pill label-warning m-b-05">80%</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header bg-white">
                <div className="media">
                  <div className="media-body">
                    <h4 className="card-title">Quizzes</h4>
                    <p className="card-subtitle">Your Performance</p>
                  </div>
                  <div className="media-right media-middle">
                    <a className="btn btn-white" href="#"> View All</a>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-fit m-b-0">
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <div>
                        <a href="take-quiz.html">Title of quiz goes here?</a>
                      </div>
                      <small className="text-light">
                        Course:
                        <a href="view-course.html">
                          Basics of HTML
                        </a>
                      </small>
                    </div>
                    <div className="media-right center">
                      <h4 className=" m-b-0">5.8</h4>
                      <span className="text-muted-light">Good</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <div>
                        <a href="take-quiz.html">Directives &amp;Routing</a>
                      </div>
                      <small className="text-light">
                        Course:
                        <a href="view-course.html">Angular in Steps</a>
                      </small>
                    </div>
                    <div className="media-right center">
                      <h4 className=" m-b-0 text-success">9.8</h4>
                      <span className="text-muted-light">Great</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="media-body media-middle">
                      <div><a href="take-quiz.html">Responsive &amp; Retina</a></div>
                      <small className="text-light">Course:
                        <a href="view-course.html">
                          Bootstrap Foundations
                        </a></small>
                    </div>
                    <div className="media-right center">
                      <h4 className=" m-b-0 text-danger">2.8</h4>
                      <span className="text-muted-light">Failed</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-white">
                <h4 className="card-title">Rewards</h4>
                <p className="card-subtitle">Your latest achievements</p>
              </div>
              <div className="card-block center">
                <div className="btn btn-primary btn-circle"><i className="material-icons">thumb_up</i></div>
                <div className="btn btn-danger btn-circle"><i className="material-icons">grade</i></div>
                <div className="btn btn-success btn-circle">
                  <i className="material-icons">bubble_chart</i>
                </div>
                <div className="btn btn-warning btn-circle">
                  <i className="material-icons">keyboard_voice</i>
                </div>
                <div className="btn btn-info btn-circle">
                  <i className="material-icons">event_available</i>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header bg-white">
                <div className="media">
                  <div className="media-body media-middle">
                    <h4 className="card-title">Forum Activity</h4>
                    <p className="card-subtitle">
                      Latest forum topics &amp; comments
                    </p>
                  </div>
                  <div className="media-right media-middle">
                    <a className="btn btn-white" href="forum.html">
                      <i className="material-icons">keyboard_arrow_right</i>
                    </a>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-fit">
                <li className="list-group-item">
                  <div className="media m-b-0">
                    <div className="media-left media-middle">
                      <a href="#">
                      </a>
                    </div>
                    <div className="media-body media-middle">
                      <p className="m-b-0">
                        <a href="forum-thread.html">Can someone help me with the basic Setup?</a>
                      </p>
                      <p className="m-b-0">
                        <small>by: <a href="#">Adrian D.</a></small>
                      </p>
                      <small className="text-muted-light">5 min ago</small>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media m-b-0">
                    <div className="media-left media-middle">
                      <a href="#">
                      </a>
                    </div>
                    <div className="media-body media-middle">
                      <p className="m-b-0">
                        <a href="forum-thread.html">Great work Guys. How do I create a Sidebar?</a>
                      </p>
                      <p className="m-b-0">
                        <small>by: <a href="#">Andrew B.</a></small>
                      </p>
                      <small className="text-muted-light">1 day ago</small>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media m-b-0">
                    <div className="media-left media-middle">
                      <a href="#">
                      </a>
                    </div>
                    <div className="media-body media-middle">
                      <p className="m-b-0">
                        <a href="forum-thread.html">Looking for the Best</a>
                      </p>
                      <p className="m-b-0">
                        <small>by: <a href="#">Michelle S.</a></small>
                      </p>
                      <small className="text-muted-light">2 days ago</small>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
