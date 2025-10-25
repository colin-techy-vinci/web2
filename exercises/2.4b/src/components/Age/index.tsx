interface AgeProps {
    age: number;
}

const Age = (props : AgeProps) => {
    return(
        <div>
            <p>Age :{props.age}</p>
        </div>
    );
}
export default Age;