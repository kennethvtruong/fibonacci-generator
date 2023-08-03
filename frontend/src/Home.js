import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  const navigateToFibListPage = (fibList) => {
    // sends the queried/newly created data and sends it to this component to display
    navigate("/sequence", { state: { fibList: fibList } });
  };

  const handleSubmit = async (num) => {
    const json = JSON.stringify({ number: num });
    const response = await axios.post(
      "http://localhost:3000/sendNumbers",
      json,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigateToFibListPage(response.data);
  };

  return (
    <div>
      <h2>Generate Fibonacci Sequence</h2>
      <input
        type="number"
        name="number"
        min="0"
        max="40000"
        onChange={(e) => {
          setNumber(e.target.valueAsNumber);
        }}
      ></input>
      <div>
        <button
          onClick={() => {
            handleSubmit(number);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;
