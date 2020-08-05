import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

import * as s from "./styles";
import image from "../../assets/password.svg";
import LoginContainer from "../Layout/Login";

import { login } from "../../services/auth";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("Informe um email!"),
  user: yup
    .string()
    .min(8, "O nome deve conter mais de 8 caracteres!")
    .required("Informe um nome de Usuário!"),
});

function Login() {
  const history = useHistory();
  async function handleSubmit({ user }) {
    login(user);
    history.push("/");
  }

  return (
    <LoginContainer>
      <s.Container>
        <s.ContainerLeft>
          <s.bodyLeft>
            <p>EnContact</p>
            <span>Gerenciador de e-mail empresarial.</span>
            <img src={image} alt="" />
          </s.bodyLeft>
        </s.ContainerLeft>
        <s.ContainerRight>
          <s.Title>Faça seu Acesso:</s.Title>
          <Formik
            initialValues={{
              email: "",
              user: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <s.FormikForm>
              <div className="Form-Group">
                <s.FormikField name="email" placeholder="Email" type="text" />
                <s.FormikErrorMessage component="span" name="email" />
              </div>
              <div className="Form-Group">
                <s.FormikField name="user" placeholder="Nome" type="text" />
                <s.FormikErrorMessage component="span" name="user" />
              </div>
              <s.ButtonSubmit type="submit">Logar</s.ButtonSubmit>
            </s.FormikForm>
          </Formik>
          <s.Linked to="/registrar">Faça o seu registro.</s.Linked>
        </s.ContainerRight>
      </s.Container>
    </LoginContainer>
  );
}

export default Login;
