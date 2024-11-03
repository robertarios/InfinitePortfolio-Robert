const resumeData = {
  education: [
    {
      id: 1,
      title: "Bachelor Degree in Informatics",
      date: "2021 - 2025 (Expected)",
      institution: "Del Institute of Technology",
      description: "Bachelor's education in Informatics at IT DEL provides me with the opportunity to delve into the world of information technology by gaining a comprehensive understanding of fundamental concepts and practical applications in this field.",
    },
    {
      id: 2,
      title: "High School Degree",
      date: "2018 - 2021",
      institution: "SMA Negeri 2 Lubuk Pakam",
      description: "Education in high school with a focus on science allows me to broaden my understanding of natural sciences and develop critical and analytical skills that are useful not only in my future career but also in everyday life.",
    },
  ],
  organization: [
    {
      id: 3,
      title: "Chairman of MPH",
      date: "Sep 2023 - Present",
      institution: "Majelis Permusyawaratan Himpunan (MPH)",
      description: "As the Chair of MPH, my responsibilities include forming and dissolving the Election Committee (KPU) within the organization, as well as receiving and integrating members' aspirations into the decision-making process.",
    },
    {
      id: 4,
      title: "Education Division",
      date: "Aug 2022 - Aug 2023",
      institution: "Himpunan Mahasiswa Sarjana Informatika (HIMASTI)",
      description: "In the Education Division, we are committed to providing quality education to HIMASTI members through structured course tutorials and diverse learning resources.",
    },
    {
      id: 5,
      title: "Visualization Division",
      date: "Sep 2023 - Oct 2023",
      institution: "Del Institute of Technology",
      description: "In the visualization division, we are responsible for creating stunning digital designs for the IT DEL graduation ceremony, ensuring that every detail of the visual presentation reflects the grandeur of the event.",
    },
  ],
};

const Resume = () => {
  return (
    <div className="bg-[#f0f8ff] text-black py-20" id="resume">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">RESUME</h2>
        <p className="text-center text-lg mb-12">
          Embarking on this journey to present my educational background and organizational affiliations,
          I offer a comprehensive glimpse into the formative institutions and professional networks that have shaped my growth and aspirations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-8 pl-6"> {/* Adjusted padding to align with bullet position */}
              {resumeData.education.map((item) => (
                <div key={item.id} className="relative flex items-start">
                  {/* Bullet positioned as primary marker */}
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-0 top-1"></div>
                  <div className="ml-6"> {/* Adds space between bullet and text */}
                    <h4 className="text-xl font-bold text-blue-600">{item.title}</h4>
                    <p className="text-sm bg-gray-200 inline-block px-2 py-1 rounded mt-1">{item.date}</p>
                    <p className="italic mt-1">{item.institution}</p>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organization Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Organization</h3>
            <div className="space-y-8 pl-6"> {/* Adjusted padding to align with bullet position */}
              {resumeData.organization.map((item) => (
                <div key={item.id} className="relative flex items-start">
                  {/* Bullet positioned as primary marker */}
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-0 top-1"></div>
                  <div className="ml-6"> {/* Adds space between bullet and text */}
                    <h4 className="text-xl font-bold text-blue-600">{item.title}</h4>
                    <p className="text-sm bg-gray-200 inline-block px-2 py-1 rounded mt-1">{item.date}</p>
                    <p className="italic mt-1">{item.institution}</p>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Resume;
