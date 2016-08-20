import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  Root,
  App,
  Home,
  Login,
  SignUp,
  CourseCreate,
  MyCourses,
  CourseEdit,
  MyProfile,
  AccountLayout,
  AccountBasicInfo,
  ChangePassword,
  LessonCreate,
  PageCreate,
  LessonEdit
} from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route component={Root}>
      <Route path="/" component={App}>
        { /* Home (main) route */ }
        <Route path="course-create" component={CourseCreate}/>
        <Route path="course-edit/:slug" component={CourseEdit}/>
        <Route path="lesson-create" component={LessonCreate}/>
        <Route path="page-create" component={PageCreate}/>
        <Route path="lesson-edit/:lessonId" component={LessonEdit}/>
        <Route path="my-courses" component={MyCourses}/>
        <Route path="my-profile" component={MyProfile}/>
        <Route path="account" component={AccountLayout}>
          <Route path="basic-info" component={AccountBasicInfo}/>
          <Route path="change-password" component={ChangePassword}/>
          <IndexRoute component={AccountBasicInfo}/>
        </Route>
        <IndexRoute component={Home}/>
      </Route>
      <Route path="login" component={Login}/>
      <Route path="signup" component={SignUp}/>
    </Route>
  );
};
