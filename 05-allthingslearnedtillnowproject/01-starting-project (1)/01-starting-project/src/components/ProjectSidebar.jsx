import Button from "./Button";


export default function ProjectSidebar({onStartAddProject , projects}) {


    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
            <Button onClick = {onStartAddProject}> + Add Projects </Button>
            </div>
            <ul className="mt-8">
                {projects.map(project => {
                    return (
                        <li key={project.id}>
                            <button className="w-full text-left px-3 py-1 rounded-sm my-1 text-stone-300 hover:text-stone-100 hover:bg-slate-800">
                                {project.title}
                            </button>
                        </li>
                    )

                })}
            </ul>
        </aside>
    )

}

