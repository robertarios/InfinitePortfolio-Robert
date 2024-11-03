import projectJarkomImage from "../assets/project-jarkom.png";
import projectPboImage from "../assets/project-pbo.jpeg";
import spmbDelImage from "../assets/spmb-del.png";

const projects = [
  {
    id: 1,
    name: "SPMB IT Del",
    technologies: "Information system of Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del",
    image: spmbDelImage,
    github: "https://github.com/gabrielhtg/project-spmb-pabwe",
  },
  {
    id: 2,
    name: "Client-Server Application",
    technologies: "Create a file sharing application using Java. Users can send and receive files or documents using the local network.",
    image: projectJarkomImage,
    github: "https://github.com/robertarios/jarkom-client-server-app",
  },
  {
    id: 3,
    name: "GPA Calculator Application",
    technologies: "GPA Calculator Application A GPA calculator application using Java NetBeans is a program that allows users to calculate and track their Grade Point Average (GPA).",
    image: projectPboImage,
    github: "https://github.com/robertarios/pbo-GPACalculator",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#f0f8ff] text-black py-20" id="project"> {/* Background halaman */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#DBEAFE] p-6 rounded-lg shadow-lg hover:shadow-xl 
            transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
              <div>
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.technologies}</p>
              </div>
              <a href={project.github} className="mt-auto inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-center" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
