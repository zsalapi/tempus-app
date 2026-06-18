import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import grid from "./assets/grid.svg"; // Grid háttér
import google from "./assets/web_neutral_sq_na.svg"; //Google logó
import X from "./assets/x.png"; //X logó (Twitter)
import Tempus from "./assets/tempus-logo.svg"; //Tempus logó

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Bal oldal: Regisztráció */}
        <main className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "80%" }}>
            <h1>Regisztráció</h1>
            {/* Az alcím kapott egy id-t, amivel a form mezők leírhatják magukat */}
            <p id="reg-desc">
              Add meg e-mail címedet és jelszavadat a regisztrációhoz!
            </p>

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label
                    htmlFor="vezeteknev"
                    className="form-label d-block text-start"
                  >
                    Vezetéknév{" "}
                    <span
                      aria-hidden="true"
                      style={{
                        color: "red",
                        fontSize: "0.8em",
                        verticalAlign: "super",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="vezeteknev"
                    className="form-control"
                    placeholder="Teszt"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label
                    htmlFor="keresztnev"
                    className="form-label d-block text-start"
                  >
                    Keresztnév{" "}
                    <span
                      aria-hidden="true"
                      style={{
                        color: "red",
                        fontSize: "0.8em",
                        verticalAlign: "super",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="keresztnev"
                    className="form-control"
                    placeholder="Elek"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label d-block text-start"
                >
                  Email cím{" "}
                  <span
                    aria-hidden="true"
                    style={{
                      color: "red",
                      fontSize: "0.8em",
                      verticalAlign: "super",
                    }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="example@mail.com"
                  required
                  aria-required="true"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="jelszo"
                  className="form-label d-block text-start"
                >
                  Jelszó{" "}
                  <span
                    aria-hidden="true"
                    style={{
                      color: "red",
                      fontSize: "0.8em",
                      verticalAlign: "super",
                    }}
                  >
                    *
                  </span>
                </label>
                {/* aria-describedby segíti a képernyőolvasót a jelszó követelmények megértésében */}
                <input
                  type="password"
                  id="jelszo"
                  className="form-control"
                  placeholder="************"
                  aria-describedby="pwd-help"
                  required
                  aria-required="true"
                />
                <small id="pwd-help" className="visually-hidden">
                  Legalább 10 karakter, kis és nagybetű és szám is legyen benne.
                </small>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input mt-0"
                  id="check"
                />
                <label
                  className="form-check-label ms-2 text-start"
                  htmlFor="check"
                  style={{ color: "#667085", fontSize: "1rem" }}
                >
                  &nbsp;&nbsp; Fiók létrehozásával elfogadja a{" "}
                  <a href="#">Felhasználási feltételeket,</a>
                  <br />
                  &nbsp;&nbsp;&nbsp;és az{" "}
                  <a href="#">Adatvédelmi irányelveket</a>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Regisztráció
              </button>
            </form>

            <div className="mb-3">
              <p class="text-left">
                Már van fiókja?{" "}
                <a
                  id="login"
                  href="/login"
                  aria-label="Bejelentkezés meglévő fiókba"
                >
                  Bejelentkezés
                </a>
              </p>
            </div>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-2">Vagy</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="d-flex">
              <button
                className="btn w-100 mb-2 me-3"
                style={{ backgroundColor: "#f2f4f7" }}
              >
                <img
                  src={google}
                  alt="Bejelentkezés Google fiókkal"
                  aria-hidden="true"
                  style={{ width: "50px", marginRight: "8px" }}
                />
                Google fiókkal
              </button>
              <button
                className="btn w-100 mb-2"
                style={{ backgroundColor: "#f2f4f7" }}
              >
                <img
                  src={X}
                  alt="Bejelentkezés X fiókkal"
                  aria-hidden="true"
                  style={{ width: "30px", marginRight: "8px" }}
                />
                X fiókkal
              </button>
            </div>
          </div>
        </main>

        {/* Jobb oldal: Grid háttér */}
        <div
          className="col-md-6 d-flex flex-column"
          style={{
            backgroundColor: "rgb(22, 25, 80)",
            backgroundImage: `url(${grid})`,
            /* A 100% 100% érték hatására a kép széthúzódik a div teljes területén */
            backgroundSize: "100% 100%",
            /* Ezzel biztosítjuk, hogy ne ismétlődjön a kép */
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-grow-1"></div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src={Tempus}
              alt="Tempus logó"
              style={{ maxWidth: "33%", height: "auto" }}
            />
            <p class="kuldetes">Közös küldetés</p>
          </div>
          <div className="flex-grow-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
