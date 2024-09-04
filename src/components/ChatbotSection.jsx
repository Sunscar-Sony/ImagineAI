import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ChatbotSection.module.css';

const ChatbotSection = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/chatbot', { message });
    setResponses([...responses, { user: message, bot: res.data.reply }]);
    setMessage('');
  };

  return (
    <section className={styles.chatbot}>
      <div className={styles.chatbox}>
        <div className={styles.messages}>
          {responses.map((response, index) => (
            <div key={index} className={styles.message}>
              <div className={styles.userMessage}>{response.user}</div>
              <div className={styles.botMessage}>{response.bot}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ChatbotSection;
