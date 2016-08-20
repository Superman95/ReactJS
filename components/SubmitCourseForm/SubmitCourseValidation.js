const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required!';
  } else if (values.name.length < 3) {
    errors.name = 'Too short name!';
  }

  if (!values.duration || parseInt(values.duration, 10) <= 0) {
    errors.duration = 'Invalid course duration!';
  }

  if (!values.thumbnail) {
    errors.thumbnail = 'Required!';
  }

  return errors;
};

export default validate;
