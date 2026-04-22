import Header from "./component/Header";
import Footer from "./component/Footer";
import Up from "./component/Up";
import ComSection from "./component/ComSection";
import { useEffect, useRef } from "react";
function App() {
  let sections = useRef([])
  useEffect(function () {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0px)"
        }
      })
    }, {
      threshold: 0.3
    })
    sections.current.forEach(function (section) {
      observer.observe(section)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <ComSection data={sections} />
      <Footer data={sections} />
      <Up />
    </div>
  );
}
export default App;
