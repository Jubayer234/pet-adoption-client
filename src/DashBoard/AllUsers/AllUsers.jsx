
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Components/Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
    const {data: users = [], refetch} = useQuery({
      queryKey: ['users'],
      queryFn: async () =>{
        const res = await axiosSecure.get('/users')
        return res.data;
      }
    });

    const handleAdminMake = user =>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
  }


  return (
    <div>
            <div className=" text-center my-6">
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto ml-10 mt-8">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleAdminMake(user)}
                                        className="btn text-white bg-orange-500">
                                        Make Admin
                                    </button>}
                                </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default AllUsers