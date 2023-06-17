import React from "react";

interface Performance {
  artist: string;
  from: string;
  to: string;
}

interface Schedule {
  [day: string]: Performance[];
}

interface ItineraryData {
  [stage: string]: Schedule;
}

interface ItineraryProps {
  itinerary: ItineraryData;
}

export const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  const stages = Object.keys(itinerary);
  const gridTemplateColumns = `repeat(${stages.length}, 1fr)`;

  return (
    <div
      className="itinerary grid overflow-x-auto"
      style={{ gridTemplateColumns }}
    >
      {stages.map((stage) => (
        <div key={stage} className="stage">
          <h2 className="text-xl font-bold">{stage}</h2>
          {Object.entries(itinerary[stage]).map(([day, performances]) => (
            <div key={day} className="day mt-4">
              <h3 className="text-lg font-bold">{day}</h3>
              <ul>
                {performances.map((performance, index) => (
                  <li key={index} className="performance mt-2 bg-gray-200 p-4">
                    <div className="time mb-2 flex justify-between font-bold">
                      <span>
                        From: {new Date(performance.from).toLocaleTimeString()}
                      </span>
                      <span>
                        To: {new Date(performance.to).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="artist">{performance.artist}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
