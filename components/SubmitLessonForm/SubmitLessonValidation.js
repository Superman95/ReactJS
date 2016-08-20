const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required!';
  } else if (values.title.length < 3) {
    errors.title = 'Too short name!';
  }

  if (!values.thumbnail) {
    errors.thumbnail = 'Required!';
  }

  if (!values.order || parseInt(values.order, 10) <= 0) {
    errors.order = 'Invalid lesson order!';
  }


  return errors;
};

export default validate;
