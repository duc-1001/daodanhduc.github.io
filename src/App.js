import { Route, Routes, BrowserRouter } from "react-router-dom"
import { publicRoter } from "./myapp/router"
import DefaultLayout from "./myapp/compoments/layout/DefaultLayout"
import { Fragment } from "react"
import PopUp from "./myapp/compoments/layout/PopUp"


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {
            publicRoter.map((e, idx) => {
              const Page = e.element
              let Layout = DefaultLayout
              if (e.layout) {
                Layout = e.layout
              }
              else if (e.layout === null) {
                Layout = Fragment
              }
              return (
                <Route key={idx} path={e.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })
          }

        </Routes>
      </div>
    </BrowserRouter>
  )
}