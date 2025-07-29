import React from 'react';
import './News.css';

const newsItems = [
  {
    date: 'Aug 2025',
    content: 'Started working as a Forward Deployed Engineer at ScaleAI! Let\'s connect in SF :)',
    link: 'https://scale.com/',
    emphasis: ['Forward Deployed Engineer', 'ScaleAI'],
  },
  {
    date: 'May 2025',
    content: 'Submitted Master Thesis Safety-Assured Autonomy of Learning-Enabled Embodied AI Agents!',
    link: '/assets/pdf/MS_Thesis_Frank.pdf',
    emphasis: ["Safety-Assured Autonomy of Learning-Enabled Embodied AI Agents"],
  },
  {
    date: 'May 2025',
    content: 'Submitted a paper on delayed offline RL to NeurIPS 2025',
    link: 'https://neurips.cc/',
    emphasis: ['NeurIPS 2025'],
  },
  {
    date: 'Dec 2024',
    content: 'Submitted a paper on delayed inverse RL to L4DC 2025',
    link: 'https://sites.google.com/umich.edu/l4dc2025/',
    emphasis: ['L4DC 2025'],
  },
  {
    date: 'Oct 2024',
    content: 'Invited talk to RV 2024',
    link: "https://easychair.org/cfp/rv2024",
    emphasis: ['RV 2024'],
  },
  {
    date: 'Aug 2024',
    content: 'Submitted POLAR-express to Embedded Systems Week 2024 tool presentation (Winner of ESSC 2024)',
    link: 'https://esweek.org/',
    emphasis: ['Embedded Systems Week 2024', 'ESSC 2024'],
  },
  {
    date: 'Jul 2024',
    content: 'One paper accepted to RV 2024',
    link: 'https://arxiv.org/abs/2408.08592',
    emphasis: ['RV 2024'],
  },
  {
    date: 'Jun 2024',
    content: 'Started as a Robotic Learning Intern at Stanford Vision and Learning Lab',
    link: 'https://svl.stanford.edu/',
    emphasis: ['Robotic Learning Intern', 'Stanford Vision and Learning Lab'],
  },
  {
    date: 'May 2023',
    content: 'One paper accepted to MMLS 2023',
    emphasis: ['MMLS 2023'],
  }
];

// Helper function to format text with emphasis
const formatTextWithEmphasis = (text, emphasisArray = []) => {
  if (!emphasisArray || emphasisArray.length === 0) {
    return text;
  }

  let formattedText = text;
  emphasisArray.forEach(emphasis => {
    const regex = new RegExp(`(${emphasis.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    formattedText = formattedText.replace(regex, '<em>$1</em>');
  });

  return formattedText;
};

function News() {
  return (
    <div className="news-section">
      <div className="news-container">
        <div className="news-left">
          <h1 className="news-title">News</h1>
          <ul className="news-list">
            {newsItems.map((item, idx) => (
              <li className="news-item" key={idx}>
                <span className="news-date">{item.date}</span>
                <span className="news-content">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <span dangerouslySetInnerHTML={{ __html: formatTextWithEmphasis(item.content, item.emphasis) }} />
                    </a>
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: formatTextWithEmphasis(item.content, item.emphasis) }} />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="news-right">
          {/* Empty space to match MergedAbout layout */}
        </div>
      </div>
    </div>
  );
}

export default News; 