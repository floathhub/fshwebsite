import logo from '../../assets/svgs/floatlogo.svg'


const TopBar = () => {
    return (
        <div className="navbar sticky-top bg-light p-3 px-3 d-flex justify-content-between">
            <img src={logo}/>
            <i className="bi bi-list fs-1"></i>
        </div>
    )
}

export default TopBar