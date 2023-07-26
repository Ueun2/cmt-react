import React from 'react';

const Footer = () => {
    return (
            <footer className='layout'>
                <div className="footer-inner">
                    <nav>
                        <a href='/#' target='_blank' style={{margin: '0 20px 10px 0'}}>Blog</a> |
                        <a href='/#' target='_blank' style={{margin: '0 20px 10px 20px'}}>Github</a>
                    </nav>
                    <p style={{marginTop:'20px', lineHeight:1.3}}>
                        <span>저 자 : ZZIN</span><br/>
                        <span>이메일 : email@gmail.com</span><br/>
                        <span>Copyright 2023. All Rights Reserved.</span>
                    </p>
                </div>
            </footer>
    );
};

export default Footer;