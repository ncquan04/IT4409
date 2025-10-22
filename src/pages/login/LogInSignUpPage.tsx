import { useState } from "react";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ActionSection from "./components/ActionSection";

interface LogInSignUpPageProps {
  action: "login" | "signup";
}

const LogInSignUpPage = (props: LogInSignUpPageProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email: string, password: string) => {
    // your code here
    // Handle login logic here
  };

  const handleSignUp = (username: string, email: string, password: string) => {
    // your code here
    // Handle sign up logic here
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (props.action === "login") {
      handleLogin(email, password);
    } else {
      handleSignUp(username, email, password);
    }
  };

  return (
    <main
      role="main"
      className="w-full h-full pt-12 pb-12 pl-6 pr-6 flex flex-row justify-between items-center"
    >
      <aside
        className="w-1/2 h-full flex flex-col justify-center items-center gap-6"
        aria-label="Branding"
      >
        <figure className="w-full flex justify-center">
          <img src="/icon.jpg" alt="Apex logo" className="w-1/2 h-auto" />
        </figure>
      </aside>
      <section
        className="w-1/2 pr-24 h-full flex flex-col justify-center items-center gap-12"
        aria-labelledby="auth-heading"
      >
        <Header action={props.action} />
        <form
          className="w-full flex flex-col gap-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <InfoSection
            action={props.action}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
          />
          <ActionSection
            action={props.action}
            handleLogIn={() => handleLogin(email, password)}
            handleSignUp={() => handleSignUp(username, email, password)}
          />
        </form>
      </section>
    </main>
  );
};

export default LogInSignUpPage;
