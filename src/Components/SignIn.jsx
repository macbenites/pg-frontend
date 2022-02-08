import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { SignInDiv, LinkToSignIn, BtnSignIn } from "../Styles/SignIn";
import { InputForm } from "../Styles/reusable/Input";
import { context } from "../Context/authContext";
import { useContext } from "react";
import { auth } from "../firebase";
import { ErrorMessage, Error } from "../Styles/Login.js";
import { useForm } from "react-hook-form";

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const {signUp} = useContext(context);
  console.log(signUp);

  const onSubmit = (input) => {
    console.log(input);
    //e.preventDefault();
      // dispatch(createAccount(input));
      if(Object.entries(errors).length === 0){
        signUp(auth , input.email , input.password)
        alert("Cuenta creada con éxito");        
        navigate('/login');
        reset();
    }else{
      alert('Completar los campos requeridos')
    }
  };

  return (
    <div>
      <Logo />
      <SignInDiv>
        <h4>Creá tu cuenta</h4>
        <h5>
          Ya tenés tu cuenta?<LinkToSignIn to="/login"> Log In</LinkToSignIn>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Nombre"
              {...register("name", {
                required: {
                  value: true,
                  message: "*Nombre requerido!"
                },
                pattern: {
                  value: /^[A-Za-zÃ‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/,
                  message: "*El nombre solo admite letras y espacios en blanco!"
                },
                minLength: {
                  value: 3, 
                  message: '*El nombre debe contener mínimo 3 caracteres!'
                  }
              })}
            />
            <InputForm
              type="text"
              autoComplete="off"
              name="username"
              placeholder="Usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "*Usuario requerido!",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_-]+$/,
                  message: "*El usuario sólo admite letras y números!",
                },
                maxLength: {
                  value: 10, 
                  message: '*El usuario debe contener máximo 10 caracteres!'
                  },
                minLength: {
                  value: 4, 
                  message: '*El usuario debe contener mínimo 3 caracteres!'
                  }
              })}
            />
          </div>
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              name="neighborhood"
              placeholder="Barrio"
              {...register("neighborhood", {
                required: {
                  value: true,
                  message: "*Barrio requerido!",
                },
                pattern: {
                  value: /^[A-Za-zÃ‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/,
                  message: "*El barrio solo admite letras y espacios en blanco!"
                },
              })}
            />
            <InputForm
              type="text"
              autoComplete="off"
              name="position"
              placeholder="Posición"
              {...register("position", {
                required: {
                  value: true,
                  message: "*Posición requerida!",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "*La posición no admite números, caracteres especiales ni espacios en blanco!",
                },
              })}
            />
          </div>
          <InputForm
            type="email"
            autoComplete="off"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "*Email requerido!",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*El formato del email ingresado no es correcto!",
              },
            })}
          />
          <InputForm
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "*Contraseña requerida!",
              },
              pattern: {
                value: /^.{6,12}$/,
                message: "*La contraseña debe contener entre 6 y 12 caracteres!",
              },
            })}
          />
          <BtnSignIn primary type="submit">
            Crear cuenta
          </BtnSignIn>
        </form>
        <br/>
       {Object.entries(errors).length > 0 && (
          <Error>
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            <ErrorMessage>{errors?.neighborhood?.message}</ErrorMessage>
            <ErrorMessage>{errors?.position?.message}</ErrorMessage>
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </Error>
       )}
      </SignInDiv>
    </div>
  );
}

export default SignIn;
