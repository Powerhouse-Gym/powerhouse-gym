import { useState } from 'react';
import DropIn from './DropIn';
import JoinButton from './JoinButton';
import '../schedule.css';

const schedule = [
    {
        day: "Monday",
        classes: [
            { time: "5:00 AM", name: "Hyrox", type: "hyrox" },
            { time: "8:30 AM", name: "Hyrox", type: "hyrox" },
            { time: "3:30 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "4:15 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "5:00 PM", name: "CrossFit Class", type: "crossfit" }
        ]
    },
    {
        day: "Tuesday",
        classes: [
            { time: "5:00 AM", name: "Olympic Weightlifting", type: "crossfit" },
            { time: "8:30 AM", name: "Olympic Weightlifting", type: "crossfit" },
            { time: "3:30 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "4:15 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "5:00 PM", name: "Olympic Weightlifting", type: "crossfit" },
            { time: "6:00 PM", name: "Hyrox", type: "hyrox" }
        ]
    },
    {
        day: "Wednesday",
        classes: [
            { time: "5:00 AM", name: "Hyrox", type: "hyrox" },
            { time: "8:30 AM", name: "Hyrox", type: "hyrox" },
            { time: "3:30 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "4:15 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "5:00 PM", name: "CrossFit Class", type: "crossfit" }
        ]
    },
    {
        day: "Thursday",
        classes: [
            { time: "5:00 AM", name: "Barbell / Strength Training", type: "crossfit" },
            { time: "8:30 AM", name: "Barbell / Strength Training", type: "crossfit" },
            { time: "3:30 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "4:15 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "5:00 PM", name: "Barbell / Strength Training", type: "crossfit" },
            { time: "6:00 PM", name: "Hyrox", type: "hyrox" }
        ]
    },
    {
        day: "Friday",
        classes: [
            { time: "3:30 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "4:15 PM", name: "Kids CrossFit", type: "crossfit" },
            { time: "5:00 PM", name: "CrossFit Class", type: "crossfit" }
        ]
    },
    {
        day: "Saturday",
        weekend: true,
        classes: [
            { time: "All Day", name: "Open Gym & Barbell Club", type: "open" }
        ]
    },
    {
        day: "Sunday",
        weekend: true,
        classes: [
            { time: "3:30 PM", name: "Hyrox", type: "hyrox" },
            { time: "All Day", name: "Open Gym & Barbell Club", type: "open" }
        ]
    }
];

const dayIndexMap = {
    Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
    Thursday: 4, Friday: 5, Saturday: 6
};

function Schedule() {
    const today = new Date().getDay();
    const todayName = schedule.find(d => dayIndexMap[d.day] === today)?.day;

    const [openDays, setOpenDays] = useState(() => new Set(todayName ? [todayName] : []));

    const toggleDay = (day) => {
        setOpenDays(prev => {
            const next = new Set(prev);
            if (next.has(day)) next.delete(day);
            else next.add(day);
            return next;
        });
    };

    return (
        <section className="schedule-board">
            <header className="schedule-board-header">
                <h2 className="schedule-board-title">Powerhouse Crossfit/Hyrox Class Schedule</h2>
                <div className="schedule-board-legend">
                    <span className="legend-crossfit">CrossFit</span>
                    <span className="legend-hyrox">Hyrox</span>
                    <span className="legend-open">Open Gym</span>
                </div>
                <p className="schedule-board-note">All classes for ages 14 and up</p>
            </header>

            <div className="schedule-day-list">
                {schedule.map((day) => {
                    const isOpen = openDays.has(day.day);
                    const isToday = day.day === todayName;
                    return (
                        <div
                            key={day.day}
                            className={`schedule-day-card ${day.weekend ? 'is-weekend' : ''} ${isOpen ? 'is-open' : ''} ${isToday ? 'is-today' : ''}`}
                        >
                            <button
                                type="button"
                                className="schedule-day-toggle"
                                onClick={() => toggleDay(day.day)}
                                aria-expanded={isOpen}
                                aria-controls={`schedule-${day.day}`}
                            >
                                <span className="schedule-day-name">
                                    {day.day}
                                    {isToday && <span className="schedule-today-badge">Today</span>}
                                </span>
                                <span className="schedule-day-meta">
                                    {day.classes.length} {day.classes.length === 1 ? 'class' : 'classes'}
                                </span>
                                <span className="schedule-day-chevron" aria-hidden="true">▾</span>
                            </button>
                            <div
                                id={`schedule-${day.day}`}
                                className="schedule-day-body"
                                role="region"
                                aria-label={`${day.day} schedule`}
                            >
                                <div className="schedule-day-body-inner">
                                    {day.classes.map((cls, i) => (
                                        <div
                                            key={i}
                                            className="schedule-class-row"
                                            data-type={cls.type}
                                        >
                                            <span className="schedule-class-time">{cls.time}</span>
                                            <span className="schedule-class-name">{cls.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="schedule-board-actions">
                <DropIn />
                <div className="line-breaks">
                    <hr />
                    <span className="schedule-board-or">or</span>
                    <hr />
                </div>
                <JoinButton />
            </div>
        </section>
    );
}

export default Schedule;
