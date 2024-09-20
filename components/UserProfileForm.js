// components/UserProfileForm.js
import React, { useState } from 'react';
import userService from '../services/userService';

const UserProfileForm = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    skills: [],
    preferences: '',
    availability: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setProfile({ ...profile, skills: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateProfile(profile);
      // Handle successful profile update
    } catch (error) {
      console.error('Profile update failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={profile.fullName}
        onChange={handleInputChange}
        maxLength="50"
        required
      />
      <label>Address 1:</label>
      <input
        type="text"
        name="address1"
        value={profile.address1}
        onChange={handleInputChange}
        maxLength="100"
        required
      />
      <label>Address 2:</label>
      <input
        type="text"
        name="address2"
        value={profile.address2}
        onChange={handleInputChange}
        maxLength="100"
      />
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={profile.city}
        onChange={handleInputChange}
        maxLength="100"
        required
      />
      <label>State:</label>
      <select
        name="state"
        value={profile.state}
        onChange={handleInputChange}
        required
      >
        {/* Add options for all states */}
        <option value="">Select State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        {/* Add remaining states */}
      </select>
      <label>Zip Code:</label>
      <input
        type="text"
        name="zipCode"
        value={profile.zipCode}
        onChange={handleInputChange}
        pattern="\d{5}(-\d{4})?"
        maxLength="9"
        required
      />
      <label>Skills:</label>
      <select
        name="skills"
        multiple
        value={profile.skills}
        onChange={(e) => setProfile({ ...profile, skills: [...e.target.options].filter(option => option.selected).map(option => option.value) })}
        required
      >
        {/* Add options for skills */}
        <option value="firstAid">First Aid</option>
        <option value="cooking">Cooking</option>
        <option value="driving">Driving</option>
        {/* Add more skills */}
      </select>
      <label>Preferences:</label>
      <textarea
        name="preferences"
        value={profile.preferences}
        onChange={handleInputChange}
      />
      <label>Availability:</label>
      <input
        type="date"
        name="availability"
        value={profile.availability}
        onChange={(e) => setProfile({ ...profile, availability: [...e.target.selectedOptions].map(option => option.value) })}
        multiple
        required
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default UserProfileForm;
