const validate = values => {
  const errors = {};
  if (!values.currentPassword) {
    errors.currentPassword = 'Required';
  }
  if (!values.newPassword) {
    errors.newPassword = 'Required';
  }
  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = 'Required';
  } else if (values.confirmNewPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'Does not match the entered new password';
  }
  return errors;
};

export default validate;
