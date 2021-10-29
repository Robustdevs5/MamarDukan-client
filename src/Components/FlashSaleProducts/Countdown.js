import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
    let year = 2022;
    let difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;

}

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer=setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
      });


      const timerComponents = [];

    console.log('time', timeLeft.days)
        Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });

    return (
        <>
        {/* <div>
            <h1>HacktoberFest {year}Countdown</h1>
            <h2>With React Hooks! {timeLeft.seconds}</h2>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
        <div className="w-3/5 p-8 items-center justify-center">
        <h4 className="text-lg font-bold text-gray-900 pl-8"> Sales Ends in</h4>
        <div className="flex mt-2 text-center">
            <div className="flex-1">
                <h4 className="text-6xl font-bold items-center uppercase">{timeLeft.days}</h4>
                <p className="text-md font-semibold text-gray-600">Days</p>
            </div>
            <div className="flex-1">
                <h4 className="text-6xl font-bold items-center uppercase">{timeLeft.hours}</h4>
                <p className="text-md font-semibold text-gray-600">Hours</p>
            </div>
            <div className="flex-1">
                <h4 className="text-6xl font-bold items-center uppercase">{timeLeft.minutes}</h4>
                <p className="text-md font-semibold text-gray-600">Mins</p>
            </div>
            <div className="flex-1">
                <h4 className="text-6xl font-bold items-center uppercase">{timeLeft.seconds}</h4>
                <p className="text-md font-semibold text-gray-600">Sec</p>
            </div>
        </div>
    </div>
    </>
    );
};

export default Countdown;