interface NameProps {
    name : string
}

const Name = (props: NameProps) => {
    return(
        <footer className="head">
            <h1>Name : {props.name}</h1>
        </footer>
    );
}

export default Name;