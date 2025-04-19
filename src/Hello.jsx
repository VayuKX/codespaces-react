import './Hello.css';
function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

const Hello = ({name="Smith",surname="Doe",age="10"}) => {
    return (
        <div>
            
            <h1>
                {"Mr. " + name} {surname} {age}
            </h1>

            <Profile / > 
            
        </div>
    );
}

export default Hello;