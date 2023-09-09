import LoginButton from "./components/LoginButton";
import Profile from "./pages/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <main>
      <h1>Auth0 Login </h1>

      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  );
}

export default App;
