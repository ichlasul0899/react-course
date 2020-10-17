import React from 'react';

const ProgressBar = ({ data }) => {
  return (
    <div>
      <p className="right">
        {data.score}
        %
      </p>
      <p className="">{data.title}</p>
      <div className="progress">
        <div
          className="determinate black"
          style={{
            width: '80%',
          }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
