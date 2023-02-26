import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here (coming from state)");

  // ! Change State or Set State
  // Reset
  const reset = () => {
    console.log("reset function call");
    setText("");
    props.showAlert("Reset Done", "primary");
  };
  // UpperCase
  const upperCase = () => {
    console.log("Uppercase Function Call" + text);
    let newText = text;
    setText(newText.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  // LowerCase
  const lowerCase = () => {
    console.log("Lower case Function Call" + text);
    let newText = text;
    setText(newText.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  // Copy to Clipboard
  const clipboardCopy = () => {
    let newText = text;
    // text.focus();
    // document.getElementById("myinput").focus();
    navigator.clipboard.writeText(newText);
    props.showAlert("Copied to Clipboard", "success");
  };
  //  Removes Extra Spaces
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces hasbeen Removed", "success");
  };
  // const decorate = () => {
  //   let newText = text;
  //   setText((newText.style.color = "blue"));
  // };

  // ! listen for onChange
  const handleOnchange = (event) => {
    console.log("Handle on Change function Call");
    setText(event.target.value);
  };
  return (
    <>
      <h3
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        {props.heading}
      </h3>
      <div className="container">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1 myinput"
            rows="3"
            onChange={handleOnchange}
            value={text}
          ></textarea>
        </div>{" "}
        <button className="btn btn-danger mx-2" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-primary mx-2" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={clipboardCopy}>
          Copy to Clipboard
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={decorate}>
          Decorate
        </button> */}
      </div>
      <div className="container">
        <h1
          style={{
            color: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Text Summary
        </h1>
        <p
          style={{
            color: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Some {text.split(" ").length} words and {text.length} characters
        </p>
        <p
          style={{
            color: props.mode === "light" ? "#042743" : "white",
          }}
        >
          User Need {text.split(" ").length * 0.008} minutes to read the Paragraph
        </p>
      </div>
    </>
  );
}
