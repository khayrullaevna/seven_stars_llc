import React from 'react'

export default function Skills() {
  return (
    <section className="section-skills">
        <div className="row">
            <h2 className="section-skills__heading">Having a proven track record of delivering premium services, we are highly skilled in</h2>

            <div className='col-1-of-4'>
                <div className="skills-box">
                    <img className="skills-box__icon" src="icons/customer-service.png" alt="skills" />
                    <h3 className="skills-box__heading">Logistics</h3>
                    <p className="skills-box__text">Our logistics services are both professional and efficient, with our trucks' reliability and speed ensuring your shipment's punctual arrival</p>
                </div>
            </div>

            <div className='col-1-of-4'>
                <div className="skills-box">
                    <img className="skills-box__icon" src="icons/project-management.png" alt="skills" />
                    <h3 className="skills-box__heading">Project Forwarding Supervision</h3>
                    <p className="skills-box__text">Our team provides ongoing oversight of your project forwarding from its commencement to its completion</p>
                </div>
            </div>

            <div className='col-1-of-4'>
                <div className="skills-box">
                    <img className="skills-box__icon" src="icons/security.png" alt="skills" />
                    <h3 className="skills-box__heading">Cargo Safety Assurance</h3>
                    <p className="skills-box__text">We assure the safety and protection of your cargo against any damages during its shipping period</p>
                </div>
            </div>
            

            <div className='col-1-of-4'>
                <div className="skills-box">
                    <img className="skills-box__icon" src="icons/high-quality.png" alt="skills" />
                    <h3 className="skills-box__heading u-margin-bottom-small">High quality equipment</h3>
                    <p className="skills-box__text">We provide latest technology with the newest equipment</p>
                </div>
            </div>

        </div>
   
    </section>
  )
}
