import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabClasses = (tabId) => {
    let classes = 'tabs__tab';
    if (tabId === activeTab) {
      classes += ' tabs__tab--active';
    }
    return classes;
  };

  const getPaneClasses = (tabId) => {
    let classes = 'tabs__pane';
    if (tabId === activeTab) {
      classes += ' tabs__pane--active';
    }
    return classes;
  };

  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={getTabClasses(tab.id)}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs__content">
        {tabs.map((tab) => (
          <div key={tab.id} className={getPaneClasses(tab.id)}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultTab: 1,
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  defaultTab: PropTypes.number,
};

export default Tabs;
