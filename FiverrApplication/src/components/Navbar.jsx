import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);
  const currentUser = {
    id: 1,
    username: "mastan",
    isSeller: true,
  };

  return (
    <>
      <div className="navbars">
        <div
          className={active || pathname !== "/" ? "Navbar active" : "navbar"}
        >
          <div>
            <Link to="/" className="Link">
              {" "}
              <h1> Some Website</h1>
            </Link>
          </div>
          <div className="nav-items">
            <div>Our Business</div>
            <div>Explor</div>
            <div>English</div>
            <div> Signin</div>
            {!currentUser?.isSeller && <div>Become a seller</div>}

            {!currentUser && (
              <div>
                <button className="button-join">Join</button>
              </div>
            )}

            {currentUser && (
              <div className="user-icons" onClick={() => setOpen(!open)}>
                <img
                  src="https://w7.pngwing.com/pngs/886/300/png-transparent-user-other-furniture-child-thumbnail.png"
                  alt=""
                  className="usericon"
                  width="30px"
                  height="30px"
                />
                <div>{currentUser?.username}</div>
                {open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link className="Link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="Link" to="/add">
                          Add New Gigs
                        </Link>
                      </>
                    )}
                    <Link className="Link" to="/orders">
                      Orders
                    </Link>
                    <Link className="Link" to="/messages">
                      Messages
                    </Link>
                    <Link className="Link" to="/">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {active || pathname !== "/" ? (
          <div>
            <hr className="hr" />
            <div className="navbar-items">
              <Link className="Link" to="/">
                Graphics & Design
              </Link>
              <Link className="Link" to="/">
                Video & animation
              </Link>
              <Link className="Link" to="/">
                Writing & Translation
              </Link>
              <Link className="Link" to="/">
                AI Services
              </Link>
              <Link className="Link" to="/">
                Digital Marketing
              </Link>
              <Link className="Link" to="/">
                Music & Audio
              </Link>
              <Link className="Link" to="/">
                Programming & Tech
              </Link>
              <Link className="Link" to="/">
                Business
              </Link>
              <Link className="Link" to="/">
                LifeStyle
              </Link>
            </div>
            <hr className="hr" />
          </div>
          
        ) : null}
      </div>
    </>
  );
};
export default Navbar;
