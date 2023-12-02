export default function Navbar(){
    return(
        <div className="h-full w-full flex flex-row relative justify-center space-x-5">
            <a href="/page1"><button className="navbtn">page1</button></a>
            <a href="/"><button className="navbtn">Home</button></a>
            <a href="page2"><button className="navbtn">page2</button></a>
        </div>
    )
}