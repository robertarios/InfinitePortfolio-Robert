import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 justify-between">
          <div>
            <h3 className="text-2xl font-bold">Robert</h3>
            <p className="text-gray-400">Undergraduate Informatics Student</p>
          </div>

          <div className="flex space-x-6 text-2xl">
            <a href="https://www.linkedin.com/in/robert-mangaratua-aritonang" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/robertarios" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/robertaritonang_/" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Robert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
