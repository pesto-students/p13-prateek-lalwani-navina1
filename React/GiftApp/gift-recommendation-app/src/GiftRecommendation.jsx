
import React, { useState } from 'react';
import axios from 'axios';

const GiftRecommendation = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendation = async () => {
    try {
      // TODO: Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
      const apiKey = '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';
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `Gift recommendations for a ${age}-year-old ${gender} who likes ${interests}.`,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      setRecommendations(response.data.choices.map((choice) => choice.text));
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <h1>Gift Recommendation App</h1>
      <div>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Interests:
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
        </label>
      </div>
      <button onClick={handleRecommendation}>Get Recommendations</button>
      <div>
        <h2>Recommendations:</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GiftRecommendation;
