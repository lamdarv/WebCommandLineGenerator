import React, {useState} from "react";

export default function Form() {
    const [type, setType] = useState("");
    const [projectName, setProjectName] = useState("");
    const [frontendType, setFrontendType] = useState("");
    const [backendType, setBackendType] = useState("");
    const [backendFramework, setBackendFramework] = useState("");
    const [database, setDatabase] = useState("");
    const [frontendFramework, setFrontendFramework] = useState("");
    const [cssFramework, setCssFramework] = useState("");
    const [examples, setExample] = useState(false);
    const [command, setCommand] = useState("");
  
    const generateCommand = () => {
      let command = `npx create-kuproy@beta ${projectName}`;
  
      //Fullstack
      if (type === "fullstack") {
        command += " Fullstack";
        if (backendFramework === "fastify") {
          command += " Fastify";
        } else if (backendFramework === "express") {
          command += " Express";
        }
  
        if (database === "MongoDB") {
          command += " MongoDB";
        } else if (database === "PostgreSQL") {
          command += " PostgreSQL";
        } else if (database === "MySQL") {
          command += " MySQL";
        }
  
        if (frontendFramework === "React") {
          command += " React";
        } else if (frontendFramework === "Vue") {
          command += " Vue";
        }
  
        if (cssFramework === "bootstrap") {
          command += " Bootstrap";
        } else if (cssFramework === "tailwind") {
          command += " Tailwind";
        }
        
        

      //Backend Type
      } else if (type === "backend") {
        command += " Backend";
        if (backendFramework === "fastify") {
          command += " Fastify";
        } else if (backendFramework === "express") {
          command += " Express";
        }
  
        if (database === "MongoDB") {
          command += " MongoDB";
        } else if (database === "PostgreSQL") {
          command += " PostgreSQL";
        } else if (database === "MySQL") {
          command += " MySQL";
        }
        
      //Frontend 
      } else if (type === "frontend"){
        command += " Frontend";
        if (frontendFramework === "React") {
          command += " React";
        } else if (frontendFramework === "Vue") {
          command += " Vue";
        }
  
        if (cssFramework === "bootstrap") {
          command += " Bootstrap";
        } else if (cssFramework === "tailwind") {
          command += " Tailwind";
        }
      }
  
      if (examples === "yes") {
        command += " yes";
      } else if (examples === "no") {
        command += " no";
      }
      
      return command;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const generatedCommand = generateCommand();
        setCommand(generatedCommand);
    };

    return (
      <div>
        <div className=" m-11 flex">
            <form action="" className="bg-custom-gray-6 p-5 w-1/2 rounded-40 shadow-lg">
                <div>
                <div className="flex flex-col">
                <label className="flex items-left" htmlFor="projectName">Project Name</label>
                    <input
                    className="mt-2 bg-transparent border-b border-gray-40 outline-none"
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                
                <label>Project Type</label>
                <div>
                    <input
                    type="radio"
                    id="fullstack"
                    name="type"
                    value="fullstack"
                    checked={type === "fullstack"}
                    onChange={(e) => {
                        setType(e.target.value);
                        setFrontendType("");
                        setBackendFramework("");
                        setDatabase("");
                        setFrontendFramework("");
                        setCssFramework("");
                    }}
                    />
                    <label htmlFor="fullstack"> Fullstack</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="frontend"
                    name="type"
                    value="frontend"
                    checked={type === "frontend"}
                    onChange={(e) => {
                        setType(e.target.value);
                        setFrontendType("");
                        setBackendFramework("");
                        setDatabase("");
                        setFrontendFramework("");
                        setCssFramework("");
                    }}
                    />
                    <label htmlFor="frontend"> Frontend</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="backend"
                    name="type"
                    value="backend"
                    checked={type === "backend"}
                    onChange={(e) => {
                        setType(e.target.value);
                        setBackendType("");
                        setBackendFramework("");
                        setDatabase("");
                        setFrontendFramework("");
                        setCssFramework("");
                    }}
                    />
                    <label htmlFor="backend"> Backend</label>
                </div>
                </div>

                {type === "fullstack" && (
                    <>
                        <div>
                            <label htmlFor="backendFramework">Framework Backend</label>
                            <div>
                                <input
                                type="radio"
                                id="fastify"
                                name="backendFramework"
                                value="fastify"
                                checked={backendFramework === "fastify"}
                                onChange={(e) => setBackendFramework(e.target.value)}
                                />
                                <label htmlFor="fastify">Fastify</label>
                            </div>
                            <div>
                                <input
                                type="radio"
                                id="express"
                                name="backendFramework"
                                value="express"
                                checked={backendFramework === "express"}
                                onChange={(e) => setBackendFramework(e.target.value)}
                                />
                                <label htmlFor="express">Express</label>
                            </div>
                            <label htmlFor="database">Database</label>
                            <div>
                                <input
                                type="radio"
                                id="MongoDB"
                                name="database"
                                value="MongoDB"
                                checked={database === "MongoDB"}
                                onChange={(e) => setDatabase(e.target.value)}
                                />
                                <label htmlFor="MongoDB">MongoDB</label>
                            </div>
                            <div>
                                <input
                                type="radio"
                                id="PostgreSQL"
                                name="database"
                                value="PostgreSQL"
                                checked={database === "PostgreSQL"}
                                onChange={(e) => setDatabase(e.target.value)}
                                />
                                <label htmlFor="PostgreSQL">PostgreSQL</label>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="frontendFramework">Framework Frontend</label>
                            <div>
                                <input
                                type="radio"
                                id="React"
                                name="frontendFramework"
                                value="React"
                                checked={frontendFramework === "React"}
                                onChange={(e) => setFrontendFramework(e.target.value)}
                                />
                                <label htmlFor="React">React</label>
                            </div>
                            <div>
                                <input
                                type="radio"
                                id="Vue"
                                name="frontendFramework"
                                value="Vue"
                                checked={frontendFramework === "Vue"}
                                onChange={(e) => setFrontendFramework(e.target.value)}
                                />
                                <label htmlFor="Vue">Vue</label>
                            </div>
                            <label htmlFor="cssFramework">Framework CSS</label>
                            <div>
                                <input
                                type="radio"
                                id="bootstrap"
                                name="cssFramework"
                                value="bootstrap"
                                checked={cssFramework === "bootstrap"}
                                onChange={(e) => setCssFramework(e.target.value)}
                                />
                                <label htmlFor="bootstrap">Bootstrap</label>
                            </div>
                            <div>
                                <input
                                type="radio"
                                id="tailwind"
                                name="cssFramework"
                                value="tailwind"
                                checked={cssFramework === "tailwind"}
                                onChange={(e) => setCssFramework(e.target.value)}
                                />
                                <label htmlFor="tailwind">Tailwind</label>
                            </div>
                            <label htmlFor="examples">examples</label>
                            <div>
                                <input
                                type="radio"
                                id="yes"
                                name="examples"
                                value="yes"
                                checked={examples === "yes"}
                                onChange={(e) => setExample(e.target.value)}
                                />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div>
                                <input
                                type="radio"
                                id="no"
                                name="examples"
                                value="no"
                                checked={examples === "no"}
                                onChange={(e) => setExample(e.target.value)}
                                />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>

                        
                    </>
                    )
                }

                {/* {type === "backend"} */}
                <div>
                    <button onClick={handleSubmit}>Generate Command</button>
                </div>
            </form>
            <div>
                <p>{command}</p>
            </div>
        </div>

        
      </div>
    )
  }