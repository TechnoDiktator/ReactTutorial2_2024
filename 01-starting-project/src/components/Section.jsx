
//the ...props is called as forwarding prop 
//it allows us to group the remaining props as one object 
//so left over props can be applied like shown below
export default function Section({title , children , ...props}) {

    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )

}
