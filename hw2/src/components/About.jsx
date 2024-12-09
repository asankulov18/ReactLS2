
function About({ info }) {
    const { title, body } = info;
    return (
      <div>
        <h2>About</h2>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
      </div>
    );
  }
export default About;
