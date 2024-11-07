import Perfil from "./components/Perfil"
import Movies from './components/Movies.jsx'
import MoviesSearch from "./components/MoviesSearch.jsx"
import ReactjsProtectedRoute from './components/ReactjsProtectRoutes'
import UserContext from './context/UserContext.jsx'
import FooterStart from './components/FooterStart.jsx'

function App() {
    const [isLogged, setIsLogged] = useState(false)

    return (
      <>
        <UserContext.Provider value={{ isLogged, setIsLogged }}>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route
                  path='/'
                  element={
                    <ReactjsProtectedRoute isLoggedIn={isLogged}>
                      <InitialHeader />
                      <HomeSession />
                      <FooterStart />
                    </ReactjsProtectedRoute>
                  }
                />
                <Route
                  path='/perfil'
                  element={
                    <ReactjsProtectedRoute isLoggedIn={isLogged}>
                      <Perfil />
                    </ReactjsProtectedRoute>
                  }
                />
                <Route
                  path='/movie/:id'
                  element={
                    <ReactjsProtectedRoute isLoggedIn={isLogged}>
                      <InitialHeader />
                      <Movies />
                      <FooterStart />
                    </ReactjsProtectedRoute>
                  }
                />
                <Route
                  path='/search'
                  element={
                    <ReactjsProtectedRoute isLoggedIn={isLogged}>
                      <InitialHeader />
                      <MoviesSearch />
                      <FooterStart />
                    </ReactjsProtectedRoute>
                  }
                />
                <Route path='/login' element={<><Heading /> <LoginForms /> <FooterForm /></>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </>
    )
  }

export default App;