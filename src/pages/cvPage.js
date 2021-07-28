import React from 'react';
import "../components/cv.css";
import "../components/animeBorder.css"
function CVPage() {
    return (
        <div className="cv">
            <div className="cv_container">
                <div className="cv_container_firstRow">
                    <div className="cv_container_firstRow_leftColumn">
                        <div className="box">
                            <span className="odd"></span>
                            <span className="odd"></span>
                            <div className="content">
                                <h2>Information</h2>
                                <div className="cv_container_firstRow_leftColumn_titleLine"></div>
                                <p>My major is Computer Engineering , however i am in love with creating sorfware and application. That's the reason i want to be a web developer. I want to build a web that can get attention of people.</p>
                            </div>
                        </div>
                        {/* <h2>Information</h2>
                        <div className="cv_container_firstRow_leftColumn_titleLine"></div>
                        <p>My major is Computer Engineering , however i am in love with creating sorfware and application. That's the reason i want to be a web developer. I want to build a web that can get attention of people.</p> */}
                    </div>
                    <div className="cv_container_firstRow_rightColumn">
                        <div className="box">
                            <span className="odd"></span>
                            <span className="odd"></span>
                            <div className="content">
                                <h2>Technical Skills</h2>
                                <div className="cv_container_firstRow_rightColumn_titleLine"></div>
                                <ul>
                                    <li>Good at: HTML/CSS/SASS</li>
                                    <li>Frequently use: Python, Javascript</li>
                                    <li>Basic in: C/C++, Java, PHP</li>
                                    <li>Framwork used: Django, ReactJs</li>
                                    <li>Database: MySql</li>
                                    <li>Languages: Vietnamese and English (6.0 IELTS)</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="cv_container_secondRow">
                    <div className="cv_container_secondRow_leftColumn">
                        <div className="box">
                            <span className="odd"></span>
                            <span className="odd"></span>
                            <div className="content">
                                <h2>Education</h2>
                                <div className="cv_container_secondRow_leftColumn_titleLine"></div>
                                <p>Ho Chi Minh University of Technology (Bach Khoa University)<br></br>
                                    Major: Computer Engineering<br></br>
                                    2017-2021 (Intended graduate in 2021)<br></br>
                                    GPA: 7.66/10</p>
                            </div>
                        </div>
                    </div>
                    <div className="cv_container_secondRow_rightColumn">
                        <div className="box">
                            <span className="odd"></span>
                            <span className="odd"></span>
                            <div className="content">
                                <h2>Experiences</h2>
                                <div className="cv_container_secondRow_rightColumn_titleLine"></div>
                                <h5 style={{ color: "#00cc66" }}>FPT Software HCM Internship</h5>
                                <h6>(June 2020 - September 2020)</h6>
                                <ul>
                                    <li>Design web page for selling medical product</li>
                                    <li>Working with Java Spring Framework using Apache Tomcat</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="cv_container_thirdRow">
                    <div className="cv_container_thirdRow_leftColumn">
                    <div className="box">
                            <span className="odd"></span>
                            <span className="odd"></span>
                            <div className="content">
                            <h2>Contact</h2>
                            <div className="cv_container_thirdRow_leftColumn_titleLine"></div>
                            <p>Address: 14/13/14A Than Nhan Trung, Ward
                            13, Tan Binh District, Phone: 0917565059<br></br>
                            Email: chip.pham2101@gmail.com<br></br>
                            LinkedIn:<br></br>
                            <a href="https://www.linkedin.com/in/phuongpham2101/">https://www.linkedin.com/in/phuongpham2101</a><br></br>
                            Github: <a href="https://github.com/huyenma91">https://github.com/huyenma91</a><br></br>
                        </p>
                            </div>
                        </div>
                        
                        
                       
                    </div>
                    {/* <div className="cv_container_thirdRow_rightColumn">
                        <h2>Experiences</h2>
                        <div className="cv_container_thirdRow_rightColumn_titleLine"></div>
                        <h5 style={{color:"#00cc66"}}>FPT Software HCM Internship</h5>
                        <h6>(June 2020 - September 2020)</h6>
                        <ul>
                            <li>Design web page for selling medical product</li>
                            <li>Working with Java Spring Framework using Apache Tomcat</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default CVPage;