import React, { useState } from 'react'
import "../styles/Menu.css";
import logo from "../Assets/Watch.png";
import logoM from "../Assets/web.png";
import logoR from "../Assets/reloj.png";
import logoC from "../Assets/celular.png";
import logoCardiaco from "../Assets/cardiaco.png";
import logoConductancia from "../Assets/conductancia.png";
import logoComunicacion from "../Assets/colaboracion.png";
import logoCrecimiento from "../Assets/crecimiento.png";
import logoP from "../Assets/psicologia.png";
import logoA from "../Assets/acelerometro.png";
import BarChart from '../../utils/chart';
import BarChartDreams from '../../utils/chartDream';
import BarChartAnimo from '../../utils/chartAnimo';
import BarChartActivity from '../../utils/chartActivity';




function Menu () {
    const [selectedOption, setSelectedOption] = useState('Inicio');




return (
    <div className='container-menu'>
        <header className='header-menu'>
            <img src={logo}/>
        </header>
        <aside className='aside-izquierdo'>
            <nav className='ul'>

            
                <ul className='menu'>
                <li><a onClick={() => setSelectedOption('Inicio')}>StressWatch</a></li>
                    <li><a onClick={() => setSelectedOption('Opcion 1')}>Nivel de estres</a></li>
                    <li><a onClick={() => setSelectedOption('Opcion 2')}>Nivel de sueño</a></li>
                    <li><a onClick={() => setSelectedOption('Opcion 3')}>Estados de animo</a></li>
                    <li><a onClick={() => setSelectedOption('Opcion 4')}>Actividiad Fisica</a></li>

                </ul>
                </nav>

        </aside>
        <article className='article-menu'>
        {selectedOption === 'Inicio' && <div className='bloc-section'>
            <section className="blog-post">
            <div className="blog-content">
        <div className="blog-item">
            <img src={logoM} alt="Descripción de la Imagen 1" className="blog-image" />
            <h2>StressWatch Web</h2>
            <p>
            Nuestra página web ofrece información completa y soporte para tu bienestar. Explora funciones, recursos educativos y gestiona tus datos de forma segura. Accede a tutoriales y artículos sobre salud mental, todo en una plataforma fácil de usar desde cualquier dispositivo.            </p>
        </div>
        <div className="blog-item">
            <img src={logoR} alt="Descripción de la Imagen 2" className="blog-image" />
            <h2>Banda de seguimeinto</h2>
            <p>
            El reloj inteligente StressWatch es tu compañero diario para el monitoreo de salud. Equipado con sensores avanzados, te ofrece datos precisos sobre tus niveles de estrés, calidad del sueño y actividad física, con alertas en tiempo real y análisis detallados.

            
            </p>

        </div>
        <div className="blog-item">
            
            <img src={logoC} alt="Descripción de la Imagen 3" className="blog-image" />
            <h2>Aplicacion Movil</h2>
            <p>
            Descubre el poder de la salud mental en la palma de tu mano con nuestra aplicación móvil. Diseñada para ofrecerte un seguimiento completo de tu bienestar, la app te permite visualizar datos en tiempo real, realizar un seguimiento de tus niveles de estrés y sueño, y recibir recomendaciones personalizadas.
            </p>
        </div>
    </div>
                        </section>
                        <section className="blog-post">
                        <div className="blog-content">
        <div className="blog-item">
            <img src={logoCardiaco} alt="Descripción de la Imagen 1" className="blog-image" />
            <h2>Frecuencia Cardíaca</h2>
            <p>
            El sensor de frecuencia cardíaca mide el ritmo al que el corazón late por minuto. Utilizando tecnología óptica, detecta las variaciones en el flujo sanguíneo para proporcionar datos precisos sobre la salud cardiovascular. Ideal para monitorear el estado general de salud y detectar cambios en la respuesta al estrés o al ejercicio.
                        </p>
        </div>
        <div className="blog-item">
            <img src={logoConductancia} alt="Descripción de la Imagen 2" className="blog-image" />
            <h2>Sensor de Conductancia</h2>
            <p>
            El sensor de conductancia de la piel evalúa la respuesta electrodermal para medir la actividad de las glándulas sudoríparas. Este sensor ayuda a determinar los niveles de estrés y excitación emocional al analizar cómo cambia la conductividad eléctrica de la piel en respuesta a diferentes estímulos.+
                        </p>
        </div>
        <div className="blog-item">
            <img src={logoA} alt="Descripción de la Imagen 3" className="blog-image" />
            <h2>Acelerometro</h2>
            <p>
            El acelerómetro detecta y mide el movimiento y la aceleración en varias direcciones. Este sensor proporciona datos sobre la actividad física diaria, como pasos dados, intensidad del ejercicio y patrones de movimiento. Es esencial para rastrear la actividad física y evaluar el impacto de las rutinas de ejercicio en el bienestar general.






</p>
        </div>
    </div>
                        </section>
                        <section className="blog-post">
                        <div className="blog-content">
        <div className="blog-item">
            <img src={logoP} alt="Descripción de la Imagen 1" className="blog-image" />
            <h2>Ayuda profesional</h2>
            <p>
            StressWatch no sustituye la ayuda profesional. Nuestro objetivo es complementar el apoyo que puedes recibir de expertos en salud mental, proporcionando herramientas y datos para gestionar tu bienestar. Siempre consulta a un profesional para obtener orientación y tratamiento adecuados            </p>
        </div>
        <div className="blog-item">
            <img src={logoComunicacion} alt="Descripción de la Imagen 2" className="blog-image" />
            <h2>Colaboracion con profesionales</h2>
            <p>
            StressWatch busca colaborar con profesionales de la salud al ofrecer herramientas que complementen su trabajo. Nuestro objetivo es proporcionar datos útiles y detallados que ayuden en el seguimiento y tratamiento del bienestar de los usuarios, trabajando juntos para mejorar la salud mental            </p>
        </div>
        <div className="blog-item">
            <img src={logoCrecimiento} alt="Descripción de la Imagen 3" className="blog-image" />
            <h2>Ayudar a mejorar</h2>
            <p>
            StressWatch está comprometido en aportar y mejorar el bienestar de nuestros usuarios. A través de herramientas avanzadas y datos precisos, buscamos ayudar a cada persona a gestionar su salud mental y alcanzar un equilibrio óptimo en su vida diaria.

</p>
        </div>
    </div>
                        </section>
            
            
            </div>}
                {selectedOption === 'Opcion 1' && <div>
                    <h1>Nivel de estres</h1>
                    <BarChart />

                    
                    </div>}
                {selectedOption === 'Opcion 2' && <div>
                    <h1>Gráfica de sueños</h1>
                    <BarChartDreams /></div>}
                {selectedOption === 'Opcion 3' && <div>
                    <h1>Estado de animo</h1>
                    <BarChartAnimo/>
                </div>}
                
                {selectedOption === 'Opcion 4' && <div>
                    <h1>Actividad Fisica</h1>
                    <BarChartDreams />
                    </div>}

       

        </article>  
       
        
        
       
    </div>
    



);
};

export default Menu;