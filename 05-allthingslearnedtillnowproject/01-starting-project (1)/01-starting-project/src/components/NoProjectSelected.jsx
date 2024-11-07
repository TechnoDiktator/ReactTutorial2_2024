import noProjectsPng from '../assets/no-projects2.png'
import Button from './Button'

export default function NoProjectSelected({onStartAddProject}) {

    return (
    <div className="mt-24 text-center w-2/3 ">
        <img className="w-16 h-16 object-contain mx-auto" src={noProjectsPng} alt="Empty No Projects" />
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No Project Selected</h2>
        <p className='text-stone-400-mb mb-4' >Select a project or get started with a new one</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>)


}