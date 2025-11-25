'use client'
import Link from "next/link";
import CurrentUser from "../hooks/CurrentUser";
import { signOut } from "next-auth/react";

export default function NavBar() {
    const user = CurrentUser()
    const links = <> 
    <Link   className="mx-6" href="/">Home</Link>
      <Link className="mx-6" href="/courses">Courses</Link>
      <Link className="mx-6" href="/instructors">Instructors</Link>
      <Link className="mx-6" href="/contact">Contact</Link></>


  return (
    <nav >
      <div className="navbar flex justify-between items-center shadow-sm">
  <div className="">
    <a className="btn btn-ghost text-xl">E-learn</a>
  </div>
  <div className="">
    {links}
  </div>
  <div className="">
    {!user && (<div className="dropdown dropdown-end">
        <Link className="mx-6 btn btn-primary btn-md" href='/login'>Register / Login</Link>
    </div>)}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.image} alt="profile picture" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={()=> signOut()}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </nav>
  );
}
