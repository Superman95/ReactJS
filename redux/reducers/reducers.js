import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as formReducer} from 'redux-form';
import auth from './auth';
import courses from './courses';
import sidebar from './sidebar';
import lessons from './lessons';
import pages from './pages';

import loginValidation from '../../components/LoginForm/LoginValidation';
import signupValidation from '../../components/SignupForm/SignupValidation';
import createCourseValidation from '../../components/SubmitCourseForm/SubmitCourseValidation';
import accountBasicInfoValidation from '../../components/AccountBasicInfoForm/AccountBasicInfoValidation';
import changePasswordValidation from '../../components/ChangePasswordForm/ChangePasswordValidation';
import createLessonValidation from '../../components/SubmitLessonForm/SubmitLessonValidation';
import createPageValidation from '../../components/SubmitPageForm/SubmitPageValidation';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  form: formReducer.validation({
    loginForm: loginValidation,
    signupForm: signupValidation,
    accountBasicInfoForm: accountBasicInfoValidation,
    changePasswordForm: changePasswordValidation,
    courseForm: createCourseValidation,
    lessonForm: createLessonValidation,
    pageForm: createPageValidation
  }),
  auth,
  lessons,
  pages,
  courses,
  sidebar
});
