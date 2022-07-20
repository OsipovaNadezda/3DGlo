const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
   
    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeDifference = (dateStop - dateNow) / 1000;
        // let days = Math.floor(timeDifference / 60 / 60 / 24);
        // let hours = Math.floor((timeDifference / 60 / 60) % 24);
        let hours = Math.floor(timeDifference / 60 / 60);
        let minutes = Math.floor((timeDifference / 60) % 60);
        let seconds = Math.floor(timeDifference % 60);

        return {
            timeDifference,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {

        let getTime = getTimeRemaining();
        console.log(getTime);

        timerHours.textContent = ('0' + getTime.hours).slice(-2);
        timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
        timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);
        // if (getTime.timeDifference > 0) {
        //     setTimeout(updateClock, 1000);
        //  }
        if (getTime.timeDifference <= 0) {
            clearInterval(timeInterval);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    //  updateClock();
    let timeInterval = setInterval(updateClock, 1000);
};

export default timer;