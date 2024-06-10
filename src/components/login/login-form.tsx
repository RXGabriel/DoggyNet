import login from "@/actions/login";

export default async function LoginForm() {
  return (
    <>
      <form action="">
        <input type="text" name="username" placeholder="User" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </>
  );
}
