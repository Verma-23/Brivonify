import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      article: null,
      relatedArticles: []
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.loadArticle(id);
    this.loadRelatedArticles();
  }

  loadArticle = (id) => {
    const articles = {
      1: {
        id: 1,
        title: 'Q4 Results Show Record Growth',
        description: 'Company achieves milestone with 40% year-over-year revenue increase.',
        author: 'Sarah Johnson',
        date: 'Oct 5, 2025',
        tags: ['Finance', 'Growth', 'Quarterly Report'],
        banner: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
        content: `
          <p>We are thrilled to announce that our Q4 results have exceeded all expectations, marking a significant milestone in our company's history. With a remarkable 40% year-over-year revenue increase, we've not only met our ambitious targets but surpassed them.</p>

          <h3>Key Highlights</h3>
          <p>This quarter has been exceptional across all metrics. Our revenue growth was driven by strong performance in our core markets, with particularly impressive gains in the Asia-Pacific region where we saw a 55% increase. The North American division maintained steady growth at 38%, while our European operations expanded by 42%.</p>

          <p>Customer acquisition has been phenomenal, with over 15,000 new clients joining our platform this quarter alone. Our customer retention rate improved to 94%, demonstrating the value our products and services bring to our clients.</p>

          <h3>What Drove Success</h3>
          <p>Several factors contributed to this outstanding performance. First, our product innovation team launched three major features that directly addressed customer pain points, resulting in higher engagement and satisfaction scores. Second, our sales team executed flawlessly, closing several enterprise deals that significantly boosted revenue.</p>

          <p>Additionally, our marketing campaigns resonated strongly with our target audience, driving a 60% increase in qualified leads compared to Q3. The investment we made in our digital infrastructure last year is now paying dividends, enabling us to scale efficiently while maintaining service quality.</p>

          <h3>Looking Ahead</h3>
          <p>As we move into the new fiscal year, we're positioned stronger than ever. We're doubling down on innovation, expanding our team by 25%, and entering two new markets in Latin America. Our pipeline is robust, and customer feedback indicates strong demand for our upcoming product releases.</p>

          <p>Thank you to every team member who contributed to this success. Your dedication, creativity, and hard work made these results possible. Let's carry this momentum forward!</p>
        `
      },
      2: {
        id: 2,
        title: 'New Office Opening in Austin',
        description: 'Expanding our presence with a state-of-the-art facility in Texas.',
        author: 'Mike Davis',
        date: 'Oct 4, 2025',
        tags: ['Expansion', 'Real Estate', 'Team Growth'],
        banner: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
        content: `
          <p>We're excited to announce the opening of our newest office location in Austin, Texas! This state-of-the-art facility represents a major milestone in our expansion strategy and will serve as a key hub for our growing operations in the Southwest region.</p>

          <h3>World-Class Facility</h3>
          <p>Our new Austin office spans 50,000 square feet across three floors in the heart of the city's tech corridor. The space has been designed with our team's needs in mind, featuring modern collaborative workspaces, private focus rooms, and comfortable common areas that promote both productivity and well-being.</p>

          <p>The facility includes a fully-equipped gym, meditation room, game lounge, and a rooftop terrace with stunning views of downtown Austin. We've partnered with local artists to create an inspiring environment that reflects Austin's vibrant culture and creative spirit.</p>

          <h3>Sustainability First</h3>
          <p>Environmental responsibility was a core consideration in designing this space. The building features solar panels, rainwater harvesting systems, and energy-efficient climate control. We're proud to have achieved LEED Platinum certification, making this one of the greenest office spaces in Austin.</p>

          <h3>Growing the Team</h3>
          <p>This expansion enables us to hire 200 new team members over the next 18 months. We're actively recruiting for positions across engineering, sales, customer success, and operations. If you know talented individuals looking to join a dynamic, growing company, please encourage them to check out our careers page.</p>

          <p>The Austin office will officially open its doors on November 1st, with a grand opening celebration planned for all local employees. We can't wait to welcome our team and begin this exciting new chapter!</p>
        `
      },
      3: {
        id: 3,
        title: 'Employee Wellness Initiative Launch',
        description: 'Comprehensive program focuses on mental and physical health support.',
        author: 'Emily Chen',
        date: 'Oct 3, 2025',
        tags: ['Wellness', 'Benefits', 'Culture'],
        banner: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
        content: `
          <p>Today marks the launch of our most comprehensive Employee Wellness Initiative to date. This program reflects our deep commitment to supporting the whole person – mind, body, and spirit. We believe that when our team members thrive, our company thrives.</p>

          <h3>Mental Health Support</h3>
          <p>Mental wellness is a priority. We're providing all employees with access to confidential counseling services through our partnership with leading mental health providers. Each team member receives 12 free therapy sessions per year, with additional sessions available as needed.</p>

          <p>We're also introducing mental health days as part of our PTO policy. Employees can take up to four mental health days per year, no questions asked, to rest and recharge. Additionally, we're offering mindfulness and meditation classes twice weekly, both virtually and in-person at our office locations.</p>

          <h3>Physical Wellness</h3>
          <p>Physical health is equally important. We're subsidizing gym memberships at 75%, and for those who prefer working out at home, we're offering a $500 annual stipend for home fitness equipment or virtual fitness programs.</p>

          <p>Our offices now feature standing desks and ergonomic equipment as standard, and we're organizing regular fitness challenges, group workout sessions, and outdoor activities to keep movement fun and social.</p>

          <h3>Financial Wellness</h3>
          <p>Financial stress impacts overall well-being, so we're introducing free financial planning services. Team members can consult with certified financial planners on budgeting, retirement planning, debt management, and investment strategies.</p>

          <h3>Work-Life Balance</h3>
          <p>We're formalizing our flexible work arrangements, allowing team members to design schedules that work best for them and their families. We're also piloting a four-day workweek in select departments to explore new ways of promoting balance and productivity.</p>

          <p>This initiative launches immediately, with orientation sessions scheduled throughout the month. We encourage everyone to take full advantage of these resources. Your well-being matters to us!</p>
        `
      },
      4: {
        id: 4,
        title: 'Innovation Award Winner Announced',
        description: 'Congratulations to the product team for their groundbreaking work.',
        author: 'David Martinez',
        date: 'Oct 2, 2025',
        tags: ['Awards', 'Innovation', 'Recognition'],
        banner: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        content: `
          <p>We're thrilled to announce that our product team has won the prestigious Tech Innovation Award 2025 for their groundbreaking work on our AI-powered analytics platform. This recognition from the industry validates the incredible effort and creativity our team has poured into this project.</p>

          <h3>The Winning Project</h3>
          <p>The award-winning analytics platform represents a significant leap forward in how businesses can understand and act on their data. Using advanced machine learning algorithms, the platform provides real-time insights that help our clients make faster, smarter decisions.</p>

          <p>What sets our solution apart is its accessibility. We've made sophisticated analytics available to non-technical users through an intuitive interface that anyone can use. The platform automatically identifies trends, anomalies, and opportunities, then delivers actionable recommendations in plain language.</p>

          <h3>The Team Behind the Success</h3>
          <p>This achievement is the result of 18 months of dedicated work by a cross-functional team of engineers, designers, data scientists, and product managers. Led by Senior Product Manager Jennifer Zhao and Chief Technology Officer Marcus Williams, the team pushed boundaries and challenged conventional thinking at every step.</p>

          <p>The collaborative spirit was extraordinary. Engineers worked closely with designers to ensure the interface was both powerful and beautiful. Data scientists partnered with product managers to translate complex algorithms into features customers could immediately understand and use.</p>

          <h3>Customer Impact</h3>
          <p>Since launching six months ago, the platform has been adopted by over 2,000 companies. Customer satisfaction scores are off the charts, with a Net Promoter Score of 85. Several clients have reported making critical business decisions 10 times faster than their previous processes allowed.</p>

          <h3>Celebration and Next Steps</h3>
          <p>We'll be hosting a celebration event on October 15th to honor the team's achievement. The event will feature the formal award presentation, team testimonials, and a look ahead at what's next for the platform.</p>

          <p>Congratulations to everyone involved! This award belongs to all of you, and we're excited to see what you'll create next.</p>
        `
      }
    };

    const article = articles[id] || articles[1];
    this.setState({ article });
  };

  loadRelatedArticles = () => {
    const related = [
      {
        id: 2,
        title: 'New Office Opening in Austin',
        author: 'Mike Davis',
        date: 'Oct 4, 2025'
      },
      {
        id: 3,
        title: 'Employee Wellness Initiative Launch',
        author: 'Emily Chen',
        date: 'Oct 3, 2025'
      },
      {
        id: 4,
        title: 'Innovation Award Winner Announced',
        author: 'David Martinez',
        date: 'Oct 2, 2025'
      }
    ];
    this.setState({ relatedArticles: related });
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  };

  handleShare = () => {
    alert('Share functionality');
  };

  handlePublish = () => {
    alert('Publish functionality');
  };

  handleBookmark = () => {
    alert('Bookmark functionality');
  };

  handleBack = () => {
    this.props.navigate('/');
  };

  handleRelatedArticleClick = (id) => {
    this.props.navigate(`/news/${id}`);
    window.scrollTo(0, 0);
    this.loadArticle(id);
  };

  render() {
    const { article, relatedArticles, isSidebarOpen } = this.state;

    if (!article) {
      return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <button
          onClick={this.toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex">
          <aside
            className={`fixed left-0 top-0 h-screen bg-white shadow-xl transition-transform duration-300 z-40 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 md:w-20 lg:w-24`}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              <button
                onClick={this.handleShare}
                className="group relative p-4 rounded-xl bg-sky-50 hover:bg-sky-100 transition-all duration-300 hover:shadow-lg"
                title="Share"
              >
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Share
                </span>
              </button>

              <button
                onClick={this.handlePublish}
                className="group relative p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 hover:shadow-lg"
                title="Publish"
              >
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Publish
                </span>
              </button>

              <button
                onClick={this.handleBookmark}
                className="group relative p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-all duration-300 hover:shadow-lg"
                title="Bookmark"
              >
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Bookmark
                </span>
              </button>

              <div className="border-t border-gray-200 w-12 my-4"></div>

              <h4 className="text-xs font-semibold text-gray-500 tracking-wider transform -rotate-90 whitespace-nowrap">SOCIAL</h4>

              <a
                href="#linkedin"
                className="group relative p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-lg"
                title="LinkedIn"
              >
                <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="#slack"
                className="group relative p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:shadow-lg"
                title="Slack"
              >
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </a>

              <a
                href="#email"
                className="group relative p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:shadow-lg"
                title="Email"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <a
                href="#twitter"
                className="group relative p-4 rounded-xl bg-sky-50 hover:bg-sky-100 transition-all duration-300 hover:shadow-lg"
                title="Twitter"
              >
                <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </aside>

          <main className="flex-1 md:ml-20 lg:ml-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <button
                onClick={this.handleBack}
                className="flex items-center text-sky-600 hover:text-sky-700 font-semibold mb-8 transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to News
              </button>

              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {article.banner && (
                  <div className="h-96 overflow-hidden">
                    <img
                      src={article.banner}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {article.title}
                  </h1>

                  <div className="flex items-center text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {article.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{article.author}</p>
                        <p className="text-sm text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    style={{
                      lineHeight: '1.8',
                      color: '#374151'
                    }}
                  />
                </div>
              </article>

              {relatedArticles.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                      <div
                        key={related.id}
                        onClick={() => this.handleRelatedArticleClick(related.id)}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{related.author}</span>
                          <span className="mx-2">•</span>
                          <span>{related.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>

        <style jsx>{`
          .prose h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
          }
          .prose p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            line-height: 1.8;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}

function NewsDetailsWithRouter(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <NewsDetails {...props} params={params} navigate={navigate} />;
}

export default NewsDetailsWithRouter;
