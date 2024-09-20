// components/EventManagementForm.js
import React, { useState } from 'react';
import eventService from '../services/eventService';

const EventManagementForm = () => {
  const [event, setEvent] = useState({
    eventName: '',
    eventDescription: '',
    location: '',
    requiredSkills: [],
    urgency: '',
    eventDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setEvent({ ...event, requiredSkills: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.createOrUpdateEvent(event);
      // Handle successful event creation
    } catch (error) {
      console.error('Event creation failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Event Name:</label>
      <input
        type="text"
        name="eventName"
        value={event.eventName}
        onChange={handleInputChange}
        maxLength="100"
        required
      />
      <label>Event Description:</label>
      <textarea
        name="eventDescription"
        value={event.eventDescription}
        onChange={handleInputChange}
        required
      />
      <label>Location:</label>
      <textarea
        name="location"
        value={event.location}
        onChange={handleInputChange}
        required
      />
      <label>Required Skills:</label>
      <select
        name="requiredSkills"
        multiple
        value={event.requiredSkills}
        onChange={(e) => handleSkillsChange([...e.target.options].filter(option => option.selected).map(option => option.value))}
        required
      >
        {/* Add options for skills */}
      </select>
      <label>Urgency:</label>
      <select
        name="urgency"
        value={event.urgency}
        onChange={handleInputChange}
        required
      >
        {/* Add options for urgency levels */}
      </select>
      <label>Event Date:</label>
      <input
        type="date"
        name="eventDate"
        value={event.eventDate}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventManagementForm;
