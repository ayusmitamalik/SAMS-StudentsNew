import React, { useState, useEffect } from 'react';
import style from "../../common/css/home/homenoticeboard.module.css";

const NoticeBoard = () => {
    const initialNotices = [
        'Notice 1: Important information!',
        'Notice 2: Another important update.',
        'Notice 3: kjdvhj',
        'Notice 4: vvxhsgugbc',
        'Notice 5: cmbkxmls',
        'Notice 6: sjxcund',
        'Notice 7: shgydis',
        'Notice 8: dhcikd',
        'Notice 9: oiwiyd idhicjo',
        'Notice 10: dmnieddkc',
        'Notice 11: dnidlks ',
        'Notice 12: kuhuhod',
        'Notice 13: djfrkovm',
        'Notice 14: dnigjjovkf dknoje',
        'Notice 15: emocje kdwis;l',
        'Notice 16: cnfo',
    ];

    const [notices, setNotices] = useState(initialNotices);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotices((prevNotices) => {
                const newNotices = [...prevNotices];
                const removedNotice = newNotices.shift();
                newNotices.push(removedNotice); // Move the removed notice to the end
                return newNotices;
            });
        }, 2000); // Adjust the delay as needed (in milliseconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 style={{ color: '#ffdc73', fontFamily: 'serif', textAlign: 'center' }}>Notice Board</h1>
            <div className={style.noticeBoard}>
                <div className={style.noticeContainer}>
                    {notices.map((notice, index) => (
                        <div key={index} className={style.notice}>
                            {notice}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NoticeBoard;