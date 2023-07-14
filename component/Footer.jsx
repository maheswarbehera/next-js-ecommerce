import React from 'react';
import styles from '@/styles/maheswar.module.css';
import Link from 'next/link';
function Footer(props) {
    return (
        <>
            <footer className='footer-main bg-dark text-light' >
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12">
                            <div className='footer-logo pb-4'>{props.logo}</div>
                            <div className="info">
                            <p>With iMeet robust collaboration features,
                                you can easily connect with fellow developers,
                                share code snippets, and brainstorm ideas in real-time.
                            </p></div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-links w-50 mx-auto">
                                <h2 className="title">Quick Links</h2>
                                <ul className='list-unstyled'>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/">Terms & Condition</Link></li>
                                    <li><Link href="/">Privacy & policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-links w-50 mx-auto">
                                <h2 className="title">Contact</h2>
                                <ul className='list-unstyled'>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                           
                                        <span>+91 000000000</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                           
                                            
                                            <span>imeet.mathura@gmail.com</span>
                                        </div>
                                        </li>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                           
                                            <span>Mathura, Uttar Pradesh</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
                <div className="copyright text-center py-4">Copyright @ 2023 iMeet</div>
             
        </>
  );
}

export default Footer;
