import { useEffect, useState } from 'react';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // 清理定时器，防止内存泄漏
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div>计时：{seconds} 秒</div>
        </div>


    )
};

export default Timer;