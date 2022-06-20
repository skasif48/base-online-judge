
import "./Docs.css";

const Docs = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Docs of Online Judge</h2>

      <p className="text-center">
        If you find a bug or want to add a feature, consider opening a pull
        request or raise an issue.
      </p>
      <p className="text-center">
        See the contribution instruction in{" "}
        <a
          href="https://github.com/skasif48/base-online-judge"
          className="githubLink"
        >
          github
        </a>
      </p>
    </div>
  );
};

export default Docs;
