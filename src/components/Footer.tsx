const HANDLE = "kazzyfrog";
const GITHUB_URL = "#";

const Footer = () => {
  return (
    <footer>
      <p className="text-gray-700">
        Created by{" "}
        <a className="text-emerald-600" href={GITHUB_URL}>
          @{HANDLE}
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
