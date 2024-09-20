// src/pages/event-management.js
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import 'react-multi-date-picker/styles/colors/teal.css';
import RequiredLabel from '../components/RequiredLabel';

const EventManagementForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    city: '',
    state: '',
    location: '',
    requiredSkills: [],
    urgency: '',
    eventDate: null,
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

  const urgencyOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const validate = () => {
    const errors = {};
    if (!formData.eventName || formData.eventName.length > 100) {
      errors.eventName = 'Event Name is required and should be less than 100 characters';
    }
    if (!formData.eventDescription) {
      errors.eventDescription = 'Event Description is required';
    }
    if (!formData.city) {
      errors.city = 'City is required';
    }
    if (!formData.state) {
      errors.state = 'State selection is required';
    }
    if (!formData.location) {
      errors.location = 'Location is required';
    }
    if (formData.requiredSkills.length === 0) {
      errors.requiredSkills = 'At least one skill is required';
    }
    if (!formData.urgency) {
      errors.urgency = 'Urgency selection is required';
    }
    if (!formData.eventDate) {
      errors.eventDate = 'Event Date is required';
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
      requiredSkills: selected,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      eventDate: date,
    });
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
        <RequiredLabel label="Event Name" />
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          maxLength="100"
          required
        />
        {errors.eventName && <span>{errors.eventName}</span>}
      </div>

      <div>
        <RequiredLabel label="Event Description" />
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          required
        />
        {errors.eventDescription && <span>{errors.eventDescription}</span>}
      </div>

      <div>
        <RequiredLabel label="City" />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
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
        <RequiredLabel label="Location" />
        <textarea
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        {errors.location && <span>{errors.location}</span>}
      </div>

      <div>
        <RequiredLabel label="Required Skills" />
        <MultiSelect
          options={skillsOptions}
          value={formData.requiredSkills}
          onChange={handleSkillsChange}
          labelledBy="Select Skills"
          required
        />
        {errors.requiredSkills && <span>{errors.requiredSkills}</span>}
      </div>

      <div>
        <RequiredLabel label="Urgency" />
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          required
        >
          <option value="">Select Urgency</option>
          {urgencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.urgency && <span>{errors.urgency}</span>}
      </div>

      <div>
        <RequiredLabel label="Event Date" />
        <DatePicker
          value={formData.eventDate}
          onChange={handleDateChange}
          format="MM/DD/YYYY"
          plugins={[<DatePanel />]}
          required
        />
        {errors.eventDate && <span>{errors.eventDate}</span>}
      </div>

      <button type="submit">Save Event</button>
    </form>
  );
};

const EventManagementPage = () => {
  return (
    <div className="container">
      <h1>Event Management</h1>
      <EventManagementForm />
    </div>
  );
};

export default EventManagementPage;
