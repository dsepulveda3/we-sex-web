import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PiUserCircleBold } from "react-icons/pi";
import { useAuth } from "../../context/authUserContext";

const AuthToggleLinks = ({ setLoginStatus }) => {
  const { signOutAndClear } = useAuth();
  const router = useRouter();
  const [showLinks, setShowLinks] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const { authUser, loading } = useAuth();

  
  useEffect(() => {
    if (authUser){
      setIsLogged(true);
    }
  }, [authUser, loading])


  const handleLogOut = () => {
    signOutAndClear();
    setLoginStatus(false);
  };

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  const handleRedirect = () => {
    router.push("/perfil/me");
  };

  const handleContact = () => {
    router.push("https://wa.me/5491140678698?text=Hola!%20Tengo%20una%20pregunta.");
  };

  const handleRedirectCode = () => {
    router.push("/premium-material/access-code");
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
          <a className="nav-link" onClick={handleRedirect} style={{ color: "purple", cursor: "pointer" }}>
            Mi perfil
          </a>
          <a className="nav-link" onClick={handleContact} style={{ color: "purple", cursor: "pointer" }}>
            Contacto
          </a>
          {isLogged && (
            <a className="nav-link" onClick={handleRedirectCode} style={{ color: "purple", cursor: "pointer" }}>
            Mi código
          </a>
          )}
          
          <a className="nav-link" onClick={handleLogOut} style={{ color: "purple", cursor: "pointer" }}>
            Cerrar sesión
          </a>
        </div>
      )}
    </div>
  );
};

export default AuthToggleLinks;



