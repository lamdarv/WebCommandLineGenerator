import React, {useState} from "react";
import { css } from '@emotion/react';
import { PropagateLoader } from "react-spinners";
import { FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import os from 'browser-os';

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
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [os, setOs] = useState("");
    const [packageManager, setPackageManager] = useState("");
    const [language, setLanguage] = useState("");
  
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

    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (type == "fullstack" || !type) {
          if (!projectName || !type || !backendFramework || !database || !frontendFramework || !cssFramework) {
            alert("Please select all options!");
            return;
          } 
        } else if (type == "frontend") {
          if (!projectName || !type || !frontendFramework || !cssFramework) {
            alert("Please select all options!");
            return;
          }
        } else if (type == "backend"){
          if (!projectName || !type || !backendFramework || !database) {
            alert("Please select all options!");
            return;
          }
        }
        setTimeout(() => {
          setLoading(false);
          const generatedCommand = generateCommand();
          setCommand(generatedCommand);
        }, 1000); // set a timeout for 2 seconds
    };

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // set a timeout for 2 seconds
    };

    return (
      <div>
        <div className=" m-20 flex">
            <form action="" className="bg-custom-gray-6 p-5 w-2/3 rounded-10 shadow-lg">
                <div className="m-7">
                <div className="flex flex-col">
                <label className="flex items-left font-quicksand font-bold text-lg" htmlFor="projectName">Project Name</label>
                    <input
                    required="true"
                    className="mt-2 bg-transparent border-b border-gray-40 outline-none"
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                
                <label className="flex mt-5 font-quicksand font-bold text-lg">Project Type</label>
                  <div className="flex mt-2 border-b border-gray-40 pb-3">
                    <div class="mr-5"> 
                        <input className=""
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
                        <label className="font-mulish font-normal text-base" htmlFor="fullstack"> Fullstack</label>
                    </div>
                    <div class="mr-5">
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
                        <label className="font-mulish font-normal text-base" htmlFor="frontend"> Frontend</label>
                    </div>
                    <div class="mr-5">
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
                        <label className="font-mulish font-normal text-base" htmlFor="backend"> Backend</label>
                    </div>
                  </div>
                  
                </div>

                {type === "fullstack" && (
                  <>
                  <div className="m-7 ">
                      {/* FBE & DB */}
                      <div className="flex border-b border-gray-40 pb-3">
                        {/* Framework BE */}
                        <div id="fbe" className="w-1/2">
                          <label className="flex font-quicksand font-bold text-lg " htmlFor="backendFramework">Framework Backend</label>
                          <div className="flex mt-2 inline-block">
                            <div className="mr-5">
                                <input
                                type="radio"
                                id="fastify"
                                name="backendFramework"
                                value="fastify"
                                checked={backendFramework === "fastify"}
                                onChange={(e) => setBackendFramework(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="fastify">Fastify</label>
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
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="express">Express</label>
                            </div>
                          </div>
                        </div>

                        <div id="db" className="">
                          {/* Database */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="database">Database</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                              <input
                                type="radio"
                                id="MongoDB"
                                name="database"
                                value="MongoDB"
                                checked={database === "MongoDB"}
                                onChange={(e) => setDatabase(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="MongoDB">MongoDB</label>
                            </div>

                            <div className="mr-5">
                            <input
                              type="radio"
                              id="PostgreSQL"
                              name="database"
                              value="PostgreSQL"
                              checked={database === "PostgreSQL"}
                              onChange={(e) => setDatabase(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="PostgreSQL">PostgreSQL</label>
                            </div>

                            <div className="mr-5">
                            <input
                              type="radio"
                              id="MySQL"
                              name="database"
                              value="MySQL"
                              checked={database === "MySQL"}
                              onChange={(e) => setDatabase(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="MySQL">MySQL</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* FFE & FCSS */}
                      <div className="mt-7 flex border-b border-gray-40 pb-3 ">
                        <div id="ffe" className="w-1/2">
                          {/* Framework FE */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="frontendFramework">Framework Frontend</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                              <input
                                type="radio"
                                id="React"
                                name="frontendFramework"
                                value="React"
                                checked={frontendFramework === "React"}
                                onChange={(e) => setFrontendFramework(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="React">React</label>
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
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="Vue">Vue</label>
                            </div>
                          </div>
                        </div>

                        <div id="fcss" className="">
                          {/* Framework CSS */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="cssFramework">Framework CSS</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                            <input
                              type="radio"
                              id="bootstrap"
                              name="cssFramework"
                              value="bootstrap"
                              checked={cssFramework === "bootstrap"}
                              onChange={(e) => setCssFramework(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="bootstrap">Bootstrap</label>
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
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="tailwind">Tailwind</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Examples */}
                      <label className="flex mt-7 font-quicksand font-bold text-lg" htmlFor="examples">Examples</label>
                      <div className="flex border-b border-gray-40 pb-3 mt-2">
                        <div>
                            <input
                            type="radio"
                            id="yes"
                            name="examples"
                            value="yes"
                            checked={examples === "yes"}
                            onChange={(e) => setExample(e.target.value)}
                            />
                            <label className="ml-1 mr-5 font-mulish font-normal text-base" htmlFor="yes">Yes</label>
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
                            <label className="ml-1 font-mulish font-normal text-base" htmlFor="no">No</label>
                        </div>
                      </div>
                  </div>
                    </>
                    )
                }
                {type === "frontend" && (
                  <>
                  <div className="m-7">
                    {/* FFE & FCSS */}
                    <div className="mt-7 flex border-b border-gray-40 pb-3 ">
                        <div id="ffe" className="w-1/2">
                          {/* Framework FE */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="frontendFramework">Framework Frontend</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                              <input
                                type="radio"
                                id="React"
                                name="frontendFramework"
                                value="React"
                                checked={frontendFramework === "React"}
                                onChange={(e) => setFrontendFramework(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="React">React</label>
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
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="Vue">Vue</label>
                            </div>
                          </div>
                        </div>

                        <div id="fcss" className="">
                          {/* Framework CSS */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="cssFramework">Framework CSS</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                            <input
                              type="radio"
                              id="bootstrap"
                              name="cssFramework"
                              value="bootstrap"
                              checked={cssFramework === "bootstrap"}
                              onChange={(e) => setCssFramework(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="bootstrap">Bootstrap</label>
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
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="tailwind">Tailwind</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Examples */}
                      <label className="flex mt-7 font-quicksand font-bold text-lg" htmlFor="examples">Examples</label>
                      <div className="flex border-b border-gray-40 pb-3 mt-2">
                        <div>
                            <input
                            type="radio"
                            id="yes"
                            name="examples"
                            value="yes"
                            checked={examples === "yes"}
                            onChange={(e) => setExample(e.target.value)}
                            />
                            <label className="ml-1 mr-5 font-mulish font-normal text-base" htmlFor="yes">Yes</label>
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
                            <label className="ml-1 font-mulish font-normal text-base" htmlFor="no">No</label>
                        </div>
                      </div>
                  </div>

                  </>
                )}

                {type === "backend" && (
                  <>
                    <div className="m-7">
                      {/* FBE & DB */}
                      <div className="flex border-b border-gray-40 pb-3">
                        {/* Framework BE */}
                        <div id="fbe" className="w-1/2">
                          <label className="flex font-quicksand font-bold text-lg " htmlFor="backendFramework">Framework Backend</label>
                          <div className="flex mt-2 inline-block">
                            <div className="mr-5">
                                <input
                                type="radio"
                                id="fastify"
                                name="backendFramework"
                                value="fastify"
                                checked={backendFramework === "fastify"}
                                onChange={(e) => setBackendFramework(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="fastify">Fastify</label>
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
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="express">Express</label>
                            </div>
                          </div>
                        </div>

                        <div id="db" className="">
                          {/* Database */}
                          <label className="flex font-quicksand font-bold text-lg" htmlFor="database">Database</label>
                          <div className="flex mt-2">
                            <div className="mr-5">
                              <input
                                type="radio"
                                id="MongoDB"
                                name="database"
                                value="MongoDB"
                                checked={database === "MongoDB"}
                                onChange={(e) => setDatabase(e.target.value)}
                                />
                                <label className="ml-1 font-mulish font-normal text-base" htmlFor="MongoDB">MongoDB</label>
                            </div>

                            <div className="mr-5">
                            <input
                              type="radio"
                              id="PostgreSQL"
                              name="database"
                              value="PostgreSQL"
                              checked={database === "PostgreSQL"}
                              onChange={(e) => setDatabase(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="PostgreSQL">PostgreSQL</label>
                            </div>

                            <div className="mr-5">
                            <input
                              type="radio"
                              id="MySQL"
                              name="database"
                              value="MySQL"
                              checked={database === "MySQL"}
                              onChange={(e) => setDatabase(e.target.value)}
                              />
                              <label className="ml-1 font-mulish font-normal text-base" htmlFor="MySQL">MySQL</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Examples */}
                      <label className="flex mt-7 font-quicksand font-bold text-lg" htmlFor="examples">Examples</label>
                      <div className="flex border-b border-gray-40 pb-3 mt-2">
                        <div>
                            <input
                            type="radio"
                            id="yes"
                            name="examples"
                            value="yes"
                            checked={examples === "yes"}
                            onChange={(e) => setExample(e.target.value)}
                            />
                            <label className="ml-1 mr-5 font-mulish font-normal text-base" htmlFor="yes">Yes</label>
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
                            <label className="ml-1 font-mulish font-normal text-base" htmlFor="no">No</label>
                        </div>
                      </div>
                    </div>
                  </>
                )}


                <div>
                    <button onClick={handleSubmit} className="font-quicksand bg-custom-green-1 hover:drop-shadow-xl text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline">
                      Generate
                    </button>
                </div>
            </form>
            <div className="ml-7 bg-custom-gray-6 p-5 w-1/3 rounded-10 shadow-lg">
              <div className="flex justify-between items-center m-7">
                <h2 className="font-quicksand font-bold text-lg mb-3">Generated Command</h2>
                
              </div>
              <p className="font-scpro font-normal text-base flex flex-col items-center justify-center m-7 p-5 bg-custom-white-1 rounded-10 border-0 shadow-lg">
                {loading ? (
                  <PropagateLoader className="mt-4 mb-8 font-mulish font-normal text-base" color={"#36D7B7"} css={override} size={16} />
                ) : (
                  command
                )}
              </p>
              <CopyToClipboard text={command} onCopy={handleCopy}>
                <button className=" font-quicksand bg-custom-green-1 hover:drop-shadow-xl text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
        </div>
      </div>
    )
  }