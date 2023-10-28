import "../styles/login.css";
function Login() {
  return (
    <div className='login'>
      <h1>Sign in to your account</h1>
      <form action=''>
        <input type='email' placeholder='example@gmail.com' />
        <input type='password' name='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
