import { useState } from "react";
import { Categoriebtn } from "./components/Categoriebtn";
import { Header } from "./components/Header";
import { InputField } from "./components/InputField";
import "./style.css";

function App() {
  const generateImage = () => {
    let l = [];
    for (let i = 0; i < 25; i++) {
      l.push("https://picsum.photos/240/230");
    }
    return l;
  };
  const getBtn = () => {
    let l = [];
    l = images.map((el) => {
      return el.categorie;
    });

    return l;
  };
  const [images, setImages] = useState([
    { categorie: "beachs", pics: generateImage() },
    { categorie: "mountain", pics: generateImage() },
    { categorie: "birds", pics: generateImage() },
    { categorie: "birds", pics: generateImage() },
    { categorie: "birds", pics: generateImage() },
    { categorie: "birds", pics: generateImage() },
    { categorie: "birds", pics: generateImage() },
    
  ]);

  return (
    <div className="container">
      <Header />
      <InputField />
      <Categoriebtn getBtn={getBtn} />
    </div>
  );
}

export default App;
