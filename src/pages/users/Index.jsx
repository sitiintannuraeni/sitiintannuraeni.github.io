import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography
} from "@material-tailwind/react";
import {PencilIcon, TrashIcon} from "@heroicons/react/16/solid/index.js";

const TABLE_HEAD = ['No', 'Name', 'Email','Role', '']

export default function UserPage() {
  const authHeader = useAuthHeader()
  const [users, setUsers] = useState([])
  
  const options = {
    headers: {
      'Authorization': authHeader
    }
  }
  
  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = () => {
    fetch('http://localhost:3000/users', options)
    .then((res) => res.json())
    .then((resData) => {
      setUsers(resData.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': authHeader
      }
    })
    .then((response) => response.json())
    .then((res) => {
      getUsers()
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  return (
  <>
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="flex justify-between items-center">
        <Typography variant="h4" color="blue-gray">
          Users
        </Typography>
        <Button>
          <Link to={`/users/create`}>Add User</Link>
        </Button>
      </CardHeader>
      <CardBody className="pb-0 px-0 overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
            ))}
          </tr>
          </thead>
          <tbody>
          {users.map((user, idx) => {
            const isLast = idx === users.length - 1;
            const classes = isLast ? "p-3" : "p-3 border-b border-blue-gray-50";
            
            return (
            <tr key={idx}>
              <td className={classes}>
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
                >
                  {idx+1}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
                >
                  {user.name}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
                >
                  {user.email}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
                >
                  {user.role === 'admin' ? 'Administrator' : 'Pembimbing Siswa'}
                </Typography>
              </td>
              <td className={classes}>
                <div className="flex gap-2 items-center">
                  <Link to={`/users/${user.id}`}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Tooltip content="Delete User">
                    <IconButton variant="text" onClick={() => handleDelete(user.id)}>
                      <TrashIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </div>
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
    
    <div className="card rounded-3 hidden">
      <div className="card-header d-flex justify-content-between align-items-center border-0 py-3 pb-0">
        <h4 className="mb-0">Users</h4>
        <Link to={'/users/create'} className="btn btn-primary">Add User</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th width="20">No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th width="100"></th>
              </tr>
            </thead>
            <tbody>
            {users.map((user, idx) =>(
              <tr key={idx}>
                <td className="align-middle text-center">{idx + 1}</td>
                <td className="align-middle">{user.name}</td>
                <td className="align-middle">{user.email}</td>
                <td className="align-middle">{user.role === 'admin' ? 'Administrator' : 'Pembimbing Siswa'}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-white text-primary">Edit</button>
                    <button className="btn btn-white text-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer bg-transparent border-0">
        <p className="text-muted">Showing {users.length} users</p>
      </div>
    </div>
  </>
  )
}
