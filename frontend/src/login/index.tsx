import { useState } from "react";
import { ISession } from "../interfaces";
import { api } from "../services/api";
import styles from "./styles.module.scss";

export default async function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async () => {
    const payload = { cpf, password };
    try {
      const res = await api.post<ISession>("/sessions", payload);
      console.log(JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (err: any) {
      return err.message;
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        HandleLogin();
      }}
    >
      <div className={styles.formGroup}>
        <p>Login</p>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="ex: johndoe@johndoe.com"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="ex: !@#$%1542test"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
