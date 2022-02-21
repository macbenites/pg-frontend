import { useNavigate } from "react-router-dom";
import { FaGoogle, FaExclamationCircle } from "react-icons/fa";
import {
  LoginDiv,
  BtnLogIn,
  ErrorMessage,
  BtnSignIn,
  LinkToLogin,
  Space,
} from "../../Styles/Login.js";
import { InputForm } from "../../Styles/reusable/Input";
import { useForm } from "react-hook-form";
import { logInWithMail, logInWithGoogle } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com
  // credencial google
  //658093002098339 -- creedencial Facebook

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    //dispatch(resetStateError());
    try {
      dispatch(
        logInWithMail(event.email, event.password, () => {
          navigate("/home/games");
        })
      );
    } catch (e) {}
  };

  const googleLogIn = async () => {
    dispatch(await logInWithGoogle());
    navigate("/home/games");
  };

  return (
    <div>
      <LoginDiv>
        <h4>Ingresá a tu cuenta</h4>
        <h5>
          No tenés cuenta?
          <LinkToLogin to="/auth/signin"> Registrate</LinkToLogin>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            onKeyUp={() => {
              trigger("email");
            }}
          />
          <ErrorMessage>
            {errors.email && (
              <small>
                <FaExclamationCircle /> {errors.email.message}
              </small>
            )}
          </ErrorMessage>
          <InputForm
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña requerida",
              },
              pattern: {
                value: /^.{6,12}$/,
                message: "La contraseña debe contener entre 6 y 12 caracteres",
              },
            })}
            autoComplete="off"
            onKeyUp={() => {
              trigger("password");
            }}
          />
          <ErrorMessage>
            {errors.password && (
              <small>
                <FaExclamationCircle /> {errors.password.message}
              </small>
            )}
          </ErrorMessage>
          <BtnLogIn primary type="submit">
            Ingresar
          </BtnLogIn>
          <Space>
            <hr />
          </Space>
          <BtnSignIn onClick={googleLogIn}>
            <FaGoogle /> Ingresar con Google
          </BtnSignIn>
        </form>
        <LinkToLogin to="/auth/resetPassword">
          <div>Olvidaste tu contraseña?</div>
        </LinkToLogin>
      </LoginDiv>
    </div>
  );
}
