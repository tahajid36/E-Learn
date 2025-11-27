'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const {data: session } = useSession()
    const router = useRouter()
    const handleLogout =async () => {
      await signOut({
        redirect: true,
        callbackUrl: '/register'
      })
     

    }
    
    const links = <> 
    <Link   className="mx-6" href="/">Home</Link>
      <Link className="mx-6" href="/courses">Courses</Link>
      <Link className="mx-6" href="/addcourse">Add Course</Link>
      <Link className="mx-6" href="/managecourse">Manage Courses</Link></>


  return (
    <nav >
      <div className="navbar flex justify-between items-center shadow-sm">
  <div className="">
    <a className="btn btn-ghost text-xl">E-learn</a>
  </div>
  <div className="hidden md:block">
    {links}
  </div>
  <div className="relative">
    {session ? (<div className="dropdown z-50 dropdown-end">
      <div  tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={session.user.image} alt="profile picture" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>) :  (<div className="dropdown dropdown-end">
        <Link className="mx-6 btn btn-primary btn-md" href='/register'>Register / Login</Link>
    </div>) }
   
  </div>
</div>
    </nav>
  );
}
