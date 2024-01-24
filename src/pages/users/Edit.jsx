import {Button, Card, CardBody, CardHeader, Input, Radio, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {useNavigate, useParams} from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const param = useParams();
  const authHeader = useAuthHeader();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("admin|ps")
  
  useEffect(() => {
    fetch(`http://localhost:3000/users/${param.id}`, {
      headers: {
        'Authorization': authHeader,
      }
    })
    .then((response) => response.json())
    .then((res) => {
      setName(res.data.name)
      setEmail(res.data.email)
      setRole(res.data.role)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [authHeader, param]);
  
  function onSubmit() {
   fetch(`http://localhost:3000/users/${param.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        role: role,
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.message)
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
          Edit User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Edit user data.
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
              Role {role}
            </Typography>
            <div id="inputRole" className="flex gap-10">
              {role === 'admin' ? (
                <Radio name="type" label="Administrator" value="admin" defaultChecked
                     onChange={(e) => setRole(e.target.value)}/>
              ) :
                <Radio name="type" label="Administrator" value="admin"
                     onChange={(e) => setRole(e.target.value)}/>
              }
              
              {role === 'ps' ? (
              <Radio name="type" label="Pembimbing Siswa" defaultChecked value="ps"
                   onChange={(e) => setRole(e.target.value)}/>
              ) : (
              <Radio name="type" label="Pembimbing Siswa" value="ps"
                   onChange={(e) => setRole(e.target.value)}/>
              ) }
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
