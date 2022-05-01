import WorkIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-work.svg';

import PlayIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-play.svg';

import StudyIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-study.svg';

import ExerciseIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-exercise.svg';

import SocialIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-social.svg';

import SelfCareIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-self-care.svg';

import EllipsisIcon from '../asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/icon-ellipsis.svg';

const iconList ={
    work: WorkIcon,
    play: PlayIcon,
    study:StudyIcon,
    exercise:ExerciseIcon,
    social:SocialIcon,
    "self-care":SelfCareIcon,
}


const TimeCard = (props) => {
    return (
        <div className={`time-card ${props.xName}`}>
            <img src={iconList[props.xName]} alt="" className="card-icon" />
            <div className="info">
                <div className="topic">
                    <p>{props.xName}</p>
                    <button>
                        <img src={EllipsisIcon} alt="" />
                    </button>
                </div>
                <div className="metrics">
                    <h2>32hrs</h2>
                    <p>Last week - 8hrs</p>
                </div>
            </div>
            
        </div>
    )
}

export default TimeCard
