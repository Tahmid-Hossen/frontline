import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const TechnologyStacks = ({stacks}) => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Heading Section */}
      <div className="text-center space-y-9">
        <h2 className="text-center heading2 font-normal">
          Our <span className="heading2 text-primary font-normal">Technology Stack</span>
        </h2>
        <p className='max-w-[80%] mx-auto text-center text-[18px]'>
          We recognize that modern companies need to develop customized software products to stay ahead in the
          competitive market.
        </p>
      </div>

      {/* Tab List */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-4 py-2 rounded-lg font-medium text-lg ${activeTab === 'All' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All
        </button>
        {stacks?.map((stack) => (
          <button
            key={stack.id}
            onClick={() => setActiveTab(stack.name)}
            className={`px-4 py-2 rounded-lg font-medium text-lg ${activeTab === stack.name ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {stack.name}
          </button>
        ))}
      </div>

      {/* Image Display Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {activeTab === 'All' ? (
          stacks?.map((stack) => (
            <div key={stack.id} className="flex flex-col items-center">
              <img
                width={180}
                height={130}
                src={stack.image}
                alt={stack.name}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="mt-2 font-medium">{stack.name}</p>
            </div>
          ))
        ) : (
          stacks
            .filter((stack) => stack.name === activeTab)
            .map((stack) => (
              <div key={stack.id} className="flex flex-col items-center">
                <img
                  width={180}
                  height={130}
                  src={stack.image}
                  alt={stack.name}
                  className="w-full h-auto object-cover rounded-md"
                />
                <p className="mt-2 font-bold text-[32px]">{stack.name}</p>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default TechnologyStacks;
