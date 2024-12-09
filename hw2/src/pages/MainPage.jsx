import Title from "../components/Title";
import About from "../components/About";


function MainPage(){
    return(
        <>
        <h2>I am MainPage</h2>
        <About info={{ title: "Some Title", body: "Some body" }} />
        <Title text="Hello world" />1
        </>
    )
}
export default MainPage;
