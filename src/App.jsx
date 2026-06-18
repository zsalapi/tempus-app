import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import grid from "./assets/grid.svg"; // Ügyelj rá, hogy a kép elérési útja helyes legyen

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Bal oldal: Regisztráció */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "80%" }}>
            <h1>Regisztráció</h1>
             <label className="text-center">Add meg e-mail címedet és jelszavadat a regisztrációhoz!</label>
            <div><br></br></div>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label d-block text-start">Vezetéknév <span style={{ color: 'red', fontSize: '0.8em', verticalAlign: 'super' }}>*</span></label>
                  <input type="text" className="form-control" placeholder="Teszt" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label d-block text-start">Keresztnév <span style={{ color: 'red', fontSize: '0.8em', verticalAlign: 'super' }}>*</span></label>
                  <input type="text" className="form-control" placeholder="Elek" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label d-block text-start">Email cím <span style={{ color: 'red', fontSize: '0.8em', verticalAlign: 'super' }}>*</span></label>
                <input type="email" className="form-control" placeholder="example@mail.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label d-block text-start">Jelszó <span style={{ color: 'red', fontSize: '0.8em', verticalAlign: 'super' }}>*</span></label>
                <input type="password" className="form-control" placeholder="************" required />
              </div>
              <div className="mb-3 form-check d-block text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label d-block text-start" htmlFor="check">A fiók létrehozásával elfogadja a <a href="#">Felhasználási feltételeket</a> és az <a href="#">Adatvédelmi irányelveket</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Regisztráció
              </button>
            </form>

            <p className="text-center">Már van fiókja?</p><a href="#">Bejelentkezés</a>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-2">Vagy</span>
              <hr className="flex-grow-1" />
            </div>
            <div>
              <button
                className="btn w-100 mb-2"
                style={{ backgroundColor: "#e0e0e0" }}
              >
                Google fiókkal
              </button>
              <button
                className="btn w-100"
                style={{ backgroundColor: "#e0e0e0" }}
              >
                X (Twitter) fiókkal
              </button>
            </div>
          </div>
        </div>

        {/* Jobb oldal: Grid háttér */}
        <div
          className="col-md-6 d-flex flex-column"
          style={{ backgroundColor: "rgb(22, 25, 80)" }}
        >
          <div className="flex-grow-1"></div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              height: "300px",
              backgroundImage: `url(${grid})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Középső elem a jobb oldalon */}
          </div>
          <div className="flex-grow-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
