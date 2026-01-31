import "./timeline.css";

const steps = [
  {
    id: 1,
    title: "Order received",
    time: "29 July 2023, 3:05 PM",
    status: "completed",
  },
  {
    id: 2,
    title: "Payment completed",
    time: "29 July 2023, 3:05 PM",
    status: "completed",
  },
  {
    id: 3,
    title: "Auction ends",
    time: "29 July 2023, 3:05 PM",
    status: "current",
  },
  {
    id: 4,
    title: "Units allocation in progress",
    description: "Will be visible in your Demat holdings by 10 August 2023",
    status: "pending",
  },
  {
    id: 5,
    title: "Discount amount refund",
    description: "In your bank account (HDFC - XXXX XXXX X123)",
    status: "pending",
  },
];

export const Timeline = () => {
  return (
    <div className="timeline-container">
      {steps.map((step, index) => (
        <div key={step.id} className="timeline-item">
          <div className="timeline-left">
            <div
              className={`circle ${step.status}`}
            >
              {step.status === "completed" && "✓"}
              {step.status === "current" && "🕒"}
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`line ${
                  step.status === "completed" ? "line-active" : ""
                }`}
              />
            )}
          </div>

          <div className="timeline-content">
            <h4>{step.title}</h4>
            {step.time && <p className="time">{step.time}</p>}
            {step.description && (
              <p className="desc">{step.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
