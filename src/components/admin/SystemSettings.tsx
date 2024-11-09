// Update brand name in SystemSettings component
import React from 'react';
// ... rest of the imports remain the same

const SystemSettings: React.FC = () => {
  return (
    <div>
      {/* ... rest of the component remains the same */}
      <div className="form-group">
        <label htmlFor="siteName" className="form-label">Site Name</label>
        <input
          type="text"
          id="siteName"
          className="input-field"
          defaultValue="Brand Matrix"
        />
      </div>
      {/* ... rest of the component remains the same */}
    </div>
  );
};

export default SystemSettings;