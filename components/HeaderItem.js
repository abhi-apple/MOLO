
function HeaderItem({Icon,title}) {
  return (
    <div className="flex flex-col pt-3 items-center cursor-pointer w-12 sm:w-20 group hover:text-white" >
        <Icon className="h-8 mb-1 group-hover:animate-bounce   "/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem