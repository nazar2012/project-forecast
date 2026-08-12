import { useFormik } from "formik";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

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
} from "./Modal.styled";

export default function Modal({ onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
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

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />

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