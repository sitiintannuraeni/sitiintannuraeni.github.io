import {useNavigate} from "react-router-dom";
import {useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {Button, Card, CardBody, CardHeader, Input, Radio, Typography} from "@material-tailwind/react";

export default function UserCreate() {
  const authHeader = useAuthHeader()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("admin")
  
  async function onSubmit() {
    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
    }
    
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(data)
    }
    
    fetch('http://localhost:3000/users', options)
    .then((res) => res.json())
    .then(() => {
      console.log("here");
      navigate('/users')
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
  <>
    <Card>
      <CardHeader floated={false} shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter user data.
        </Typography>
      </CardHeader>
      <CardBody>
        <form className="mb-2">
          <div className="mb-3 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray">
              Name
            </Typography>
            <Input
            size="lg"
            placeholder="John Wick"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray">
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
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray">
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
          <div className="mb-3 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray">
              Role
            </Typography>
            <div id="inputRole" className="flex gap-10">
              <Radio name="type" label="Administrator" defaultChecked value="admin" onChange={(e) => setRole(e.target.value)} />
              <Radio name="type" label="Pembimbing Siswa" value="ps" onChange={(e) => setRole(e.target.value)} />
            </div>
          </div>
          <Button type="button" className="mt-3" onClick={onSubmit}>
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  </>
  )
}
