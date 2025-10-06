import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContentSection.css';

const ContentSection = ({ activeSection }) => {
  const navigate = useNavigate();
  const newsArticles = [
    {
      id: 1,
      title: 'Q4 Results Show Record Growth',
      description: 'Company achieves milestone with 40% year-over-year revenue increase.',
      author: 'Sarah Johnson',
      date: 'Oct 5, 2025',
      category: 'News'
    },
    {
      id: 2,
      title: 'New Office Opening in Austin',
      description: 'Expanding our presence with a state-of-the-art facility in Texas.',
      author: 'Mike Davis',
      date: 'Oct 4, 2025',
      category: 'News'
    },
    {
      id: 3,
      title: 'Employee Wellness Initiative Launch',
      description: 'Comprehensive program focuses on mental and physical health support.',
      author: 'Emily Chen',
      date: 'Oct 3, 2025',
      category: 'News'
    },
    {
      id: 4,
      title: 'Innovation Award Winner Announced',
      description: 'Congratulations to the product team for their groundbreaking work.',
      author: 'David Martinez',
      date: 'Oct 2, 2025',
      category: 'News'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Best Practices for Remote Collaboration',
      description: 'Learn effective strategies for staying productive while working remotely.',
      author: 'Lisa Anderson',
      date: 'Oct 1, 2025'
    },
    {
      id: 2,
      title: 'Career Development: Your Growth Path',
      description: 'Explore opportunities and resources for advancing your career.',
      author: 'Robert Taylor',
      date: 'Sep 28, 2025'
    },
    {
      id: 3,
      title: 'Company Culture: Our Values in Action',
      description: 'Stories showcasing how our values shape everyday decisions.',
      author: 'Jennifer Lee',
      date: 'Sep 25, 2025'
    }
  ];

  const hrContent = [
    {
      id: 1,
      title: 'Benefits Enrollment Period Opens',
      description: 'Review and select your benefits for 2026. Deadline is October 31st.',
      icon: '📋'
    },
    {
      id: 2,
      title: 'New Parental Leave Policy',
      description: 'Extended leave options now available for all new parents.',
      icon: '👶'
    },
    {
      id: 3,
      title: 'Professional Development Budget',
      description: 'Each employee has $2,000 annually for courses and conferences.',
      icon: '📚'
    },
    {
      id: 4,
      title: 'Performance Review Schedule',
      description: 'Annual reviews will take place throughout November.',
      icon: '⭐'
    }
  ];

  const crossFunctions = [
    {
      id: 1,
      title: 'Marketing & Product Sync',
      description: 'Monthly alignment meetings to ensure messaging consistency.',
      teams: ['Marketing', 'Product']
    },
    {
      id: 2,
      title: 'Sales & Engineering Collaboration',
      description: 'Technical solutions team bridges customer needs with development.',
      teams: ['Sales', 'Engineering']
    },
    {
      id: 3,
      title: 'HR & Finance Partnership',
      description: 'Streamlined processes for compensation and benefits management.',
      teams: ['HR', 'Finance']
    }
  ];

  const entities = [
    {
      id: 1,
      name: 'North America Division',
      description: 'Headquarters and primary operations',
      employees: '1,200+',
      color: '#0ea5e9'
    },
    {
      id: 2,
      name: 'European Division',
      description: 'Growing presence across 12 countries',
      employees: '800+',
      color: '#06b6d4'
    },
    {
      id: 3,
      name: 'Asia-Pacific Division',
      description: 'Innovation hub and manufacturing',
      employees: '600+',
      color: '#0891b2'
    },
    {
      id: 4,
      name: 'Latin America Division',
      description: 'Emerging markets expansion',
      employees: '300+',
      color: '#0e7490'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'News':
        return (
          <div className="content-grid">
            {newsArticles.map((article) => (
              <div key={article.id} className="article-card news-card">
                <div className="card-badge">News</div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="card-footer">
                  <span className="author">{article.author}</span>
                  <span className="date">{article.date}</span>
                </div>
                <button
                  className="read-more"
                  onClick={() => navigate(`/news/${article.id}`)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        );

      case 'Articles':
        return (
          <div className="content-grid">
            {articles.map((article) => (
              <div key={article.id} className="article-card articles-card">
                <div className="card-badge">Article</div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="card-footer">
                  <span className="author">{article.author}</span>
                  <span className="date">{article.date}</span>
                </div>
                <button className="read-more">Read More</button>
              </div>
            ))}
          </div>
        );

      case 'HR':
        return (
          <div className="content-grid hr-grid">
            {hrContent.map((item) => (
              <div key={item.id} className="hr-card">
                <div className="hr-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        );

      case 'Cross Functions':
        return (
          <div className="content-grid cf-grid">
            {crossFunctions.map((item) => (
              <div key={item.id} className="cf-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="teams-badges">
                  {item.teams.map((team, idx) => (
                    <span key={idx} className="team-badge">{team}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'Entities':
        return (
          <div className="content-grid entities-grid">
            {entities.map((entity) => (
              <div key={entity.id} className="entity-card" style={{ borderColor: entity.color }}>
                <div className="entity-header" style={{ background: entity.color }}>
                  <h3>{entity.name}</h3>
                </div>
                <div className="entity-body">
                  <p>{entity.description}</p>
                  <div className="employee-count">{entity.employees} employees</div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="content-section">
      <div className="content-container">
        <div className="section-header">
          <h2>{activeSection}</h2>
          <p className="section-subtitle">
            {activeSection === 'News' && 'Latest updates and announcements from across the company'}
            {activeSection === 'Articles' && 'Insights and stories from our team members'}
            {activeSection === 'HR' && 'Important human resources information and updates'}
            {activeSection === 'Cross Functions' && 'Collaborative initiatives across departments'}
            {activeSection === 'Entities' && 'Our global divisions and their impact'}
          </p>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default ContentSection;
