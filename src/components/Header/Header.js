const Header = () => {
  
  const h1Style = {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  };

  return (
    <header style={{
      padding: "20px 0",
      lineHeight: "1.5em"
    }}>
      <h1 style={h1Style}>
        todos
      </h1>
    </header>
  )
}

export default Header;