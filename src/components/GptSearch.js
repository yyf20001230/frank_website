import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaCommentDots } from 'react-icons/fa';
import './GptSearch.css';

function GptSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [readmeContent, setReadmeContent] = useState('');
  const [hovered, setHovered] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const [shouldShowResponse, setShouldShowResponse] = useState(false);
  const [lastResponseQuery, setLastResponseQuery] = useState('');
        const [isTouchScreen, setIsTouchScreen] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const textareaRef = useRef(null);

  useEffect(() => {
    fetch('/info.md')
      .then(res => res.text())
      .then(text => setReadmeContent(text))
      .catch(() => setReadmeContent(''));
  }, []);

              // Check for touch screen devices
      useEffect(() => {
        const checkTouchScreen = () => {
          // Check for actual touch capability - more specific to avoid false positives on desktop
          const isTouch = ('ontouchstart' in window && navigator.maxTouchPoints > 0) || 
                          (navigator.maxTouchPoints > 0 && window.innerWidth <= 1100);
          setIsTouchScreen(isTouch);
        };
        
        checkTouchScreen();
        window.addEventListener('resize', checkTouchScreen);
        
        return () => {
          window.removeEventListener('resize', checkTouchScreen);
        };
      }, []);

  // Clear response if input changes from last response
  useEffect(() => {
    if (query !== lastResponseQuery) {
      setResult('');
      setError('');
    }
  }, [query, lastResponseQuery]);

  // Manage shouldShowResponse state
  useEffect(() => {
    const shouldShow = (hovered || query.length > 0) && query === lastResponseQuery && (result || error) && !clickedOutside;
    setShouldShowResponse(shouldShow);
  }, [hovered, query, lastResponseQuery, result, error, clickedOutside]);

  const systemPrompt = `You are an AI assistant for Frank Yang’s personal website. Frank is a Computer Science MS student at Northwestern, robotics researcher, and software engineer. The site covers his research, work experience, projects, teaching, and cinematography. Give concise answers (≤100 words) to questions about Frank, and always suggest which section (About, News, Work Experience, Research, Projects, Cinematography) the user should visit for more details.\n\n---\n\n` + readmeContent;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    setError('');
    setLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: query }
          ],
          max_tokens: 512,
        }),
      });
      if (response.status === 429) {
        setError('Too many requests. Please wait a moment and try again.');
        setLoading(false);
        setLastResponseQuery(query);
        return;
      } else if (response.status === 401) {
        setError('Invalid or missing API key. Please check your configuration.');
        setLoading(false);
        setLastResponseQuery(query);
        return;
      } else if (!response.ok) {
        setError('An error occurred. Please try again later.');
        setLoading(false);
        setLastResponseQuery(query);
        return;
      }
      const data = await response.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setResult(data.choices[0].message.content);
        setLastResponseQuery(query);
      } else {
        setError('No response from GPT-4o.');
        setLastResponseQuery(query);
      }
    } catch (err) {
      setError('Error contacting GPT-4o API.');
      setLastResponseQuery(query);
    }
    setLoading(false);
  };

  // Submit on Enter, new line on Shift+Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      if (!loading && apiKey && query.trim()) {
        handleSubmit(e);
      }
    }
  };

  // Show response if not shrunk and query matches lastResponseQuery
  const barHeight = query.split('\n').length > 1 ? 80 : 40;
  const expanded = hovered || (query.length > 0 && !clickedOutside);

  // Close on click outside
  const containerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // collapse even if there's text in the input
        setHovered(false);
        setClickedOutside(true);
        setShouldShowResponse(false);
      }
    }
    
    // Always add the click outside listener
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Don't render the component on touch screen devices
  if (isTouchScreen) {
    return null;
  }

  return (
    <div className="gpt-float-container" ref={containerRef}
      onMouseEnter={() => {
        setHovered(true);
        setClickedOutside(false);
      }}
      onMouseLeave={() => { 
        // Only set hover to false if there's no text, otherwise keep it expanded
        if (query.length === 0) {
          setHovered(false);
        }
      }}
      onClick={() => {
        setHovered(true);
        setClickedOutside(false);
      }}
    >
      {shouldShowResponse && (
        <div className="gpt-chat-bubble">
          {loading ? (
            <span className="gpt-float-loading" />
          ) : error ? error : result}
        </div>
      )}
      <div
        className={`gpt-float-icon${expanded ? ' expanded' : ''}`}
        style={{ width: expanded ? 350 : 64, minWidth: expanded ? 350 : 64, height: expanded ? barHeight + 24 : 64 }}
      >
        {!expanded ? (
          <FaCommentDots 
            className="gpt-float-main-icon" 
            onClick={() => setHovered(true)}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <form className="gpt-float-form" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
            <div className="gpt-float-bar-inner" style={{ height: barHeight, alignItems: 'center' }}>
              <textarea
                className="gpt-float-search-bar"
                placeholder="Ask Frank with Agenic AI..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                ref={textareaRef}
                disabled={loading}
                rows={query.split('\n').length > 1 ? 2 : 1}
                maxLength={400}
                onKeyDown={handleKeyDown}
                onClick={(e) => {
                  e.stopPropagation();
                  setHovered(true);
                }}
                style={{ 
                  resize: 'none', 
                  paddingRight: 36, 
                  minHeight: 40, 
                  maxHeight: 80, 
                  height: barHeight, 
                  overflowY: 'auto', 
                  display: 'block', 
                  boxSizing: 'border-box', 
                  width: '100%',
                  fontSize: '16px' // Prevents zoom on iOS
                }}
              />
              {!loading && (
                <button 
                  className="gpt-float-search-btn" 
                  type="button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmit(e);
                  }} 
                  onMouseDown={(e) => e.preventDefault()}
                  tabIndex={0} 
                  aria-label="Search"
                  disabled={!apiKey || !query.trim()}
                >
                  <FaSearch />
                </button>
              )}
              {loading && (
                <span className="gpt-float-loading" />
              )}
            </div>
            <button 
              className="gpt-float-btn" 
              type="submit" 
              disabled={loading || !apiKey || !query.trim()} 
              style={{ display: 'none' }}
            >
              <FaSearch />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default GptSearch; 