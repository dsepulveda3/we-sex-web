import React, { useState, useEffect } from "react";
import { PiUserCircleBold } from "react-icons/pi";
import { useAuth } from "../../context/authUserContext";

const AuthToggleLinks = ({ setLoginStatus }) => {
  const { signOutAndClear } = useAuth();
  const [showLinks, setShowLinks] = useState(false);


  const handleLogOut = () => {
    signOutAndClear();
    setLoginStatus(false);
  };


  const handleMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMouseLeave = () => {
    setShowLinks(false);
  };

  return (
      <div
        style={{ display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: "relative" }}>
          <PiUserCircleBold size={30} style={{ fontSize: "1em", fill: "white" }} />
          {showLinks && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                background: "white",
                padding: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <a className="nav-link" onClick={handleLogOut} style={{ color: "purple", cursor: "pointer" }}>
                Cerrar sesión
              </a>
            </div>
          )}
        </div>
      </div>
  );
};

export default AuthToggleLinks;


