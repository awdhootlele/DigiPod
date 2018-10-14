import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Field, reduxForm } from 'redux-form';

const renderTextField = ({
  input,
  label,
  id,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={touched && error}
    error={!!(touched && error)}
    {...input}
    {...custom}
    autoFocus
    margin="dense"
    id={id}
    label={label}
    type={type}
    fullWidth
  />
);

const ForgotPassword = props => {
  const { open, handleRequestClose, handleRequestSubmit, handleSubmit } = props;
  return (
    <Dialog open={open} onClose={handleRequestClose}>
      <DialogTitle>Forgot Password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your Email-id. Password reset link will be sent to this email
          id.
        </DialogContentText>
        <Field
          component={renderTextField}
          name="email"
          autoFocus
          id="name"
          label="Email Address"
          type="email"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRequestClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(data => handleRequestSubmit(data))}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validate = values => {
  const errors = {};
  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export default reduxForm({
  form: 'forgotPasswordForm',
  validate
})(ForgotPassword);
