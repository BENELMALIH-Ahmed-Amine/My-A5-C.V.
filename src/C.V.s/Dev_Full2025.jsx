import React from 'react';
import Profil from '../assets/Profil.jpg'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import Icons from '../Constant/Icons'

const Dev_Full2025 = () => {
    let array = Object.keys(Icons)
    console.log(array);

    return (
        <div className='w-[795px] h-[1125px] bg-white px-6 py-5'>
            <div className='w-full h-full divide-y-[2px] divide-dashed divide-orange-400'>
                <section className='w-full h-[150px] pb-[2%] bg-amber-50d0 flex items-center justify-between'>
                    <div className="w-[77%] h-[90%] flex flex-col items-center">
                        <legend className='font-bold text-[32px] pl-2'>Ahmed Amine Benelmalih</legend>
                        <legend className='font-semibold mb-7 text-[21px] underline'>Développeur Web Full Stack</legend>
                    </div>
                    <div className="w-[140px] h-[150px] rounded-full bg-white">
                        <img src={Profil} className='w-[90%] h-full rounded-full' alt="Profil" />
                    </div>
                </section>

                <section className='w-full pt-3 pb-3.5 flex'>
                    <section className='w-[39.9%] h-full mr-2 pr-3 text-[14px] '>
                        <section className="w-full">
                            <legend className='font-bold mb-1m.5 text-[16px] uppercase'>Information</legend>
                            <div className='ml-2 pb-1.5'>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-amber-600 text-lg'><FaCalendarDays /></p>
                                    <p>06/2002 - 23</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-red-700 text-lg'><IoMailSharp /></p>
                                    <p>amine.ahmed.benel@gmail.com</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-[17px]'><BsFillTelephoneFill /></p>
                                    <p>07 71-55 03-11</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-green-7 text-lg00'><FaMapMarkerAlt /></p>
                                    <p>Beauséjour, Casablanca.</p>
                                </div>
                            </div>
                        </section>

                        {/* TECHINQUES */}
                        <section className='w-full'>
                            <legend className='font-bold mb-1m.5 text-[16px] uppercase'>Tecniques</legend>
                            <div className='ml-2 pb-1.5 flex flex-wrap gap-x-[7.2px]'>
                                {
                                    array.map((i) =>
                                        <div key={i} className='flex gap-[6px]'>
                                            {/* Icons */}
                                            {/* <img className='w-[22px] h-[22px] mb-2' src={Icons[i]} alt="" /> */}
                                            <span>{i}</span>
                                        </div>
                                    )
                                }

                                {/* <p>Word - Excel - Powerpoint / VSCode - HTML5 - CSS3 - Bootstrap - Sass - JavaScript - JSON - React - Tailwind CSS - MySQL - Laravel</p> */}

                            </div>
                        </section>

                        {/* SAVOIR-ÊTRE */}
                        <section className='pt-[4px] pb-[6px]'>
                            <legend className='font-bold text-[16px] uppercase'>Savoir-être</legend>
                            <p className='ml-1'>- Socialité et Travail en équipe.</p>
                            <p className='ml-1'>- Sens de responsabilité et Leadership.</p>
                        </section>

                        {/* CENTRES D'INTERÊT */}
                        <section className='pt-[4px] pb-[6px]'>
                            <legend className='font-bold text-[16px] uppercase'>Centre d'intérêt</legend>
                            <p className='ml-1'>- Conférences: <br /><span className='ml-2.5'>Scientifique/Culturelle et Thèses <span className='ml-[11px]'>Doctorales.</span></span></p>
                            <p className='ml-1'>- Histoire: <br /><span className='ml-2.5'>Culturelle/Religieuse.</span></p>
                            <p className='ml-1'>- Lecture: <br /><span className='ml-2.5'>Littéraire/Scientifique.</span></p>
                        </section>

                        {/* LANGUES */}
                        <section className='pt-[4px] pb-[6px]'>
                            <legend className='font-bold text-[16px] uppercase'>Langes</legend>
                            <div className='flex flex-col'>
                                <p className='ml-1'>- Arabe: &nbsp;Soutenu</p>
                                <p className='ml-1'>- Anglais: &nbsp;C1</p>
                                <p className='ml-1'>- Français: &nbsp;Bien</p>
                            </div>
                        </section>
                    </section>

                    <section className='w-[60%] h-full ml-1.5 text-[14px] divide-y-[2px] divide-dotted divide-orange-400 leading-[21px]'>
                        <article className='flex flex-col gap-1 pb-[15px] pr-3'>
                            <p>&nbsp;&nbsp;Jeune Licencié en Biologie et également Formé en tant que Développeur Web Full Stack.</p>

                            <p>&nbsp;&nbsp;Fort d'un bon sens du leadership et un esprit collaboratif avec les équipes multidisciplinaires.</p>

                            <p>&nbsp;&nbsp;Je recherche une opportunité stimulante en programmation et développement web pour enrichir mon expérience professionnelle.</p>
                        </article>

                        {/* FORMATION */}
                        <article className='pt-[10px] pb-[5px]'>
                            <legend className='text-[18px] font-bold mb-1'>FORMATION</legend>

                            <section className='flex flex-col ml-1 mb-1'>
                                <legend className='text-[15px] font-semibold'>Formation en Dévelopement-Web</legend>
                                <p className='text-[14px] ml-2.5'>LionsGeek-2M (Mars 2025 - Août 2025)</p>
                            </section>

                            <section className='flex flex-col ml-1 mb-1'>
                                <legend className='text-[15px] font-semibold'>Licence Fondamentale en Biologie Cellulaire <br /> et Moléculaire</legend>
                                <p className='text-[14px] ml-2.5'>Faculté des Sciences Aïn Chock de Casablanca (2023 - 2024)</p>
                            </section>
                        </article>

                        {/* EXPÉRIENCES PROFESSIONNELLES */}
                        <article className='pt-[10px] pb-[5px]'>
                            <legend className='text-[18px] font-bold mb-1'>EXPÉRIENCES PROFESSIONNELLES</legend>

                            <section className='flex flex-col ml-1 mb-1'>
                                <legend className='text-[15px] font-semibold'>Projet-Finale Front-End & Back-End</legend>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] ml-2.5'>LionsGeek-2M (2025)</p>
                                    <p className='text-[14px] ml-2.5'>- Manipulation du: LARAVEL, SQlite, Tailwind CSS.</p>
                                </div>
                            </section>

                            <section className='flex flex-col ml-1 mb-1'>
                                <legend className='text-[15px] font-semibold'>Projet-Finale Front-End & Back-End</legend>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] ml-2.5'>Y-nov Casablanca (2024)</p>
                                    <p className='text-[14px] ml-2.5'>- Manipulation du: Html, Css/MySQL, PHP.</p>
                                </div>
                            </section>

                            <section className='flex flex-col ml-1 mb-1'>
                                <legend className='text-[15px] font-semibold'>Technicien de laboratoire</legend>
                                <div className='flex flex-col'>
                                    <p className='text-[14px] ml-2.5'>Hôpital El Hassani (02/8/23 - 30/9/23)</p>
                                    <p className='text-[14px] ml-2.5'>- Tests sanguins (VS, NFS,...).</p>
                                </div>
                            </section>
                        </article>

                        {/* CERTIFICATIONS ET ATTESTATIONS */}
                        <section className='pt-[10px]'>
                            <legend className='text-[18px] font-bold mb-1'>CERTIFICATIONS ET ATTESTATIONS</legend>
                            <div className='text-[14px] ml-2 space-y-[1px]'>
                                <p>+ Certificat de participation à la "Sleep During Ramadan Islamic Fasting" / FSAC (2025).</p>
                                <p>+ Attestation de présence à "l'initiation au mondede l’entreprise" / VISIO + CAP GIMINI (2024).</p>
                                <p>+ Mise à niveau: Bases informatiques / Y-nov Casablanca (2024).</p>
                                <p>+ 2 Attestation de participation au séminaire: “Nutrition & Sport: Les clés pour gérer son stress”, <br /><span className='ml-[13px]'>et “L’épilepsie: Brisons les tabous, éclairons les esprits” / FSAC (2024).</span></p>
                                <p>+ EF SET: 70% - C1 ADVANCED / CEER (Reading and Listening).</p>
                            </div>
                        </section>
                    </section>

                </section>
            </div>
        </div>
    );
};

export default Dev_Full2025;
