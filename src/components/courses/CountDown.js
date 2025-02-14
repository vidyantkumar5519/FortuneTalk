import React, { useEffect } from 'react';

const CountDown = ({ duration }) => {
    const [timer, setTimer] = React.useState(duration);

    useEffect(() => {
        setTimer(duration);
        const interval = setInterval(() => {
            setTimer(prevState => {
                if (prevState <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevState - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duration]);

    const formatTime = seconds => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return { days, hours, minutes, remainingSeconds };
    };

    const { days, hours, minutes, remainingSeconds } = formatTime(timer);

    return (
        <div className="flex justify-center">
            <div className="border border-[#EE7105] bg-transparent p-4 rounded-md text-center">
                <div className="flex gap-2">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-semibold text-black" style={{ fontFamily: 'Fira Sans Condensed, sans-serif' }}>
                            {String(days).padStart(2, '0')} {/* Ensures two digits */}
                        </span>
                        <div className="text text-black">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-black">:</div>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold text-black" style={{ fontFamily: 'Fira Sans Condensed, sans-serif' }}>{String(hours).padStart(2, '0')}</span>
                        <div className="text text-black">Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-black">:</div>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold text-black" style={{ fontFamily: 'Fira Sans Condensed, sans-serif' }}>{String(minutes).padStart(2, '0')}</span>
                        <div className="text text-black">Minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-black">:</div>
                    </div>
                    <div className="flex flex-col items-center">
                    <span className="text-4xl font-semibold text-black" style={{ fontFamily: 'Fira Sans Condensed, sans-serif' }}>{String(remainingSeconds).padStart(2, '0')}</span>
                        <div className="text text-black">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
