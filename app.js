// Application Data
const assessmentData = {
  industries: [
    "Consumer Goods", "Finance", "Tech", "Healthcare", "Education", "Travel", "E-commerce", "Other"
  ],
  assessmentAreas: {
    "Digital Experience & Content": {
      metrics: [
        {
          key: "brandVoice",
          name: "Brand voice consistency",
          description: "Consistency in tone across web and social platforms",
          link: "https://www.nngroup.com/articles/brand-tone-voice/"
        },
        {
          key: "uxQuality",
          name: "UX/UI quality",
          description: "Visual design and navigational coherence assessment",
          link: "https://lawsofux.com/"
        },
        {
          key: "seoOptimization",
          name: "SEO optimization",
          description: "Meta tags, alt texts, and internal linking structure",
          link: "https://moz.com/beginners-guide-to-seo"
        },
        {
          key: "contentDiversity",
          name: "Content diversity",
          description: "Variety across blogs, videos, reels, stories, and formats",
          link: "https://contentmarketinginstitute.com/"
        },
        {
          key: "socialCadence",
          name: "Social media cadence",
          description: "Posting frequency, engagement rates, and platform presence",
          link: "https://sproutsocial.com/insights/social-media-frequency/"
        },
        {
          key: "llmStructure",
          name: "LLM-friendly structure",
          description: "FAQ pages, Q&A sections, semantic markup for AI search",
          link: "https://www.searchenginejournal.com/optimize-for-llms/506689/"
        }
      ]
    },
    "Data & Analytics": {
      metrics: [
        {
          key: "ga4Setup",
          name: "GA4 setup",
          description: "Google Analytics 4 implementation, goals, and tracking",
          link: "https://www.analyticsmania.com/post/ga4-beginner-guide/"
        },
        {
          key: "eventTracking",
          name: "Event tracking",
          description: "Custom events and user interaction monitoring",
          link: "https://support.google.com/analytics/answer/9267735"
        },
        {
          key: "attribution",
          name: "Attribution modeling",
          description: "Multi-touch attribution and customer journey tracking",
          link: "https://www.optimizely.com/optimization-glossary/attribution-modeling/"
        },
        {
          key: "socialListening",
          name: "Social listening",
          description: "Brand sentiment monitoring and mention tracking",
          link: "https://blog.hootsuite.com/social-listening-business/"
        },
        {
          key: "llmMonitoring",
          name: "LLM monitoring",
          description: "Presence in ChatGPT, Perplexity, and AI search engines",
          link: "https://gizzmo.ai/blog/llm-seo-how-to-optimize-content-for-ai-search/"
        }
      ]
    },
    "Engineering & Martech": {
      metrics: [
        {
          key: "siteSpeed",
          name: "Site speed & uptime",
          description: "Performance optimization, hosting, and caching strategies",
          link: "https://pagespeed.web.dev/"
        },
        {
          key: "cmsMaturity",
          name: "CMS/CRM maturity",
          description: "Content management system capabilities and integration",
          link: "https://www.contentful.com/resources/what-is-headless-cms/"
        },
        {
          key: "martechStack",
          name: "Martech stack",
          description: "Marketing technology integration and data flow",
          link: "https://chiefmartec.com/"
        },
        {
          key: "personalization",
          name: "Personalization readiness",
          description: "A/B testing capabilities and targeting infrastructure",
          link: "https://www.optimizely.com/why-optimizely/personalization/"
        },
        {
          key: "accessibility",
          name: "Accessibility & schema",
          description: "WCAG compliance and structured data implementation",
          link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
        }
      ]
    },
    "Campaign & Commerce": {
      metrics: [
        {
          key: "campaignTargeting",
          name: "Campaign targeting",
          description: "Audience segmentation and channel optimization",
          link: "https://www.wordstream.com/blog/ws/2021/09/08/marketing-funnel"
        },
        {
          key: "paidRoas",
          name: "Paid ROAS",
          description: "Return on ad spend and campaign efficiency metrics",
          link: "https://www.singlegrain.com/ppc/roas/"
        },
        {
          key: "socialCommerce",
          name: "Social commerce",
          description: "Instagram Shops, WhatsApp Business, and social selling",
          link: "https://www.shopify.com/blog/social-commerce"
        },
        {
          key: "retargeting",
          name: "Retargeting flows",
          description: "Email automation, ad retargeting, and CRM sequences",
          link: "https://klaviyo.com/marketing-resources/retargeting-guide"
        },
        {
          key: "influencerUgc",
          name: "Influencer/UGC",
          description: "User-generated content and influencer marketing programs",
          link: "https://later.com/blog/user-generated-content/"
        }
      ]
    },
    "LLM & AI Search Visibility": {
      metrics: [
        {
          key: "aiSearchOpt",
          name: "AI Search optimization",
          description: "Visibility in ChatGPT, Gemini, and Perplexity results",
          link: "https://searchengineland.com/how-to-optimize-your-site-for-generative-ai-search-433097"
        },
        {
          key: "semanticMarkup",
          name: "Semantic markup",
          description: "Schema.org implementation for enhanced AI understanding",
          link: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery"
        },
        {
          key: "thirdPartyCitations",
          name: "Third-party citations",
          description: "Brand mentions in forums, Quora, Reddit, and communities",
          link: "https://www.searchenginejournal.com/off-page-seo-guide/309875/"
        },
        {
          key: "promptability",
          name: "Promptability",
          description: "Likelihood of AI recommendation when users ask for solutions",
          link: "https://moz.com/blog/brand-mentions-google-ai"
        },
        {
          key: "llmVisibility",
          name: "LLM brand visibility",
          description: "Brand recall and mention frequency in AI-generated responses",
          link: "https://gizzmo.ai/blog/llm-seo-how-to-optimize-content-for-ai-search/"
        }
      ]
    }
  },
  recommendationTemplates: {
    "Digital Experience & Content": [
      "Implement comprehensive FAQ section to improve LLM-friendly structure",
      "Standardize brand voice guidelines across all social media platforms",
      "Add alt text to all images for better SEO and accessibility",
      "Diversify content formats with interactive elements and video content"
    ],
    "Data & Analytics": [
      "Set up advanced event tracking for better user journey insights",
      "Implement multi-touch attribution modeling",
      "Deploy social listening tools for brand sentiment monitoring",
      "Optimize content for AI search engine visibility"
    ],
    "Engineering & Martech": [
      "Improve site speed through image optimization and caching",
      "Implement structured data markup for better AI understanding",
      "Set up A/B testing infrastructure for personalization",
      "Ensure WCAG 2.1 AA compliance across all pages"
    ],
    "Campaign & Commerce": [
      "Develop advanced audience segmentation strategies",
      "Implement retargeting campaigns across multiple channels",
      "Set up social commerce capabilities on Instagram and Facebook",
      "Launch user-generated content campaign to increase authentic engagement"
    ],
    "LLM & AI Search Visibility": [
      "Create comprehensive knowledge base with FAQ content",
      "Implement rich schema markup for products and services",
      "Establish presence in relevant online communities and forums",
      "Optimize content to increase likelihood of AI recommendations"
    ]
  }
};

// Container ID mapping for each assessment area
const containerIdMap = {
  "Digital Experience & Content": "digital-experience-metrics",
  "Data & Analytics": "data-analytics-metrics",
  "Engineering & Martech": "engineering-martech-metrics",
  "Campaign & Commerce": "campaign-commerce-metrics",
  "LLM & AI Search Visibility": "llm-ai-metrics"
};

// Application State
let appState = {
  currentPage: 'brand-input-page',
  brandData: {},
  analysisResults: {},
  user: null,
  hasCompetitors: false
};

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  appState.currentPage = pageId;
}

// Form Validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Simulate LLM Analysis
function simulateAnalysis(brandData) {
  return new Promise((resolve) => {
    const steps = [
      'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'
    ];
    
    let currentStep = 0;
    let progress = 0;
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const interval = setInterval(() => {
      progress += Math.random() * 20 + 5;
      if (progress > 100) progress = 100;
      
      progressFill.style.width = `${progress}%`;
      progressText.textContent = `${Math.round(progress)}%`;
      
      // Update step indicators
      if (currentStep < steps.length && progress > (currentStep + 1) * 16.67) {
        document.getElementById(steps[currentStep]).classList.add('completed');
        currentStep++;
        if (currentStep < steps.length) {
          document.getElementById(steps[currentStep]).classList.add('active');
        }
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          resolve(generateAnalysisResults(brandData));
        }, 1000);
      }
    }, 300);
  });
}

// Generate Analysis Results
function generateAnalysisResults(brandData) {
  const results = {};
  
  Object.keys(assessmentData.assessmentAreas).forEach(areaName => {
    results[areaName] = {};
    const metrics = assessmentData.assessmentAreas[areaName].metrics;
    
    metrics.forEach(metric => {
      // Generate realistic scores based on industry and URL analysis
      let baseScore = Math.floor(Math.random() * 3) + 2; // 2-4 range
      
      // Adjust based on industry (Tech gets higher scores on some metrics)
      if (brandData.industry === 'Tech') {
        if (['siteSpeed', 'martechStack', 'accessibility'].includes(metric.key)) {
          baseScore = Math.min(5, baseScore + 1);
        }
      }
      
      // E-commerce gets better commerce scores
      if (brandData.industry === 'E-commerce') {
        if (['socialCommerce', 'retargeting', 'paidRoas'].includes(metric.key)) {
          baseScore = Math.min(5, baseScore + 1);
        }
      }
      
      // Generate reasoning
      const reasoningTemplates = {
        1: `Limited implementation detected for ${metric.name.toLowerCase()}. Significant improvements needed.`,
        2: `Basic ${metric.name.toLowerCase()} setup found. Several optimization opportunities available.`,
        3: `Moderate ${metric.name.toLowerCase()} implementation. Good foundation with room for enhancement.`,
        4: `Strong ${metric.name.toLowerCase()} performance. Minor optimizations could push to excellence.`,
        5: `Excellent ${metric.name.toLowerCase()} implementation. Industry best practices followed.`
      };
      
      results[areaName][metric.key] = {
        score: baseScore,
        reasoning: reasoningTemplates[baseScore]
      };
    });
  });
  
  return results;
}

// Calculate Overall Score
function calculateOverallScore(results) {
  let totalScore = 0;
  let totalMetrics = 0;
  
  Object.values(results).forEach(area => {
    Object.values(area).forEach(metric => {
      totalScore += metric.score;
      totalMetrics++;
    });
  });
  
  return Math.round((totalScore / totalMetrics) * 20); // Convert to 100-point scale
}

// Get Health Grade
function getHealthGrade(score) {
  if (score >= 80) return { grade: 'excellent', text: 'Excellent', icon: '🟢' };
  if (score >= 60) return { grade: 'average', text: 'Average', icon: '🟡' };
  return { grade: 'needs-attention', text: 'Needs Attention', icon: '🔴' };
}

// Render Report
function renderReport(brandData, results) {
  // Update brand info
  document.getElementById('report-brand-name').textContent = brandData.brandName;
  document.getElementById('report-industry').textContent = brandData.industry;
  document.getElementById('report-website').textContent = brandData.websiteUrl;
  document.getElementById('report-website').href = brandData.websiteUrl;
  document.getElementById('report-product').textContent = brandData.mainProduct;
  
  // Calculate and display overall score
  const overallScore = calculateOverallScore(results);
  const healthGrade = getHealthGrade(overallScore);
  
  document.getElementById('overall-score-number').textContent = overallScore;
  
  const gradeElement = document.getElementById('health-grade');
  gradeElement.className = `health-grade ${healthGrade.grade}`;
  gradeElement.innerHTML = `
    <span class="grade-icon">${healthGrade.icon}</span>
    <span class="grade-text">${healthGrade.text}</span>
  `;
  
  // Render assessment areas
  Object.keys(assessmentData.assessmentAreas).forEach(areaName => {
    const areaResults = results[areaName];
    const metrics = assessmentData.assessmentAreas[areaName].metrics;
    
    // Calculate area score
    const areaScore = Object.values(areaResults).reduce((sum, metric) => sum + metric.score, 0);
    
    // Update area score display
    const areaElement = document.querySelector(`[data-area="${areaName}"] .area-score-number`);
    if (areaElement) areaElement.textContent = areaScore;
    
    // Render metrics using the correct container ID
    const containerId = containerIdMap[areaName];
    const metricsContainer = document.getElementById(containerId);
    
    if (metricsContainer) {
      metricsContainer.innerHTML = metrics.map(metric => {
        const result = areaResults[metric.key];
        return `
          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-info">
                <div class="metric-name">${metric.name}</div>
                <div class="metric-description">${metric.description}</div>
              </div>
              <div class="metric-score">
                <input type="number" class="score-input" min="1" max="5" value="${result.score}" 
                       data-area="${areaName}" data-metric="${metric.key}">
                <span class="score-max">/5</span>
              </div>
            </div>
            <div class="metric-reasoning">${result.reasoning}</div>
            <div class="metric-actions">
              <button class="metric-info-btn" onclick="showToast('${result.reasoning.replace(/'/g, "\\'")}', 'info')">Why?</button>
              <a href="${metric.link}" target="_blank" class="metric-learn-btn">Learn More</a>
            </div>
          </div>
        `;
      }).join('');
    }
  });
  
  // Add score input listeners after rendering
  setTimeout(() => {
    document.querySelectorAll('.score-input').forEach(input => {
      input.addEventListener('change', updateMetricScore);
      input.addEventListener('input', updateMetricScore);
    });
  }, 100);
  
  // Generate recommendations
  generateRecommendations(results);
  
  // Show competitor analysis if competitors were provided
  if (appState.hasCompetitors) {
    showCompetitorAnalysis(brandData);
  }
}

// Update Metric Score
function updateMetricScore(event) {
  const input = event.target;
  const area = input.dataset.area;
  const metric = input.dataset.metric;
  const newScore = parseInt(input.value);
  
  if (newScore >= 1 && newScore <= 5) {
    appState.analysisResults[area][metric].score = newScore;
    
    // Update reasoning based on new score
    const reasoningTemplates = {
      1: `Limited implementation detected for ${metric.toLowerCase()}. Significant improvements needed.`,
      2: `Basic ${metric.toLowerCase()} setup found. Several optimization opportunities available.`,
      3: `Moderate ${metric.toLowerCase()} implementation. Good foundation with room for enhancement.`,
      4: `Strong ${metric.toLowerCase()} performance. Minor optimizations could push to excellence.`,
      5: `Excellent ${metric.toLowerCase()} implementation. Industry best practices followed.`
    };
    
    appState.analysisResults[area][metric].reasoning = reasoningTemplates[newScore];
    
    // Update the reasoning display
    const reasoningElement = input.closest('.metric-card').querySelector('.metric-reasoning');
    if (reasoningElement) {
      reasoningElement.textContent = reasoningTemplates[newScore];
    }
    
    // Recalculate area score
    const areaScore = Object.values(appState.analysisResults[area]).reduce((sum, m) => sum + m.score, 0);
    const areaScoreElement = document.querySelector(`[data-area="${area}"] .area-score-number`);
    if (areaScoreElement) areaScoreElement.textContent = areaScore;
    
    // Recalculate overall score
    const overallScore = calculateOverallScore(appState.analysisResults);
    const healthGrade = getHealthGrade(overallScore);
    
    document.getElementById('overall-score-number').textContent = overallScore;
    
    const gradeElement = document.getElementById('health-grade');
    gradeElement.className = `health-grade ${healthGrade.grade}`;
    gradeElement.innerHTML = `
      <span class="grade-icon">${healthGrade.icon}</span>
      <span class="grade-text">${healthGrade.text}</span>
    `;
    
    showToast('Score updated successfully', 'success');
  } else {
    // Reset to previous valid value
    input.value = appState.analysisResults[area][metric].score;
    showToast('Please enter a score between 1 and 5', 'error');
  }
}

// Generate Recommendations
function generateRecommendations(results) {
  const recommendations = [];
  
  Object.keys(results).forEach(areaName => {
    const areaResults = results[areaName];
    const templates = assessmentData.recommendationTemplates[areaName];
    
    // Find metrics with low scores
    Object.keys(areaResults).forEach(metricKey => {
      if (areaResults[metricKey].score <= 3) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        recommendations.push({
          title: template,
          area: areaName,
          priority: areaResults[metricKey].score <= 2 ? 'high' : 'medium',
          description: `Based on your ${areaName.toLowerCase()} analysis, this improvement could significantly boost your digital performance.`
        });
      }
    });
  });
  
  // Add some general recommendations
  recommendations.push({
    title: "Establish regular digital health monitoring",
    area: "General",
    priority: 'low',
    description: "Schedule monthly reviews of your digital performance metrics to maintain continuous improvement."
  });
  
  // Render recommendations
  const recommendationsList = document.getElementById('recommendations-list');
  recommendationsList.innerHTML = recommendations.slice(0, 6).map(rec => `
    <div class="recommendation-item">
      <div class="recommendation-priority ${rec.priority}">${rec.priority.toUpperCase()}</div>
      <div class="recommendation-content">
        <div class="recommendation-title">${rec.title}</div>
        <div class="recommendation-description">${rec.description}</div>
      </div>
    </div>
  `).join('');
}

// Show Competitor Analysis
function showCompetitorAnalysis(brandData) {
  const competitorSection = document.getElementById('competitor-analysis');
  competitorSection.style.display = 'block';
  
  const competitors = [brandData.competitor1, brandData.competitor2, brandData.competitor3]
    .filter(url => url && url.trim());
  
  const comparisonContainer = document.getElementById('competitor-comparison');
  
  // Generate mock comparison data
  const metrics = ['Overall Score', 'SEO Performance', 'Social Presence', 'Site Speed', 'Content Quality'];
  const userScores = [75, 70, 65, 85, 80]; // Mock user scores
  
  comparisonContainer.innerHTML = metrics.map((metric, index) => {
    const userScore = userScores[index];
    const competitorAvg = Math.max(40, userScore - Math.floor(Math.random() * 20) + Math.floor(Math.random() * 15));
    
    return `
      <div class="comparison-item">
        <div class="comparison-label">${metric}</div>
        <div class="comparison-bar">
          <div class="comparison-fill" style="width: ${userScore}%"></div>
          <div class="comparison-score">${userScore}/100</div>
        </div>
      </div>
    `;
  }).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Brand form submission
  document.getElementById('brand-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const brandData = Object.fromEntries(formData.entries());
    
    // Validate required fields
    if (!brandData.brandName || !brandData.websiteUrl || !brandData.industry || !brandData.mainProduct) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    
    // Validate URL format
    if (!validateURL(brandData.websiteUrl)) {
      showToast('Please enter a valid website URL', 'error');
      return;
    }
    
    appState.brandData = brandData;
    appState.hasCompetitors = !!(brandData.competitor1 || brandData.competitor2 || brandData.competitor3);
    
    showPage('loading-page');
    
    try {
      const results = await simulateAnalysis(brandData);
      appState.analysisResults = results;
      showPage('auth-page');
    } catch (error) {
      showToast('Analysis failed. Please try again.', 'error');
      showPage('brand-input-page');
    }
  });
  
  // Auth tab switching
  document.getElementById('signup-tab').addEventListener('click', function() {
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    
    this.classList.add('active');
    document.getElementById('signup-form').classList.add('active');
  });
  
  document.getElementById('login-tab').addEventListener('click', function() {
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    
    this.classList.add('active');
    document.getElementById('login-form').classList.add('active');
  });
  
  // Auth form submissions
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    
    if (!validateEmail(userData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    appState.user = userData;
    showToast('Account created successfully!', 'success');
    showPage('report-page');
    renderReport(appState.brandData, appState.analysisResults);
  });
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    
    if (!validateEmail(userData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    appState.user = { email: userData.email };
    showToast('Logged in successfully!', 'success');
    showPage('report-page');
    renderReport(appState.brandData, appState.analysisResults);
  });
  
  document.getElementById('continue-guest').addEventListener('click', function() {
    showPage('report-page');
    renderReport(appState.brandData, appState.analysisResults);
  });
  
  // Collapsible assessment areas
  document.addEventListener('click', function(e) {
    if (e.target.closest('[data-toggle="collapse"]')) {
      const header = e.target.closest('[data-toggle="collapse"]');
      const area = header.closest('.assessment-area');
      area.classList.toggle('expanded');
    }
  });
  
  // Report actions
  document.getElementById('share-report').addEventListener('click', function() {
    document.getElementById('share-modal').classList.add('active');
    
    // Generate shareable link
    const shareUrl = `${window.location.origin}${window.location.pathname}?report=${encodeURIComponent(appState.brandData.brandName)}`;
    document.getElementById('share-link-input').value = shareUrl;
  });
  
  document.getElementById('download-pdf').addEventListener('click', function() {
    showToast('PDF download started', 'success');
    // Simulate PDF download
    setTimeout(() => {
      showToast('Report downloaded successfully', 'success');
    }, 2000);
  });
  
  document.getElementById('email-report').addEventListener('click', function() {
    document.getElementById('email-modal').classList.add('active');
  });
  
  // Share modal actions
  document.getElementById('copy-link').addEventListener('click', function() {
    const shareUrl = `${window.location.origin}${window.location.pathname}?report=${encodeURIComponent(appState.brandData.brandName)}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('Report link copied to clipboard', 'success');
    });
  });
  
  document.getElementById('share-linkedin').addEventListener('click', function() {
    const text = `Just completed a comprehensive Digital Health Check for ${appState.brandData.brandName}. Great insights into our digital performance!`;
    const url = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
  
  document.getElementById('share-twitter').addEventListener('click', function() {
    const text = `Just completed a Digital Health Check for ${appState.brandData.brandName}. Check out our analysis! 🚀`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  });
  
  document.getElementById('copy-share-link').addEventListener('click', function() {
    const input = document.getElementById('share-link-input');
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
      showToast('Link copied to clipboard', 'success');
    });
  });
  
  // Email form submission
  document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const emailData = Object.fromEntries(formData.entries());
    
    if (!validateEmail(emailData['email-to'])) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    showToast('Report sent successfully!', 'success');
    document.getElementById('email-modal').classList.remove('active');
    e.target.reset();
  });
  
  // Modal close functionality
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('active');
    });
  });
  
  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
  
  // Initialize first assessment area as expanded
  setTimeout(() => {
    const firstArea = document.querySelector('.assessment-area');
    if (firstArea) {
      firstArea.classList.add('expanded');
    }
  }, 100);
});