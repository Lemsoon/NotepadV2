import "../scss/base.scss";
import "../scss/components/NameInput.scss";

function NameInput() {
  function getName() {
    let nameInput = document.querySelector(".name-input") as HTMLInputElement;
    let name = nameInput.value.toLowerCase();
    console.log(name);
    localStorage.setItem("username", name);
  }
  return (
    <>
      <div className="name-page">
        <h1 className="name-title">What is your name?</h1>
        <input type="text" id="name-input" className="name-input" placeholder="name..." />
        <a className="submit-name-button" onClick={getName} href="/">
          done
        </a>
      </div>
    </>
  );
}

export default NameInput;
