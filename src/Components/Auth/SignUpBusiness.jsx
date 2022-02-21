import { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { InputForm, Label } from "../../Styles/reusable/Input";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../Styles/reusable/Select.js";
import { SignUp, BtnSignUp } from "../../Styles/component/SignUpBusiness";
import { signUpBusiness, getNeighborhoods } from "../../Redux/Actions";
import { LinkToSignIn, BtnSignIn } from "../../Styles/component/SignIn";

export const SignUpBusiness = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const neighborhoods = useSelector((state) => state.neighborhoods);
  console.log(neighborhoods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNeighborhoods());
  }, [dispatch]);

  const onSubmit = (input) => {
    if (Object.entries(errors).length === 0) {
      dispatch(
        signUpBusiness(input.email, input.password, input, () => {
          navigate("/auth/login");
        })
      );
    }
  };

  return (
    <div>
      <SignUp>
        <h4>Cuenta Business</h4>
        <h5>
          Ya eres parte de SeJuega ?{" "}
          <LinkToSignIn to="/auth/login" business="true">
            Iniciar Sesión
          </LinkToSignIn>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* nombre de club */}
          <div>
            <Label>Nombre de Club</Label>
            <InputForm
              type="text"
              autoComplete="off"
              placeholder="Sejuega club"
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
            <Label>Dirección</Label>
            <InputForm
              type="text"
              autoComplete="off"
              name="street"
              placeholder="Av. Corrientes 1234"
              {...register("street", {
                required: {
                  value: true,
                  message: "Dirección requerida.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9À-ÿ\u00f1\u00d1._-\s]+$/,
                  message:
                    "La Dirección solo admite letras,numeros y espacios en blanco.",
                },
                maxLength: {
                  value: 30,
                  message: "La Dirección debe contener máximo 30 caracteres.",
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
            <Label>Barrio</Label>
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
              {neighborhoods.map((element, index) => (
                <option key={index} value={element.name}>
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
          {/* tipo de suelo */}
          <div>
            <Label>Tipo de suelo</Label>
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
          {/* telefono */}
          <div>
            <Label>Teléfono</Label>
            <InputForm
              type="tel"
              autoComplete="off"
              name="phone"
              placeholder="11 59777570"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Telefono requerido.",
                },
                pattern: {
                  value: /^[0-9_-\s]+$/,
                  message: "Solo debe contener solo números.",
                },
                maxLength: {
                  value: 11,
                  message: "Máximo 10 caracteres.",
                },
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
            <Label>Horario de atención</Label>
            <InputForm
              type="text"
              autoComplete="off"
              name="availableHours"
              placeholder="9:00 - 18:00"
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
          {/* Precio */}
          <div>
            <Label>Precio</Label>
            <InputForm
              type="text"
              autoComplete="off"
              name="price"
              placeholder="ARS"
              {...register("price", {
                required: {
                  value: true,
                  message: "Precio requerido.",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "El precio solo debe contener números.",
                },
              })}
              onKeyUp={() => {
                trigger("price");
              }}
            />
            <ErrorMessage>
              {errors.price && (
                <small>
                  <FaExclamationCircle /> {errors.price.message}
                </small>
              )}
            </ErrorMessage>
          </div>

          {/* CBU */}
          <div>
            <Label>Cvu</Label>
            <InputForm
              type="text"
              autoComplete="off"
              name="cbu"
              placeholder="7652987623411238905021"
              {...register("cbu", {
                required: {
                  value: true,
                  message: "Campo requerido.",
                },
                pattern: {
                  value: /^[0-9]{22}$/,
                  message: "El cvu debe contener 22 números.",
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

          {/* email */}
          <div>
            <Label>Correo electrónico</Label>
            <InputForm
              type="email"
              autoComplete="off"
              name="email"
              placeholder="sejuega@outlook.com"
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
            <Label>Contraseña</Label>
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
          {/* Nota */}
          <BtnSignUp>
            <Label>Notas</Label>
            <textarea
              type="text"
              autoComplete="off"
              name="note"
              placeholder="Notas "
              {...register("note", {
                required: {
                  value: false,
                },
                minLength: {
                  value: 10,
                  message: "La nota debe contener al menos 10 caracteres.",
                },
                maxLength: {
                  value: 200,
                  message: "La nota no debe contener más de 200 caracteres.",
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
          </BtnSignUp>
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
