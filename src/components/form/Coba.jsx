import React, {useState} from "react";

export default function Coba() {
    const [type, setType] = useState("");
    const [projectName, setProjectName] = useState("");
    const [backendFramework, setBackendFramework] = useState("");
    const [example, setExample] = useState(false);
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
        <form action="">
            <div>
            <div>
            <label htmlFor="projectName">Project Name</label>
                <input
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
                    setBackendFramework("");
                }}
                />
                <label htmlFor="fullstack"> Fullstack</label>
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
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Generate Command</button>
                        <p>Generated Command: {command}</p>
                    </div>
                </>
            )
            }
        </form>
      </div>
    )
  }