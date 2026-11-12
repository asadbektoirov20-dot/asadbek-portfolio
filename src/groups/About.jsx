import React from 'react'
import '../App.css'
import '../groups/About.css'

const About = () => {
    return (
        <div>
            <section className='hero2'>

                <div className="information">
                    <h1>Haqimda</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, adipisci nostrum molestiae in aperiam voluptatem delectus unde quaerat ratione iure saepe nemo architecto harum esse? Dignissimos at temporibus omnis quaerat expedita. Blanditiis accusantium iure nisi impedit atque explicabo itaque consequuntur est enim eos suscipit, nulla velit aliquam! Reprehenderit, autem possimus?</p>
                </div>

                <div className="inform2">

                    <div className="informImg">
                        <img src="/myImage.jpg" alt="" />
                    </div>

                    <div className="informParagraph">

                        <div className="informs">
                            <h1>Frontend dasturchi</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem vero neque.

                        </div>

                        <div className="malumotlar">

                            <h3>tugilgan : <span>18 October 2012</span></h3>
                            <h3>Yosh : <span>14</span></h3>
                            <h3>Websayt : <span>www.example.com</span></h3>
                            <h3>Daraja : <span>Junior +</span></h3>
                            <h3>Email : <span>asadbektoirov20@gmail.com</span></h3>
                            <h3>Raqam : <span>+998 88 223 22 75</span></h3>
                            <h3>Shaxar : <span>Samarkand</span></h3>
                            <h3>Frilans : <span>Mavjud</span></h3>

                        </div>


                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nostrum dicta laborum!</p>
                    </div>

                </div>


                <div className="skills-expreince">

                    <div className="skills">

                        <div className="skill">

                            <h3>Html</h3>

                            <h4>95%</h4>

                            <div className="percent">
                                <div className="percent2"></div>
                            </div>

                        </div>

                        <div className="skill">

                            <h3>CSS</h3>

                            <h4>85%</h4>

                            <div className="percent">
                                <div className="percent2"></div>
                            </div>

                        </div>

                        <div className="skill">

                            <h3>JavaScript</h3>

                            <h4>80%</h4>

                            <div className="percent">
                                <div className="percent2"></div>
                            </div>

                        </div>

                        <div className="skill">

                            <h3>ReactJs</h3>

                            <h4>75%</h4>

                            <div className="percent">
                                <div className="percent2"></div>
                            </div>

                        </div>


                        <div className="skill">

                            <h3>Bootstrap</h3>

                            <h4>75%</h4>

                            <div className="percent">
                                <div className="percent2"></div>
                            </div>

                        </div>



                    </div>

                    <div className="experience">

                        <div className="tajriba">
                            <img src="https://cdn-icons-png.flaticon.com/128/4013/4013275.png" alt="" />
                            <h3>1 Yil</h3>
                            <p>Tajriba</p>
                        </div>

                        <div className="tajriba">
                            <img src="https://cdn-icons-png.flaticon.com/128/238/238788.png" alt="" />
                            <h3>100 +</h3>
                            <p>Loihalar</p>
                        </div>

                        <div className="tajriba">
                            <img src="" alt="" />
                            <h3>90 +</h3>
                            <p>Mijozlar</p>
                        </div>

                        <div className="tajriba">
                            <img src="" alt="" />
                            <h3>90 +</h3>
                            <p>Mijozlar</p>
                        </div>

                    </div>


                </div>



            </section>
        </div>
    )
}
export default About
