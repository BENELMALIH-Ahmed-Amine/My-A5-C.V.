import React from 'react';
import Profil from '../assets/Profil.jpg'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { MdOutlineGTranslate } from 'react-icons/md';
import Icons from '../Constant/Icons'

const Master2025 = () => {
    let array = Object.keys(Icons)
    console.log(array);

    return (
        <div className='w-[595px] h-[842px] bg-white px-6 py-5'>
            <div className='w-full h-full divide-y-[2px] divide-blue-300'>
                <section className='w-full pb-[1.5%] bg-amber-50d0 flex items-center justify-between'>
                    <div className="w-[153px] h-[160px] rounded-full bg-white">
                        <img src={Profil} className='w-[90%] h-full rounded-full' alt="Profil" />
                    </div>
                    <div className="w-[70%] h-[90%] text-center">
                        <legend className='font-bold mb-3 text-2xl'>Benelmalih Ahmed Amine</legend>
                        <section className="w-fullh-full text-[14px] flex justify-around items-center">
                            <div className='space-y-0.5'>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-amber-600 text-lg'><FaCalendarDays /></p>
                                    <p>06/2002</p>
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

                            <div className='flex flex-col justify-start'>
                                <div className='flex gap-1.5 items-center'>
                                    <MdOutlineGTranslate className='text-blue-600 text-lg' />
                                    <p className='font-bold'>Langues</p>
                                </div>
                                <p className='ml-2'>Arabe: Soutenu.</p>
                                <p className='mr-[18px]'>Anglais: C1.</p>
                                <p className='ml-0.5'>Français: Bien.</p>
                            </div>
                        </section>
                    </div>
                </section>

                <section className='w-full h-[58%] pt-1 flex items-center '>
                    <section className='w-[40%] h-full text-[14px] divide-y-[2px] divide-blue-300'>
                        {/* LOGICIELS */}
                        <section className='w-full pb-[3px]'>
                            <legend className='font-bold mb-1'>TECHINQUES</legend>
                            <div className='w-[90%] py-2 pl-3 flex flex-wrap gap-1.5'>
                                {
                                    array.map((i) =>
                                        <img key={i} className='w-[20px] h-[20px] mb-1' src={Icons[i]} alt="" />
                                    )
                                }
                            </div>
                        </section>

                        {/* SAVOIR-ÊTRE */}
                        <section className='py-[8px]'>
                            <legend className='font-bold mb-1'>SAVOIR-ÊTRE</legend>
                            <p className='ml-1'>- Socialité et Travail en équipe.</p>
                            <p className='ml-1'>- Sens de responsabilité et <span className='ml-2.5'>Leadership.</span></p>
                        </section>

                        {/* CENTRES D'INTERÊT */}
                        <section className='py-[8px]'>
                            <legend className='font-bold mb-1'>CENTRES D'INTERÊT</legend>
                            <p className='ml-1'>- Conférences: <br /> <span className='ml-2.5'>Scientifique/Culturelle et <span className='ml-2.5'>Thèses Doctorales.</span></span></p>
                            <p className='ml-1'>- Histoire: <br /> <span className='ml-2.5'>Culturelle/Religieuse.</span></p>
                            <p className='ml-1'>- Lecture: <br /> <span className='ml-2.5'>Littéraire/Scientifique.</span></p>
                        </section>
                    </section>

                    <section className='w-[60%] h-full ml-3 divide-y-[2px] divide-blue-300 leading-[19px]'>
                        <article className='text-[13px] pb-[7px] pr-3'>
                            <p>&nbsp;&nbsp;Jeune Licencié en Biologie Cellulaire et Moléculaire.
                                Fort d'un sens du leadership et un esprit collaboratif
                                avec les équipes multidisciplinaires.</p>

                            <p>&nbsp;&nbsp;J’ai l’envie de poursuivre mes études scientifiques,
                                afin d’acquérir le savoir permettant à continuer
                                la recherche sur la maladie héréditaire inconnue
                                chez Ma Famille.</p>
                        </article>

                        {/* ÉDUCATION */}
                        <article className='py-[7px]'>
                            <legend className='text-[16px] font-bold mb-0.5'>ÉDUCATION</legend>
                            <div className='ml-1 mb-0.5'>
                                <section className='text-[14px] font-semibold'>Formation en Dévelopement-Web</section>
                                <p className='text-[13px] ml-1'>LionsGeek-2M (03/2025 - ... )</p>
                            </div>

                            <div className='ml-1 mb-0.5'>
                                <section className='text-[14px] font-semibold'>Licence Fondamentale en Biologie Cellulaire et Moléculaire</section>
                                <p className='text-[13px] ml-1'>Faculté des Sciences Aïn Chock de Casablanca (2023 - 2024)</p>
                            </div>
                        </article>

                        {/* EXPÉRIENCES PROFESSIONNELLES */}
                        <article className='py-[7px]'>
                            <legend className='text-[16px] font-bold mb-0.5'>EXPÉRIENCES PROFESSIONNELLES</legend>
                            <div className='ml-1 mb-0.5'>
                                <section className='text-[14px] font-semibold'>Dévelopement / Projet Front-End & Back-End</section>
                                <p className='text-[13px] ml-1'>Y-nov Casablanca (2024)</p>
                                <p className='text-[13px] ml-1'>- Manipulation du: Html, Css/MySQL, PHP.</p>
                            </div>

                            <div className='ml-1 mb-0.5'>
                                <section className='text-[14px] font-semibold'>Technicien de laboratoire</section>
                                <p className='text-[13px] ml-1'>Hôpital El Hassani (02/8/23 - 30/9/23)</p>
                                <p className='text-[13px] ml-1'>- Tests sanguins (VS, NFS,...).</p>
                            </div>
                        </article>
                    </section>
                </section>

                {/* CERTIFICATIONS ET ATTESTATIONS */}
                <section className='w-full pt-[1%]'>
                    <legend className='text-[16px] font-bold'>CERTIFICATIONS ET ATTESTATIONS</legend>
                    <div className='text-[14px] ml-1'>
                        <p>+ Mise à niveau: Bases informatiques / Y-nov Casablanca (2024).</p>
                        <p>+ EF SET: 70% - C1 ADVANCED / CEER (Reading and Listening).</p>
                        <p>+ Attestation de participation au séminaire: “Nutrition & Sport: Les clés pour gérer son stress” et “L’épilepsie: brisons les tabous, éclairons les esprits” / FSAC (2024).</p>
                        <p>+ Attestation de présence à "l'initiation au mondede l’entreprise" / VISIO + CAP GIMINI (2024).</p>
                        <p>+ Certificat de participation à la "Sleep During Ramadan Islamic Fasting" / FSAC (2025).</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Master2025;
