import {useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {Link} from "react-router-dom";

function RombelPage() {
  const [rombels, setRombels] = useState([])
  const authHeader = useAuthHeader();
  
  useEffect(() => {
    fetch('http://localhost:3000/rombels', {
      headers: {
        'Authorization': authHeader
      }
    })
    .then((response) => response.json())
    .then((res) => {
      setRombels(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [])
  
  return (
  <>
    <div className="card rounded-3">
      <div className="card-header d-flex justify-content-between align-items-center border-0 py-3 pb-0">
        <h4 className="mb-0">Rombels</h4>
        <Link to={'/users/create'} className="btn btn-primary">Add Rombel</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
            <tr>
              <th width="20">No</th>
              <th>Rombel</th>
              <th>Students</th>
              <th width="100"></th>
            </tr>
            </thead>
            <tbody>
            {rombels.map((rombel, idx) =>(
            <tr key={idx}>
              <td className="align-middle text-center">{idx + 1}</td>
              <td className="align-middle">{rombel.rombel}</td>
              <td className="align-middle">{rombel.students.length}</td>
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
        <p className="text-muted">Showing {rombels.length} rombels</p>
      </div>
    </div>
  </>
  )
}

export default RombelPage;
