import React from 'react';
import Profil from '../assets/Profil.jpg'
import { IoMailSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Icons from '../Constant/Icons';

const TechCard = () => {
    return (
        <div className='w-[1170px] h-[650px] bg-[#f0ffd7] px-3 py-2.5 flex'>
            <section className='w-[27%] h-full bg-amber-300G flex flex-col justify-between'>
                <div className='w-full h-[35%] flex flex-col justfy-center items-center gap-2'>
                    <div className='w-[72%] h-[89%]'><img src={Profil} className='w-full h-full rounded-full' alt="Profil" /></div>
                    <legend className='w-[200px] text-center font-semibold mb-7 text-[25px] '>Ahmed Amine Benelmalih</legend>
                </div>

                <div className='p-3 pb-8 flex flex-col gap-4'>
                    <div className='flex items-center gap-[10px]'>
                        <p className='text-2xl'><BsFillTelephoneFill /></p>
                        <p>07 71-55 03-11</p>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <p className='text-2xl'><IoMailSharp /></p>
                        <p>amine.ahmed.benel@g mail.com</p>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <p className='text-2xl'><FaMapMarkerAlt /></p>
                        <p>Beauséjour, Casablanca.</p>
                    </div>
                </div>
            </section>

            <section className='w-full h-full bg-emerald-700G'>
                <section className='h-[20%] flex flex-col items-center justify-center'>
                    <legend className='font-bold text-[37px] pl-2'>Développeur Web Full Stack</legend>
                </section>

                <article className='h-[80%] pl-[75px] pt-[70px] flex gap-5 font-bold text-xl'>
                    <section className='w-full h-full flex gap-40'>
                        <div className='flex flex-col gap-10'>
                            {/* Front-end */}
                            <article className='flex gap-5 border-l-[5px] border-amber-800 pl-3 '>
                                <legend className='text-[22px]'>Front-end:</legend>
                                <ul className='flex flex-col gap-1'>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.HTML5} alt="" />
                                        <p>HTML</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.CSS3} alt="" />
                                        <p>CSS</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.JavaScript} alt="" />
                                        <p>JavaScript</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.React} alt="" />
                                        <p>Bootstrap</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Sass} alt="" />
                                        <p>SASS</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Bootstrap} alt="" />
                                        <p>React</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.TailwindCSS} alt="" />
                                        <p>Tailwind</p>
                                    </li>
                                </ul>
                            </article>

                            {/* >Back-end */}
                            <article className='flex gap-5 border-l-[5px] border-amber-800 pl-3 '>
                                <legend className='text-[22px]'>Back-end:</legend>
                                <ul className='flex flex-col gap-1'>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Laravel} alt="" />
                                        <p>Laravel</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.JSON} alt="" />
                                        <p>JSON</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.SQLite} alt="" />
                                        <p>SQLite</p>
                                    </li>
                                </ul>
                            </article>
                        </div>

                        <div className='flex flex-col gap-10'>
                            {/* Outils */}
                            <article className='flex gap-5 border-l-[5px] border-amber-800 pl-3 '>
                                <legend className='text-[22px]'>Outils:</legend>
                                <ul className='flex flex-col gap-[6px]'>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Git} alt="" />
                                        <p>Git</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.GitHub} alt="" />
                                        <p>GitHub</p>
                                    </li>
                                </ul>
                            </article>

                            {/* Bureautique */}
                            <article className='flex gap-5 border-l-[5px] border-amber-800 pl-3 '>
                                <legend className='text-[22px]'>Bureautique:</legend>
                                <ul className='flex flex-col gap-[6px]'>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Word} alt="" />
                                        <p>Word</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Excel} alt="" />
                                        <p>Excel</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <img className='w-[22px] h-[22px]' src={Icons.Powerpoint} alt="" />
                                        <p>Powerpoint</p>
                                    </li>
                                </ul>
                            </article>

                            {/* Languages */}
                            <article className='flex gap-5 border-l-[5px] border-amber-800 pl-3 '>
                                <legend className='text-[22px]'>Languages:</legend>
                                <ul className='flex flex-col gap-1'>
                                    <li>Arabe</li>
                                    <li>English</li>
                                    <li>Français</li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    );
}

export default TechCard;