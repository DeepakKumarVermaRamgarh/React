import "./styles.css";

export default function App() {

  const buttonStyle = {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }

  const inputStyle = {
    padding: 10
  }

  const formStyle = {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  }

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    gap: 20
  }

  return (
    <div className="App">
      <form style={formStyle}>
        <h3 style={{ fontSize: "2rem", letterSpacing: 2 }}>Sign Up</h3>
        <input style={inputStyle} placeholder="Username" />
        <input style={inputStyle} placeholder="Email" />
        <input style={inputStyle} placeholder="Password" />
        <div
          style={divStyle}
        >
          <button
            style={buttonStyle}
          >
            Cancel
          </button>
          <button
            style={buttonStyle}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
