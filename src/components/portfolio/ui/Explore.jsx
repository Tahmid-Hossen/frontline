

const explore = [
  {
    "id": 1,
    "name": "summary",
    "color": "#78B4FF"
  },
  {
    "id": 2,
    "name": "challenges",
    "color": "#35ED6F"
  },
  {
    "id": 3,
    "name": "solutions",
    "color": "#FFD4EE"
  },
  {
    "id": 4,
    "name": "problems",
    "color": "#C666EF"
  },
  {
    "id": 5,
    "name": "update",
    "color": "#66EFE5"
  },
  {
    "id": 6,
    "name": "features",
    "color": "#35ED6F"
  },
  {
    "id": 7,
    "name": "why this app",
    "color": "#78B4FF"
  },
  {
    "id": 8,
    "name": "impact",
    "color": "#FE704E"
  },
  {
    "id": 9,
    "name": "technologies",
    "color": "#EDD735"
  }
]
const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Heading Section */}
      <div className="text-center space-y-9">
        <h2 className="text-center heading2 font-normal">
          Easy Explore <span className="heading2 text-primary font-normal">NexVTS</span>
        </h2>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {explore.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center justify-between p-8 bg-[#F6F9FC] rounded-md"
            style={{ borderLeft: `8px solid ${item.color}` }}
          >
            <div></div>

            <div className='col-span-2 flex justify-between items-center'>
              <span className="text-lg font-medium capitalize">{item.name}</span>
              <span className="text-lg font-bold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17L15 12L10 7" stroke="#0170FF" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                  </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;