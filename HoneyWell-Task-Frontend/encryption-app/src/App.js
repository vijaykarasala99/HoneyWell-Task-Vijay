import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS
import honeywellLogo from "./honeywell-logo.png"; 

function App() {
    const [firstName, setFirstName] = useState("");
    const [encryptedText, setEncryptedText] = useState("");
    const [decryptedText, setDecryptedText] = useState("");

    const handleEncrypt = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/encrypt", 
                { text: firstName }, // Send JSON object
                { headers: { "Content-Type": "application/json" } }
            );
            setEncryptedText(response.data);
            setDecryptedText(""); // Reset decrypted text
        } catch (error) {
            console.error("Encryption error:", error);
        }
    };

    const handleDecrypt = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/decrypt", 
                { text: encryptedText }, // Send JSON object
                { headers: { "Content-Type": "application/json" } }
            );
            setDecryptedText(response.data);
        } catch (error) {
            console.error("Decryption error:", error);
        }
    };

    return (
        <div className="container">
            <img src={honeywellLogo} alt="Honeywell Logo" className="logo" />
            <h1 className="title">HONEY WELL PROJECT BY VIJAY</h1>

            <div className="form-container">
                <label>Enter First Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <button className="encrypt-btn" onClick={handleEncrypt}>Encrypt</button>

                {encryptedText && (
                    <>
                        <label>Encrypted Text:</label> 
                        <input type="text" value={encryptedText} readOnly />
                        <button className="decrypt-btn" onClick={handleDecrypt}>Decrypt </button>
                    </>
                )}

                {decryptedText && (
                    <>
                       <br></br> <label>Decrypted Text:</label>
                        <input type="text" value={decryptedText} readOnly />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
