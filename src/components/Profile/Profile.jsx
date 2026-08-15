import { useState } from "react";
import {
  FiX,
  FiCamera,
  FiEdit2,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiDroplet,
} from "react-icons/fi";
import { toast } from "react-toastify";

import {
  Overlay,
  ProfileWrapper,
  Glow,
  CloseButton,
  Title,
  AvatarWrapper,
  Avatar,
  AvatarPlaceholder,
  UploadButton,
  FileInput,
  Info,
  InfoItem,
  Label,
  Value,
  EditInput,
  PasswordWrapper,
  PasswordButton,
  EditButton,
  SaveButton,
  LogoutButton,
  ColorButton,
} from "./Profile.styled";

const accentColor =
  localStorage.getItem("accentColor") ||
  "#ffb36c";

export default function Profile({
  onClose,
  onAvatarChange,
  onUserUpdate,
  onLogout,
  darkMode,
  onOpenColor,
}) {
  const savedUser =
    JSON.parse(
      localStorage.getItem("weatherUser")
    ) || {};

  const [showPassword, setShowPassword] =
    useState(false);

  const [user, setUser] =
    useState(savedUser);

  const [avatar, setAvatar] =
    useState(
      localStorage.getItem(
        "weatherAvatar"
      ) || null
    );

  const [editing, setEditing] =
    useState(false);

  const [formData, setFormData] =
    useState({
      username:
        savedUser.username || "",
      email:
        savedUser.email || "",
      password:
        savedUser.password || "",
    });

  const handleAvatarChange = (event) => {
    const file =
      event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error(
        "Please select an image"
      );
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const image = reader.result;

      localStorage.setItem(
        "weatherAvatar",
        image
      );

      setAvatar(image);

      if (onAvatarChange) {
        onAvatarChange(image);
      }

      toast.success(
        "Avatar updated!"
      );
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (
      !formData.username.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      toast.error(
        "Please fill in all fields"
      );
      return;
    }

    const updatedUser = {
      username:
        formData.username.trim(),
      email:
        formData.email.trim(),
      password:
        formData.password,
    };

    localStorage.setItem(
      "weatherUser",
      JSON.stringify(
        updatedUser
      )
    );

    setUser(updatedUser);

    if (onUserUpdate) {
      onUserUpdate(updatedUser);
    }

    setEditing(false);

    toast.success(
      "Profile updated!"
    );
  };

  const handleCancel = () => {
    setFormData({
      username:
        user.username || "",
      email:
        user.email || "",
      password:
        user.password || "",
    });

    setEditing(false);
  };

  const handleOverlayClick = (
    event
  ) => {
    if (
      event.target ===
      event.currentTarget
    ) {
      onClose();
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Overlay
      $dark={darkMode}
      onClick={handleOverlayClick}
    >
      <ProfileWrapper
        $dark={darkMode}
      >
        <Glow
          $accent={accentColor}
          $position="top"
        />

        <Glow
          $accent={accentColor}
          $position="bottom"
        />

        <Glow
          $accent={accentColor}
          $position="center"
        />
        <CloseButton
          $dark={darkMode}
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={24} />
        </CloseButton>

        <Title
          $dark={darkMode}
          $accent={accentColor}
        >
          My profile
        </Title>

        <AvatarWrapper>
          {avatar ? (
            <Avatar
              src={avatar}
              alt="Profile avatar"
            />
          ) : (
            <AvatarPlaceholder>
              {user.username
                ?.charAt(0)
                .toUpperCase() ||
                "U"}
            </AvatarPlaceholder>
          )}

          <UploadButton
            $dark={darkMode}
            htmlFor="avatar-upload"
          >
            <FiCamera size={18} />
          </UploadButton>

          <FileInput
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={
              handleAvatarChange
            }
          />
        </AvatarWrapper>

        <Info>
          <InfoItem $dark={darkMode}>
            <Label $dark={darkMode}>
              Username
            </Label>

            {editing ? (
              <EditInput
                $dark={darkMode}
                type="text"
                name="username"
                value={
                  formData.username
                }
                onChange={
                  handleChange
                }
                placeholder="Username"
              />
            ) : (
              <Value $dark={darkMode}>
                {user.username ||
                  "—"}
              </Value>
            )}
          </InfoItem>

          <InfoItem $dark={darkMode}>
            <Label $dark={darkMode}>
              E-Mail
            </Label>

            {editing ? (
              <EditInput
                $dark={darkMode}
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="E-Mail"
              />
            ) : (
              <Value $dark={darkMode}>
                {user.email ||
                  "—"}
              </Value>
            )}
          </InfoItem>

          <InfoItem $dark={darkMode}>
            <Label $dark={darkMode}>
              Password
            </Label>

            {editing ? (
              <PasswordWrapper>
                <EditInput
                  $dark={darkMode}
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Password"
                />

                <PasswordButton
                  $dark={darkMode}
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (prev) =>
                        !prev
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </PasswordButton>
              </PasswordWrapper>
            ) : (
              <Value $dark={darkMode}>
                {user.password
                  ? "•".repeat(
                    user.password
                      .length
                  )
                  : "—"}
              </Value>
            )}
          </InfoItem>
        </Info>

        {editing ? (
          <>
            <SaveButton
              type="button"
              onClick={handleSave}
            >
              <FiCheck size={18} />
              Save changes
            </SaveButton>

            <EditButton
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </EditButton>
          </>
        ) : (
          <EditButton
            type="button"
            onClick={() =>
              setEditing(true)
            }
          >
            <FiEdit2 size={18} />
            Edit profile
          </EditButton>
        )}

        <ColorButton
          type="button"
          onClick={onOpenColor}
        >
          <FiDroplet size={18} />
          Change color
        </ColorButton>

        <LogoutButton
          type="button"
          onClick={handleLogout}
          $dark={darkMode}
        >
          Log out
        </LogoutButton>
      </ProfileWrapper>
    </Overlay>
  );
}