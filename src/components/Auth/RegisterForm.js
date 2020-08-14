import React, { useCallback } from "react";
import classes from "../../classes/RegisterForm.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { authUser, getLoginToken } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { Input } from "../../utils/FormControl";
import { required } from "../../utils/validators/validators";

const RegisterForm = (props) => {
  const handleLogin = useCallback(() => {
    props.dispatch(getLoginToken());
  }, [props]);
  return (
    <div className={classes.form_block}>
      <form onSubmit={props.handleSubmit} className={classes.register_form_container}
      >
        <div className={classes.title}>sign up</div>

        <div className={classes.phone_email_block}>
          <div className={classes.data_form}>
            <Field
              name={"email"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              placeholder={"Email"}
            />
          </div>
          <div className={classes.data_form}>
            <Field
              name={"phone"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              type={"tel"}
              placeholder={"Phone"}
            />
          </div>
        </div>
        <div className={classes.password_fullname_block}>
          <div className={classes.data_form}>
            <Field
              name={"password"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              type={"password"}
              placeholder={"Password"}
            />
          </div>
          <div className={classes.data_form}>
            <Field
              name={"fullName"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              type={"text"}
              placeholder={"Full name"}
            />
          </div>
        </div>
        <div className={classes.username_birthday_block}>
          <div className={classes.data_form}>
            <Field
              name={"username"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              type={"text"}
              placeholder={"User name"}
            />
          </div>
          <div className={classes.data_form}>
            <Field
              name={"birthday"}
              component={Input}
              validate={[required]}
              className={classes.input_form}
              type={"text"}
              placeholder={"Birthday"}
            />
          </div>
        </div>
        <div className={classes.rememberme_form}>
          <Field
            name={"rememberMe"}
            component={"input"}
            className={classes.input_remember}
            type={"checkbox"}
          />
          Remember me
        </div>
        <div className={classes.button_block}>
          <button
            className={classes.button_register}
            variant="contained"
            color="primary"
          >
            Register
          </button>
          <button
            className={classes.button_login}
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const RegisterReduxForm = reduxForm({
  form: "registrationForm",
})(RegisterForm);

const Register = (props) => {
  const onSubmit = () => {
    props.authUser();
    props.getLoginToken();
  };
  if (props.isAuth) {
    return <Redirect to={"/registration"} />;
  }
  return <RegisterReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { authUser, getLoginToken })(Register);
