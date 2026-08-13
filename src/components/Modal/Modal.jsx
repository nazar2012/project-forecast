import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";

import {
  Overlay,
  ModalWrapper,
  CloseButton,
  Title,
  Form,
  Input,
  SubmitButton,
  LoginText,
  LoginLink,
  PasswordWrapper,
  PasswordButton,
} from "./Modal.styled";


export default function Modal({ onClose, onSubmit }) {

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      if (values.password.length < 8) {
        toast.error("Password must contain at least 8 characters!");
        return;
      }

      if (onSubmit) {
        onSubmit(values);
      } else {
        localStorage.setItem(
          "weatherUser",
          JSON.stringify(values)
        );

        toast.success("Registration successful!");
      }

      resetForm();
      onClose();
    },
  });

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close">
          <FiX size={24} />
        </CloseButton>

        <Title>Sign up</Title>

        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <PasswordWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              minLength={8}
              required
            />

            <PasswordButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </PasswordButton>
          </PasswordWrapper>

          <SubmitButton type="submit">
            Sign up
          </SubmitButton>
        </Form>

        <LoginText>
          Already have an account?{" "}
          <LoginLink href="#login">
            Log In
          </LoginLink>
        </LoginText>
      </ModalWrapper>
    </Overlay>
  );
}