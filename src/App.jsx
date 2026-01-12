import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { ResultForm } from "./components/ResultForm";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    //ส่งข้อมูลจาก InputForm ไปยัง ResultForm
    setSubmittedData(formData);
  };

  const handleNewSurvey = () => {
    //ทำแบบสำรวจใหม่กลับไปหน้า InputForm
    setSubmittedData(null);
  };

  return (
    <div>
      {submittedData ? (
        <ResultForm formData={submittedData} onNewSurvey={handleNewSurvey} />
      ) : (
        <InputForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
