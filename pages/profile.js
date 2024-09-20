// src/pages/profile.js
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import 'react-multi-date-picker/styles/colors/teal.css';
import RequiredLabel from '../components/RequiredLabel';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    skills: [],
    preferences: '',
    availability: [],
  });

  const [errors, setErrors] = useState({});

  const states = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ];

  const skillsOptions = [
    { value: 'communication', label: 'Communication' },
    { value: 'teamwork', label: 'Teamwork' },
    { value: 'problemSolving', label: 'Problem Solving' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'timeManagement', label: 'Time Management' },
    { value: 'projectManagement', label: 'Project Management' },
    { value: 'technicalSkills', label: 'Technical Skills' },
    { value: 'mentoring', label: 'Mentoring' },
    { value: 'customerService', label: 'Customer Service' },
    { value: 'eventPlanning', label: 'Event Planning' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'publicSpeaking', label: 'Public Speaking' },
    { value: 'writing', label: 'Writing' },
    { value: 'socialMedia', label: 'Social Media' },
    { value: 'firstAid', label: 'First Aid' },
    { value: 'dataEntry', label: 'Data Entry' },
    { value: 'tutoring', label: 'Tutoring' },
    { value: 'counseling', label: 'Counseling' },
    { value: 'environmentalAwareness', label: 'Environmental Awareness' },
    { value: 'artsAndCrafts', label: 'Arts and Crafts' }
  ];

  const validate = () => {
    const errors = {};
    if (!formData.fullName || formData.fullName.length > 50) {
      errors.fullName = 'Full Name is required and should be less than 50 characters';
    }
    if (!formData.address1 || formData.address1.length > 100) {
      errors.address1 = 'Address 1 is required and should be less than 100 characters';
    }
    if (!formData.city || formData.city.length > 100) {
      errors.city = 'City is required and should be less than 100 characters';
    }
    if (!formData.state) {
      errors.state = 'State selection is required';
    }
    if (!formData.zipCode || formData.zipCode.length < 5 || formData.zipCode.length > 9) {
      errors.zipCode = 'Zip code should be between 5 and 9 characters';
    }
    if (formData.skills.length === 0) {
      errors.skills = 'At least one skill is required';
    }
    if (formData.availability.length === 0) {
      errors.availability = 'At least one date for availability is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (selected) => {
    setFormData({
      ...formData,
      skills: selected,
    });
  };

  const handleAvailabilityChange = (dates) => {
    setFormData({
      ...formData,
      availability: dates,
    });
  };

  const handleZipCodeChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setFormData({
        ...formData,
        zipCode: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form data submitted', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <RequiredLabel label="Full Name" />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          maxLength="50"
          required
        />
        {errors.fullName && <span>{errors.fullName}</span>}
      </div>

      <div>
        <RequiredLabel label="Address 1" />
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          maxLength="100"
          required
        />
        {errors.address1 && <span>{errors.address1}</span>}
      </div>

      <div>
        <label>Address 2:</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          maxLength="100"
        />
      </div>

      <div>
        <RequiredLabel label="City" />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          maxLength="100"
          required
        />
        {errors.city && <span>{errors.city}</span>}
      </div>

      <div>
        <RequiredLabel label="State" />
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        {errors.state && <span>{errors.state}</span>}
      </div>

      <div>
        <RequiredLabel label="Zip Code" />
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleZipCodeChange}
          maxLength="9"
          minLength="5"
          required
        />
        {errors.zipCode && <span>{errors.zipCode}</span>}
      </div>

      <div>
        <RequiredLabel label="Skills" />
        <MultiSelect
          options={skillsOptions}
          value={formData.skills}
          onChange={handleSkillsChange}
          labelledBy="Select Skills"
          required
        />
        {errors.skills && <span>{errors.skills}</span>}
      </div>

      <div>
        <label>Preferences:</label>
        <textarea
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
        />
      </div>

      <div>
        <RequiredLabel label="Availability" />
        <DatePicker
          multiple
          value={formData.availability}
          onChange={handleAvailabilityChange}
          format="MM/DD/YYYY"
          plugins={[<DatePanel />]}
          required
        />
        {errors.availability && <span>{errors.availability}</span>}
      </div>

      <button type="submit">Save Profile</button>
    </form>
  );
};

const ProfilePage = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <UserProfileForm />
    </div>
  );
};

export default ProfilePage;
