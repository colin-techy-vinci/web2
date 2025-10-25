interface Title {
    title : string;
}
const TitlePage = (title : Title) => {
    return(<h1>{title.title}</h1>)
}

export default TitlePage;