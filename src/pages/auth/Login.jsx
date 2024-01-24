import {useState} from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useNavigate} from "react-router-dom";
import {Button, Card, CardBody, CardHeader, Checkbox, Input, Typography} from "@material-tailwind/react";

function LoginPage() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin() {
    const data = {
      email: email,
      password: password
    }
    
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    
    fetch(' http://localhost:3000/auth/login', options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if(signIn({
        auth: {
          token: data.access_token,
          type: 'Bearer'
        },
        userState: data.payload
      })){
        navigate('/');
      }else {
        navigate('/login');
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
  <>
    <div className="min-h-full max-w-sm mx-auto flex items-center">
      <Card color="white" className="w-full">
        <CardHeader floated={false} shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Input your login account.
          </Typography>
        </CardHeader>
        <CardBody>
          <form className="mb-2">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="button" className="mt-6" fullWidth onClick={handleLogin}>
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  </>
  )
}

export default LoginPage
