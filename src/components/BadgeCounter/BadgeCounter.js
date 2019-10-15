import React from 'react';

export default function BadgeCounter(props){
  const badge = props.count ? <div className="tools_count">{props.count}</div> : null;
  return (
    <div>
      {badge}
    </div>
  );
}