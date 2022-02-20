import { InputForm } from "../Styles/reusable/Input";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import {
  BtnLogIn,
  ErrorMessage,
  ContainerInput,
  PasswordDiv,
} from "../Styles/Password.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetPassword } from "../Redux/Actions";
import Swal from "sweetalert2";

function Password() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
    if (!event) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un email!",
      });
    }
    await dispatch(resetPassword(event.email));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Revise su casilla de correo para reestablecer su contraseña",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
    reset();
  };

  return (
    <div>
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
            <ErrorMessage>
              {errors.email && (
                <small>
                  <FaExclamationCircle /> {errors.email.message}
                </small>
              )}
            </ErrorMessage>
            <BtnLogIn primary type="submit">
              Recuperar Contraseña
            </BtnLogIn>
          </ContainerInput>
        </form>
      </PasswordDiv>
    </div>
  );
}

export default Password;
