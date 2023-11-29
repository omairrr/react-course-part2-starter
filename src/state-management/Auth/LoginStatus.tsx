import UseAuthStore from "./store";

const LoginStatus = () => {
  const { user, Login, Logout } = UseAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => Logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => Login("Dilbar SHalwarma")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
