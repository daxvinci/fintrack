"use client"

const Badge = ({text,color}:{text:string,color:string}) => {
    return (
      <>
        <div className="badge flex gap-2 justify-center px-2 items-center bg-gray-200 rounded-2xl">
          <div
            className={`badge-light w-[5px] h-[5px] rounded-full `}
            style={{ backgroundColor: color }}
          />
          <p className="badge-text sm:text-base text-sm">{text}</p>
        </div>
      </>
    );
}
 
export default Badge;