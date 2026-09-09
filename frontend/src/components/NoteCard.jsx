import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

const NoteCard = ({ note, setNotes }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        if(!window.confirm("Are you sure you want to delete this Goal?")) return;
        try {
           await api.delete(`/goals/${id}`)
           setNotes((prev) => prev.filter(item => item._id !== id))
           toast.success("Goal deleted successfully")
        } catch (error) {
            toast.error("Failed to delete goal")
            console.log("error in delete", error)
        }
    } 

    const handleCardClick = () => {
        navigate(`/goal/${note._id}`);
    }

    const creatorId = typeof note.createdBy === 'object' ? note.createdBy?._id : note.createdBy;
    const isOwner = user && creatorId && String(creatorId) === String(user._id);

  return (
    <div 
      onClick={handleCardClick}
      className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#ff8000] cursor-pointer"
    >
        <div className='card-body'>
            <div className="flex justify-between items-start gap-2">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <span className="text-sm text-base-content/60 font-medium whitespace-nowrap">
                    {typeof note.createdBy === 'object' ? note.createdBy?.name : note.createdBy}
                </span>
            </div>
            
            <p className="text-base-content/70 line-clamp-3 whitespace-pre-line">{note.content}</p>
            
            <div className='card-actions justify-between items-center mt-4'>
                <span className="text-sm text-base-content/60">
                    {formatDate(note.createdAt)}
                </span>
                
                {isOwner ? (
                    <div className='flex items-center gap-1' onClick={(e) => e.stopPropagation()}>
                        <Link to={`/edit-goal/${note._id}`} className='btn btn-ghost btn-xs text-error hover:bg-primary/20'>
                            <PenSquareIcon className='size-4'/>
                        </Link>
                        <button className='btn btn-ghost btn-xs text-error hover:bg-primary/20' onClick={(e) => handleDelete(e, note._id)}>
                            <Trash2Icon className='size-4'/>    
                        </button>    
                    </div>
                ) : (
                    <div></div> 
                )}
            </div>
        </div>
    </div>
  )
}

export default NoteCard