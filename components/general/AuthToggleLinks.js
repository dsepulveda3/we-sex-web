import React, { useState } from "react";
import { PiUserCircleBold } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { useAuth } from "../../context/authUserContext";

const AuthToggleLinks = ({ setLoginStatus }) => {
  const { signOutAndClear } = useAuth();
  const [showLinks, setShowLinks] = useState(false);

  const handleLogOut = () => {
    signOutAndClear();
    setLoginStatus(false);
  };

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <div style={{ marginRight: "5px" }}>
          <PiUserCircleBold size={30} style={{ fontSize: "1em", fill: "white" }} />
        </div>
      </div>
      {showLinks && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "0 0 5px 5px",
            borderTop: "none",
            background: "white",
            padding: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: "100%",
            right: "0",
          }}
        >
          <a className="nav-link" onClick={handleLogOut} style={{ color: "purple", cursor: "pointer" }}>
            Cerrar sesión
          </a>
          <a className="nav-link" href="/perfil/me" style={{ color: "purple", cursor: "pointer" }}>
            Mi perfil
          </a>
        </div>
      )}
    </div>
  );
};

export default AuthToggleLinks;



