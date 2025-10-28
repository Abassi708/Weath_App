import React from "react";
import "../Style/authentification.css";

export default function Authentification() {
  return (
    <div className="auth-container">
      <h1>Authentification</h1>
      <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

