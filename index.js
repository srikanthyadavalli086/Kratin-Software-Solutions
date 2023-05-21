//Let,s write the code for mediacation app....
import React, { useState, useEffect } from 'react';

const MedicationReminderApp = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch Sunita's medications from an API or local storage
    const fetchMedications = async () => {
      try {
        // Simulating API call or local storage retrieval
        const medicationsData = await fetch('/api/medications');
        const medications = await medicationsData.json();
        setMedications(medications);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, []);

  const handleMedicationTaken = (medicationId) => {
    // Update medication status to taken in the database or local storage
    // You can add the necessary logic here to update the backend or local storage
    console.log('Medication taken:', medicationId);
  };

  return (
    <div>
      <h1>Medication Reminder</h1>
      {medications.length === 0 ? (
        <p>No medications found.</p>
      ) : (
        <ul>
          {medications.map((medication) => (
            <li key={medication.id}>
              <strong>{medication.name}</strong>
              <p>{medication.dosage}</p>
              <button onClick={() => handleMedicationTaken(medication.id)}>
                Mark as Taken
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicationReminderApp;
