import { InputForm } from "../Styles/reusable/Input";
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo";
import {
  BtnLogIn,
  ErrorMessage,
  ContainerInput,
  PasswordDiv
} from "../Styles/Password.js";
import { useForm } from "react-hook-form";
import { context } from "../Context/authContext";
import { useContext } from "react";

function Password () {
    const { resetPassword} = useContext(context);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (event) => {
        if(!event) return alert("Ingrese un email")
        await resetPassword(event.email);
        alert("Revise su casilla de correo para reestablecer su contraseña");
        navigate("/login")
        reset();
      };

    return (
        <div>
            <Logo />
            <PasswordDiv>
                <h4>Recuperá tu contraseña</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ContainerInput>
                        <InputForm
                        type="email"
                        autoComplete="off"
                        name="email"
                        placeholder="Email"
                        {...register("email", {
                            required: {
                            value: true,
                            message: "Email requerido",
                            },
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato del email ingresado no es correcto",
                            },
                        })}
                        />
                        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                        <BtnLogIn primary type="submit">
                            Recuperar Contraseña
                        </BtnLogIn>
                    </ContainerInput>
                </form>
            </PasswordDiv>
        </div>
    )
}

export default Password;