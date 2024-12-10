
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/homes/home-1";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import About from "./components/about";
import AboutTwo from "./components/about-2";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Project from "./components/project";
import ProjectDetails from "./components/project-details";
import Pricing from "./components/pricing";
import Team from "./components/team";
import Faq from "./components/faq"; 
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import NotFound from "./components/Error";



const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/home-2", element: <HomeTwo /> },
  { path: "/home-3", element: <HomeThree /> },
  { path: "/about", element: <About /> },
  { path: "/about-2", element: <AboutTwo /> },
  { path: "/service", element: <Service /> },
  { path: "/service-details", element: <ServiceDetails /> },
  { path: "/project", element: <Project /> },
  { path: "/project-details", element: <ProjectDetails /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/team", element: <Team /> },
  { path: "/faq", element: <Faq /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog-details", element: <BlogDetails /> },
  { path: "/contact", element: <Contact /> },



  { path: "*", element: <NotFound /> },
]);


function App() {

  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
