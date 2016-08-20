
const validate = values => {
  const errors = {};
  if (!values.order || parseInt(values.order, 10) <= 0) {
    errors.order = 'Invalid lesson order!';
  }


  return errors;
};

export default validate;
