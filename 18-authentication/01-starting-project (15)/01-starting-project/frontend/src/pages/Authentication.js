import AuthForm from '../components/AuthForm';
import { useSearchParams, json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


//action fucntion is implicitely provided with a 
//object that contains a request property
//so that can be used to get the form data
export async function action({ request }) {
  // Access search parameters (query params) from the request URL
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || 'login';

  console.log(mode === "login");
  console.log(mode === "signup");

  // Check for valid modes
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: "Unsupported or Invalid mode" }, { status: 422 });
  }

  // Await the form data from the request
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Make a fetch request to the appropriate endpoint based on the mode (login/signup)
  const response = await fetch('http://localhost:8080/' + mode, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  // Handle errors based on the response status
  if (response.status === 422 || response.status === 401) {
    return response; // The response can be passed directly in these cases
  }

  if (!response.ok) {
    throw json({ message: "Could Not Authenticate User" }, { status: 500 });
  }

  //fetching the auth token
  const resData = await response.json()
  const token  = resData.token
  localStorage.setItem("token" , token)
  

  // Redirect after successful authentication
  return redirect('/');
}