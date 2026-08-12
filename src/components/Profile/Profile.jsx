import { useState } from "react";
import { FiX, FiCamera, FiEdit2, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

import {
  Overlay,
  ProfileWrapper,
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
  EditButton,
  SaveButton,
  LogoutButton,
} from "./Profile.styled";

export default function Profile({
  onClose,
  onAvatarChange,
  onUserUpdate,
  onLogout,
}) {
  const savedUser =
    JSON.parse(localStorage.getItem("weatherUser")) || {};

  const [user, setUser] = useState(savedUser);

  const [avatar, setAvatar] = useState(
    localStorage.getItem("weatherAvatar") || null
  );

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    username: savedUser.username || "",
    email: savedUser.email || "",
    password: savedUser.password || "",
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const image = reader.result;

      localStorage.setItem("weatherAvatar", image);

      setAvatar(image);

      if (onAvatarChange) {
        onAvatarChange(image);
      }

      toast.success("Avatar updated!");
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

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
      toast.error("Please fill in all fields");
      return;
    }

    const updatedUser = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    localStorage.setItem(
      "weatherUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    if (onUserUpdate) {
      onUserUpdate(updatedUser);
    }

    setEditing(false);

    toast.success("Profile updated!");
  };

  const handleCancel = () => {
    setFormData({
      username: user.username || "",
      email: user.email || "",
      password: user.password || "",
    });

    setEditing(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ProfileWrapper>
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={24} />
        </CloseButton>

        <Title>My profile</Title>

        <AvatarWrapper>
          {avatar ? (
            <Avatar
              src={avatar}
              alt="Profile avatar"
            />
          ) : (
            <AvatarPlaceholder>
              {user.username?.charAt(0).toUpperCase() || "U"}
            </AvatarPlaceholder>
          )}

          <UploadButton htmlFor="avatar-upload">
            <FiCamera size={18} />
          </UploadButton>

          <FileInput
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarWrapper>

        <Info>
          <InfoItem>
            <Label>Username</Label>

            {editing ? (
              <EditInput
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            ) : (
              <Value>
                {user.username || "—"}
              </Value>
            )}
          </InfoItem>

          <InfoItem>
            <Label>E-Mail</Label>

            {editing ? (
              <EditInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Mail"
              />
            ) : (
              <Value>
                {user.email || "—"}
              </Value>
            )}
          </InfoItem>

          <InfoItem>
            <Label>Password</Label>

            {editing ? (
              <EditInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            ) : (
              <Value>
                {user.password
                  ? "•".repeat(user.password.length)
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
            onClick={() => setEditing(true)}
          >
            <FiEdit2 size={18} />
            Edit profile
          </EditButton>
        )}

        <LogoutButton
          type="button"
          onClick={handleLogout}
        >
          Log out
        </LogoutButton>
      </ProfileWrapper>
    </Overlay>
  );
}