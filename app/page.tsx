/*
Fresh start — simple 2‑column layout.
Left column = 30% width.
Right column = 70% width.
This is a clean base you can build on.
*/

'use client'
import React from 'react'
import Detail_Box from '@/components/Detail_Box'
import About from '@/components/About'
import SocialIcons from '@/components/SocialIcons';


export default function Page() {


  const scrollToSection = (id: string, offset = 100) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
  
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  
  return (
    <main className="min-h-screen flex bg-gray-900 text-slate-100">

      {/* LEFT COLUMN — 30% */}
      <section
        className="w-[35%] h-screen p-8 pl-12 pt-16 sticky top-0 flex flex-col overflow-hidden"
      >
        <h1 className="text-4xl font-bold mb-4">Jarvis Nguyen</h1>
        <h3 className="text-md font-bold mb-4">Backend-Focused Developer</h3>
        <p className="text-slate-300 text-sm">
        Backend-focused developer with expertise in .NET and C#, experienced in building APIs, working with data, and contributing to frontend features when needed.  
        </p>
        <div className='pt-16'>
        <ul className='space-y-2'>
          <li className='transition-transform duration-400 hover:translate-x-3 hover:text-emerald-400 cursor-pointer'
          onClick={() => scrollToSection("about", 120)}>ABOUT</li>
          <li className='transition-transform duration-400 hover:translate-x-3 hover:text-emerald-400 cursor-pointer'
          onClick={() => scrollToSection("experience", 70)}>EXPERIENCE</li>
          <li className='transition-transform duration-400 hover:translate-x-3 hover:text-emerald-400 cursor-pointer'
          onClick={() => scrollToSection("project", 70)}>PROJECT</li>
          <li className='transition-transform duration-400 hover:translate-x-3 hover:text-emerald-400 cursor-pointer'
          onClick={() => scrollToSection("education", 70)}>EDUCATION</li>
        </ul>
        </div>

        <div className='pt-12'>
          <SocialIcons/>
        </div>
      </section>

      {/* RIGHT COLUMN — 70% */}
      <section className="w-[65%] min-h-screen pt-18 overflow-y-auto space-y-28 pr-10">
        <div id = 'about'>
        <About></About>
        </div>
        
        <div id = 'experience'>
          <h2 className="text-3xl font-semibold mb-4">EXPERIENCE</h2>

          <Detail_Box 
            date = "06/2024 to CURRENT"
            title = 'Data Developer'
            company = ', New Flyer'
            location = 'Winnipeg'
            detail = {[
              `Designed, built, and maintained scalable ETL/ELT pipelines to automate data ingestion, 
              transformation, and integration across multiple systems.`,
              "Built data pipeline to capture hourly orders update, processed using PySpark Notebooks and stored in Lakehouse, consumed by predictive analytic models.",
              "Created RPA to reduce time spend on manual database input by 70%.",
              `Refactored legacy ETL jobs and Fabrics pipelines, improving execution speed and lowering compute costs by 45%.`,
              "Automated web testing using Selenium to save repetitive workload and increase productivity by 50%.",
            ]}
            skill={['SQL', 'Python','Selenium', 'Oracle', 'Microsoft Fabrics', 'Data Warehouse']}
          />

          <Detail_Box
            date = '04/2022 to 06/2024'
            title='Software Developer 2'
            company=', Manitoba Public Insurance'
            location='Winnipeg'
            detail={[
              `Implemented features and enhancements using .NET, JavaScript and XML to
              strengthen DCOD product integrity and accessibility and increased
              customers engagement by 18%.`,
              `Diagnosed Duckcreek OnDemand issues, implemented solutions and
              provided Hexaware automated testings which reduce manual testing time
              by 30%.`,
              `Created automated build and release pipelines in Azure DevOps to streamline
              application delivery across multiple environment.`,
              `Amplified SQL queries efficiency by creating custom response that fit each
              single tasks, eliminated manual effort.`,
              `Designed, documented solution and insight comments that improving
              productivity by 20% for related work items.`,
            ]} 
            skill={['.NET', 'C#', 'PostgreSQL','DuckCreek', 'JS']}   
          />

          <Detail_Box
            date = '01/2021 to 04/2022'
            title='Full Stack Developer'
            company=', Norwind Interactive Ltd.'
            location='Winnipeg'
            detail={[
              `Satisfied the client's needs by successfully designing and implementing a
              cross-platform mobile payroll application using C# and Xamarin with
              MVVM design pattern, which resulted in a new contract being signed.`,
              `Developed and tested SQL queries, provide assist and related
              documentation.`,
              `Successfully implemented core features of Payroll app such as login,
              invoices, timesheet and many more.`,
              `Designed and implemented client's truck service static website Bootstrap
              and JS.`,
              ` Implemented and maintained server's PHP scripts for the project.`,
            ]} 
            skill={['.NET', 'C#', 'PostgreSQL','PHP', 'Xamarin']}   
          />
        </div>

        <div id = 'project'>
          <h2 className="text-3xl font-semibold mb-4">PROJECTS</h2>
          <Detail_Box 
            date = ""
            title = 'Cloud-Native Social Media Platform'
            company = ''
            location = ''
            detail = {[
              `Built a fully cloud-native, microservice-based backend inspired by 
              9GAG, designed for high availability, scalability, and real-time 
              content interaction.`,
              `Designed independent microservices: User Service, Post Service, 
              Media Service, Voting Service, Feed Aggregator, Notification/Activity Service, 
              each with its own database.`,
              `Exposed REST APIs for clients (web/mobile) and used gRPC for high-performance 
              internal communication between services such as Posts, Feeds, Users, and Media.`,
              `Deployed all services in Docker containers and orchestrated using Azure
               Kubernetes Service (AKS) with autoscaling based on CPU/memory/load.`
            ]}
            skill={['.NET 8', 'C#', 'REST', 'gRPC', 'Docker', 'Kubernetes',
              'PostgreSQL', 'Azure API Management'
            ]}
          />


          <Detail_Box 
            date = ""
            title = 'Pharmacy Prescription Pickup App'
            company = ''
            location = ''
            detail = {[
              `Developing a full stack web app that allows pharmacy to save
              prescription's order and email/SMS patients when their order is ready`,
              `Successfully designed and improved responsiveness of the project's
              frontend.`,
              `Built a comprehensive REST APIs that provides full service of backend
              and database access to our frontend.`
            ]}
            skill={['NextJS', 'ExpressJS','MongoDB', 'NodeJS', 'PassportJS']}
          />

            <Detail_Box 
            date = ""
            title = 'Tubtrunk - Focus Android App'
            company = ''
            location = ''
            detail = {[
              `Created an android focus application to help people with procrastination.`,
              `Bmplemented and updated server's scripts that call and process data from
              MySQL DB.`,
              `Renewed and improved reward system with music store which can be
              purchased using in app coins.`
            ]}
            skill={['Dart', 'Flutter','PHP', 'MySQL', 'Selenium']}
          />
        </div>

        <div id = 'education'>
          <h2 className="text-2xl font-semibold mb-4">EDUCATION</h2>
          <Detail_Box 
            date = ""
            title = 'BACHELOR OF SCIENCE | COMPUTER SCIENCE'
            company = 'University of Manitoba'
            location=''
            detail = {[]}
            skill={[]}
          />
        </div>
      </section>

    </main>
  )
}
