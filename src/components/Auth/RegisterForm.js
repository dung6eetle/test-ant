import React, {useCallback} from "react";
import classes from "./register.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { authUser, getLoginToken} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { Input } from "../../utils/FormControl";
import { required } from "../../utils/validators/validators";


const RegisterForm = (props) => {
  const handleLogin = useCallback(
    () => {
      console.log('handle logIn', props)
      props.dispatch(getLoginToken())
    },
    [props],
  )
  return (
    <form onSubmit={props.handleSubmit} className={classes.registerFormContainer}>
      <div className={classes.Title}>
        Sign Up
      </div>
      
      <div className={classes.dataForm}>
        <Field
          name={"email"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          placeholder={"Email"}
        />
      </div>
      <div className={classes.dataForm}>
        <Field
          name={"phone"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          type={"tel"}
          placeholder={"Phone"}
        />
      </div>
      <div className={classes.dataForm}>
        <Field
          name={"fullName"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          type={"text"}
          placeholder={"Full name"}
        />
      </div>
      <div className={classes.dataForm}>
        <Field
          name={"password"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          type={"password"}
          placeholder={"Password"}
        />
      </div>
      
      <div className={classes.dataForm}>
        <Field
          name={"birthday"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          type={"text"}
          placeholder={"Birthday"}
        />
      </div>
      <div className={classes.dataForm}>
        <Field
          name={"username"}
          component={Input}
          validate={[required]}
          className={classes.inputForm}
          type={"text"}
          placeholder={"User name"}
        />
      </div>
      <div className={classes.rememberMeForm}>
        <Field
          name={"rememberMe"}
          component={"input"}
          className={classes.inputRemember}
          type={"checkbox"}
        />
        Remember me
      </div>
      
      <button
        className={classes.buttonLogin}
        variant="contained"
        color="primary"
      >
        Regnulsya.bistro
      </button>
      <div
        className={classes.buttonLogin}
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        LOgg
      </div>
    </form>
  );
};

const RegisterReduxForm = reduxForm({
   form: "registrationForm",
})(RegisterForm);

const Register = (props) => {
  const onSubmit = () => {
    props.authUser(); 
    props.getLoginToken()
  };
  if (props.isAuth) {
    return <Redirect to={"/register"} />;
  }
  return <RegisterReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { authUser, getLoginToken })(Register);
