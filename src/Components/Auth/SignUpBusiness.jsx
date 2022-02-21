import { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { InputForm } from "../../Styles/reusable/Input";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../Styles/reusable/Select.js";
import { SignUp, BtnSignUp } from "../../Styles/component/SignUpBusiness";
import {
  signUpBusiness,
  resetStateError,
  getNeighborhoods,
} from "../../Redux/Actions";
import Swal from "sweetalert2";

import { LinkToSignIn, BtnSignIn } from "../../Styles/component/SignIn";

export const SignUpBusiness = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const { error } = useSelector((state) => state);
  const neighborhoods = useSelector((state) => state.neighborhoods);
  console.log(neighborhoods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNeighborhoods());
  }, [dispatch]);

  const onSubmit = (input) => {
    if (Object.entries(errors).length === 0) {
      dispatch(resetStateError());
      dispatch(
        signUpBusiness(input.email, input.password, input, () => {
          navigate("/auth/login");
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos!",
      });
    }
  };

  return (
    <div>
      <SignUp>
        <h4>Cuenta Business</h4>
        <h5>
          Ya eres parte de SeJuega!?
          <LinkToSignIn to="/auth/login"> Log In</LinkToSignIn>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* nombre de club */}
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              placeholder="Nombre de Club"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre requerido.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9À-ÿ\u00f1\u00d1\s]+$/,
                  message:
                    "El nombre solo admite letras, números y espacios en blanco.",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe contener mínimo 3 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            <ErrorMessage>
              {errors.name && (
                <small>
                  <FaExclamationCircle /> {errors.name.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* calle */}
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              name="street"
              placeholder="Calle"
              {...register("street", {
                required: {
                  value: true,
                  message: "Calle requerida.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_-]+$/,
                  message: "La calle solo admite letras y espacios en blanco.",
                },
              })}
              onKeyUp={() => {
                trigger("street");
              }}
            />
            <ErrorMessage>
              {errors.street && (
                <small>
                  <FaExclamationCircle /> {errors.street.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* barrio */}
          <div>
            <Select
              name="district"
              {...register("district", {
                required: {
                  value: true,
                  message: "Barrio requerido.",
                },
              })}
              onKeyUp={() => {
                trigger("district");
              }}
            >
              <option value="">Seleccione el barrio</option>
              {neighborhoods.map((element) => (
                <option key={element.name} value={element.name}>
                  {element.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>
              {errors.district && (
                <small>
                  <FaExclamationCircle /> {errors.district.message}
                </small>
              )}
            </ErrorMessage>
          </div>

          {/* telefono */}
          <div>
            <InputForm
              type="tel"
              autoComplete="off"
              name="phone"
              placeholder="Teléfono"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Telefono requerida.",
                },
                // pattern: {
                //   value: /^[0-9]{3}-[0-9]{2}-[0-9]{3}+$/,
                //   message: "El campo solo admiete números.",
                // },
              })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            <ErrorMessage>
              {errors.phone && (
                <small>
                  <FaExclamationCircle /> {errors.phone.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* horario */}
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              name="availableHours"
              placeholder="Horario"
              {...register("availableHours", {
                required: {
                  value: true,
                  message: "Horario requerido.",
                },
              })}
              onKeyUp={() => {
                trigger("availableHours");
              }}
            />
            <ErrorMessage>
              {errors.availableHours && (
                <small>
                  <FaExclamationCircle /> {errors.availableHours.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* tipo de suelo */}
          <div>
            <Select
              name="typeFloor"
              {...register("typeFloor", {
                required: {
                  value: true,
                  message: "Tipo de suelo requerido.",
                },
              })}
              onKeyUp={() => {
                trigger("typeFloor");
              }}
            >
              <option value="">Seleccione tipo de suelo </option>
              <option value="cesped">Cesped</option>
              <option value="cesped sintetico">Cesped Sintético</option>
              <option value="piso">Piso</option>
              <option value="otro">Otro</option>
            </Select>
            <ErrorMessage>
              {errors.typeFloor && (
                <small>
                  <FaExclamationCircle /> {errors.typeFloor.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* CBU */}
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              name="cbu"
              placeholder="Cbu"
              {...register("cbu", {
                required: {
                  value: true,
                  message: "Campo requerido.",
                },
                pattern: {
                  value: /^[0-9]{22}$/,
                  message: "El CBU debe contener 22 números.",
                },
              })}
              onKeyUp={() => {
                trigger("cbu");
              }}
            />
            <ErrorMessage>
              {errors.cbu && (
                <small>
                  <FaExclamationCircle /> {errors.cbu.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* Nota */}
          <div>
            <textarea
              type="text"
              autoComplete="off"
              name="note"
              placeholder="Note "
              {...register("note", {
                required: {
                  value: true,
                  message: "Campo requerido.",
                },
              })}
              onKeyUp={() => {
                trigger("note");
              }}
            />
            <ErrorMessage>
              {errors.note && (
                <small>
                  <FaExclamationCircle /> {errors.note.message}
                </small>
              )}
            </ErrorMessage>
          </div>
          {/* email */}
          <div>
            <InputForm
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido.",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato del email ingresado no es correcto.",
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
          </div>
          <div>
            <InputForm
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida.",
                },
                pattern: {
                  value: /^.{6,12}$/,
                  message:
                    "La contraseña debe contener entre 6 y 12 caracteres.",
                },
              })}
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
          </div>
          <ErrorMessage>
            {error && (
              <small>
                {/*<FaExclamationCircle />*/} {error}
              </small>
            )}
          </ErrorMessage>
          <br />
          <BtnSignUp>
            <BtnSignIn primary type="submit">
              Crear cuenta
            </BtnSignIn>
          </BtnSignUp>
        </form>
      </SignUp>
    </div>
  );
};
