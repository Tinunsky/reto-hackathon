import logo from "./assets/logo.jpg";

export function Header() {
  return (
    <div style={{position: "relative",}}>
      <img src={logo} alt="logo" />
    </div>
  );
}
