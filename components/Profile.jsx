import { Calendar, MailIcon} from 'lucide-react'
import React from 'react'
import { BiLeftArrowAlt, BiCircle } from 'react-icons/bi'
import { RxAvatar } from 'react-icons/rx'

export default function  Profile  () {
  return (
    <>
    <section className='min-h-screen justify-center items-center   '  style={{
        background: "linear-gradient(to bottom, #160a28, #261643)",
      }}>
{/* Header  */}
<header className='bg-[#160a28] border border-[#160a28] box-shadow-1'>
   <button className="py-6 px-20 text-gray-400 hover:text-white transition-colors">
            <a href="/workspace" className='flex items-center gap-2 text-sm'>
              <BiLeftArrowAlt size={20}/>
              Back to Workspaces
            </a>
          </button>
</header>
{/* Main Profile Section  */}
<main className='flex   item-center justify-center py-20'>
   {/* User Name and details  */}
    
<div className="box-shadow-2 w-[45vw] h-[25vh] rounded-2xl absolute bg-[#0f0520]">
  <div className="profile-img p-5 h-full flex flex-col justify-between">

    {/* Top Profile Section */}
    <div className="flex items-center gap-4">
      <img
        className="border border-purple-600 rounded-full shadow-2xl shadow-purple-600"
        width={66}
        src="/avator.png"
        alt="Profile"
      />

      <div className="flex flex-col">
        <span className="text-white font-bold text-xl">Syeda Kiswa </span>
        <span className="text-gray-400 text-sm">syedakiswa710@gmail.com</span>
      </div>
    </div>
<div className='flex '>
  <button className="w-fit inline-flex ml-20 shadow-purple-500 shadow-2xl  items-center gap-2 mt-2 px-3 py-1 
rounded-full bg-purple-600/10 text-purple-400 
border border-purple-500/30">
  <BiCircle />
  Owner
</button>
<span className="w-fit inline-flex ml-20 shadow-purple-500 shadow-2xl  items-center gap-2 mt-2 px-3 py-1 
rounded-full bg-purple-600/10 text-white 
border border-purple-500/30">
  <Calendar className='w-8' />
  joined january 2026
</span>
</div>

  </div>
</div>

</main>
{/* User Information  */}
<main className="flex items-center justify-center mt-20 py-20">
  <div className="box-shadow-2 w-[45vw] h-[40vh] rounded-2xl bg-[#0f0520]">
    
    <div className="text-white  items-center gap-3 py-4 px-4">
<div className='flex gap-2'>
    
        <RxAvatar className="text-2xl text-purple-400" />
        <span className=' font-semibold'>Account Information </span>

</div>

      <span className='px-8 text-sm text-gray-300'>View your account details and settings </span>
     

    </div>
  <div className='grid grid-cols-2 gap-20'>
 <div className='px-13 py-4 flex flex-col'>
{/* name and role  */}
<div >
  <h4 className='text-sm text-gray-500 '>Full Name </h4>
<span className='text-md text-purple-600 text-shadow-2xs text-shadow-purple-400'>Jhon Doe </span>
 
</div>
<div className='py-5' >
  <h4 className='text-sm text-gray-500 '>Role </h4>
  <button className="w-fit inline-flex  shadow-purple-500 shadow-2xl  items-center gap-2 mt-2  py-1 
rounded-full bg-purple-600/10 text-purple-600 
">
  <BiCircle />
  Owner
</button>
</div>
 </div>


 <div className='px-2 py-4 flex flex-col'>
{/* name and role  */}
<div >
  <h4 className='text-sm text-gray-500 '>Email Address</h4>
<span className='text-md text-purple-600 text-shadow-2xs text-shadow-purple-400 flex gap-2'><MailIcon className='w-4 '/>syedakiswa710@gmail.com</span>
 
</div>
<div className='py-5' >
  <h4 className='text-sm text-gray-500 '>Member Since </h4>
 <span className="w-fit inline-flex shadow-purple-500 shadow-2xl  items-center gap-2 mt-2  py-1 
rounded-full bg-purple-600/10 text-purple-600
">
  <Calendar className='w-4' />
  joined january 2026
</span>
</div>
</div>


 <div>

 </div>
  </div>
  </div>
</main>

<main className="flex items-center justify-center ">
  <div className="box-shadow-2 w-[45vw] rounded-2xl bg-[#0f0520] p-6 border border-purple-500/10">

    {/* Header */}
    <div className="flex items-center gap-3 mb-1">
      <RxAvatar className="text-xl text-purple-400" />
      <span className="text-white font-semibold">Your Workspaces</span>
    </div>
    <p className="text-sm text-gray-400 mb-6">
      Workspaces you're a member of
    </p>

    {/* Workspace List */}
    <div className="space-y-4">

      {["Product Development", "Marketing Campaign", "Design System"].map((w, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400">
              <RxAvatar />
            </div>
            <div>
              <p className="text-white">{w}</p>
              <p className="text-xs text-gray-400">
                {i === 1 ? "Member" : "Owner"}
              </p>
            </div>
          </div>

          <button className="px-4 py-1 rounded-full text-sm border border-purple-500/40 text-purple-400 hover:bg-purple-600/10">
            Open
          </button>
        </div>
      ))}

    </div>
  </div>
</main>
<main className='flex items-center justify-center mt-20'>
  <div className="w-[45vw] h-[40vh]   rounded-2xl 
bg-gradient-to-br from-[#1a0836] to-[#120524] 
border border-purple-500/20 shadow-[0_0_80px_#7c3aed33] p-10">

  {/* Top Section */}
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-white text-xl font-semibold">
        Security Settings
      </h2>
      <p className="text-purple-300/70 text-sm mt-1">
        Manage your account security
      </p>
    </div>

    <button className="px-5 py-2 rounded-lg 
    bg-purple-600/10 border border-purple-500/30 
    text-purple-300 hover:bg-purple-600/20 transition">
      Change Password
    </button>
  </div>

  {/* Divider */}
  <div className="w-full h-px bg-purple-500/20 my-10"></div>

  {/* Bottom Section */}
  <div>
    <button className="flex items-center gap-2 px-6 py-2.5 
    bg-red-600 rounded-lg text-white font-medium 
    hover:bg-red-700 transition">
      ⎋ Logout
    </button>
  </div>

</div>
</main>

    </section>
    
    </>
  )
}
