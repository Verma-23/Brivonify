import React from "react";
import './NavUniversal.css';
import SearchIcon from "../../Assets/Icons/SearchIcon.jpg"

const NavUniversal = () => {
    let logoName = 'Exclusive';

    const navListItems = [
        {
            id: 1,
            listName: 'Home'
        },
        {
            id: 2,
            listName: 'Contact'
        },
        {
            id :3,
            listName: 'About'
        },
        {
            id : 4,
            listName: 'SignUp',
            listNameSignIn: 'SignIn'
        },
    ]

    return(
        <>
            <nav className="navbar universalMain">
                <div className="universalNavBar">
                    <div className="excLogo">
                        <h3>{logoName}</h3>
                    </div>
                    <div className="navBarListSection">
                        <ul class="navbar-nav navListItems">
                        {navListItems.map((navFeatures) => (
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">{navFeatures.listName}</a>
                            </li>
                        ))}
                        </ul>
                      
                    </div>

                    <div className="searchBar">
                        <div className="searchInput">
                            <input type="text" placeholder="What are you looking for?"/>
                            <img src={SearchIcon} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavUniversal;