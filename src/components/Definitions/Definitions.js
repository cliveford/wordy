import React from 'react';
import './Definitions.css';

const Definitions = ({ word, category, meanings, lightMode }) => {
  return (
    <div className='meanings'>
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: '#fff', borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio element.
        </audio>
      )}

      {word === '' ? (
        <span className='subTitle'>Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className='singleMean'
                style={{
                  backgroundColor: lightMode ? '#3b5360' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
                key={def.definition}
              >
                <b>{def.definition}</b>
                <div
                  className='straightLine'
                  style={{ backgroundColor: lightMode ? 'white' : '#3b5360' }}
                ></div>

                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
