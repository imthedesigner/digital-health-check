// Digital Health Check – Single-file React app
/* global React, ReactDOM, ReactRouterDOM, html2pdf */
const { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } = ReactRouterDOM;

/****************** Context with Hash Persistence (no localStorage) ******************/
const ReportContext = React.createContext();

const emptyBrand = {
  name: '',
  website: '',
  industry: '',
  product: '',
  socials: { instagram: '', linkedin: '', youtube: '', x: '' },
  wantsEmail: false,
};

const initialState = {
  brandInput: emptyBrand,
  signupInfo: { name: '', email: '', password: '' },
  scores: {},
};

const loadStateFromHash = () => {
  if (window.location.hash.startsWith('#state=')) {
    try {
      const json = decodeURIComponent(window.location.hash.slice(7));
      return JSON.parse(json);
    } catch (e) {
      console.warn('Failed to parse state from hash', e);
    }
  }
  return initialState;
};

const ReportProvider = ({ children }) => {
  const [state, _setState] = React.useState(loadStateFromHash());

  // Persist to hash
  React.useEffect(() => {
    const encoded = encodeURIComponent(JSON.stringify(state));
    window.location.hash = `state=${encoded}`;
  }, [state]);

  const setState = (fn) => _setState((prev) => {
    const newState = typeof fn === 'function' ? fn(prev) : fn;
    return newState;
  });

  const updateBrand = (brand) => setState((s) => ({ ...s, brandInput: brand }));
  const updateSignup = (info) => setState((s) => ({ ...s, signupInfo: info }));
  const updateScore = (sectionId, metricName, value) => {
    setState((s) => ({
      ...s,
      scores: {
        ...s.scores,
        [sectionId]: { ...(s.scores[sectionId] || {}), [metricName]: value },
      },
    }));
  };

  return React.createElement(ReportContext.Provider, { value: { state, updateBrand, updateSignup, updateScore } }, children);
};

const useReport = () => React.useContext(ReportContext);

/****************** Static Data ******************/
const DATA = {"sections":[{"id":"digital_experience","title":"Digital Experience & Content","metrics":[{"name":"Brand voice consistency","description":"Consistency in tone across web and social","link":"https://www.nngroup.com/articles/brand-tone-voice/"},{"name":"UX/UI quality","description":"Visual and navigational coherence","link":"https://lawsofux.com/"},{"name":"SEO optimization","description":"Meta tags, alt texts, internal linking","link":"https://moz.com/beginners-guide-to-seo"},{"name":"Content diversity","description":"Blogs, videos, reels, stories, etc.","link":"https://contentmarketinginstitute.com/"},{"name":"Social media cadence","description":"Posting frequency, engagement, presence","link":"https://sproutsocial.com/insights/social-media-frequency/"},{"name":"LLM-friendly structure","description":"FAQ, Q&A, semantic structure for AI answers","link":"https://www.searchenginejournal.com/optimize-for-llms/506689/"}]},{"id":"data_analytics","title":"Data & Analytics","metrics":[{"name":"GA4 setup","description":"Tagging, goals, and funnel tracking","link":"https://www.analyticsmania.com/post/ga4-beginner-guide/"},{"name":"Event tracking","description":"Custom events & user interactions","link":"https://support.google.com/analytics/answer/9267735?hl=en"},{"name":"Attribution modeling","description":"Multi-touch journey tracking","link":"https://www.optimizely.com/optimization-glossary/attribution-modeling/"},{"name":"Social listening","description":"Monitoring brand sentiment & mentions","link":"https://blog.hootsuite.com/social-listening-business/"},{"name":"LLM monitoring","description":"Presence in ChatGPT, Perplexity, SGE","link":"https://gizzmo.ai/blog/llm-seo-how-to-optimize-content-for-ai-search/"}]},{"id":"engineering_martech","title":"Engineering & Martech","metrics":[{"name":"Site speed & uptime","description":"Performance, hosting, caching","link":"https://pagespeed.web.dev/"},{"name":"CMS/CRM maturity","description":"Modular, headless, multilingual support","link":"https://www.contentful.com/resources/what-is-headless-cms/"},{"name":"Martech stack","description":"CDP, ESP, DAM integrations","link":"https://chiefmartec.com/"},{"name":"Personalization readiness","description":"AB testing, targeting rules, CMS modules","link":"https://www.optimizely.com/why-optimizely/personalization/"},{"name":"Accessibility & schema","description":"WCAG, structured data for AI/SEO","link":"https://www.w3.org/WAI/fundamentals/accessibility-intro/"}]},{"id":"campaign_commerce","title":"Campaign & Commerce","metrics":[{"name":"Campaign targeting","description":"Audience, channel mix, funnel stage","link":"https://www.wordstream.com/blog/ws/2021/09/08/marketing-funnel"},{"name":"Paid ROAS","description":"Campaign return efficiency","link":"https://www.singlegrain.com/ppc/roas/"},{"name":"Social commerce","description":"Instagram Shops, WhatsApp Business","link":"https://www.shopify.com/blog/social-commerce"},{"name":"Retargeting flows","description":"Email, ads, CRM segments","link":"https://klaviyo.com/marketing-resources/retargeting-guide"},{"name":"Influencer/UGC","description":"Community-led marketing","link":"https://later.com/blog/user-generated-content/"}]},{"id":"llm_ai","title":"LLM & AI Search Visibility","metrics":[{"name":"AI Search Optimization","description":"Appears in ChatGPT, Gemini, Perplexity","link":"https://searchengineland.com/how-to-optimize-your-site-for-generative-ai-search-433097"},{"name":"Semantic markup","description":"FAQ schema, HowTo, Product schema","link":"https://developers.google.com/search/docs/appearance/structured-data/search-gallery"},{"name":"Third-party citations","description":"Mentions in Quora, Reddit, forums","link":"https://www.searchenginejournal.com/off-page-seo-guide/309875/"},{"name":"Promptability","description":"Can AI recommend your brand when asked","link":"https://moz.com/blog/brand-mentions-google-ai"},{"name":"LLM brand visibility","description":"Brand recall in AI answers (manual check)","link":"https://gizzmo.ai/blog/llm-seo-how-to-optimize-content-for-ai-search/"}]}],"scoreScale":5,"healthGradeRules":{"excellent":80,"average":50}};
const SECTIONS = DATA.sections;
const SCORE_SCALE = DATA.scoreScale;

/****************** Utility ******************/
function calcTotals(scores) {
  let total = 0;
  let metricCount = 0;
  SECTIONS.forEach((section) => {
    section.metrics.forEach((m) => {
      const val = (scores[section.id] && scores[section.id][m.name]) || 0;
      total += val;
      metricCount += 1;
    });
  });
  const percentage = metricCount ? Math.round((total / (metricCount * SCORE_SCALE)) * 100) : 0;
  let grade = '🔴 Needs Attention';
  if (percentage >= DATA.healthGradeRules.excellent) grade = '🟢 Excellent';
  else if (percentage >= DATA.healthGradeRules.average) grade = '🟡 Average';
  return { total, percentage, grade };
}

function useToast() {
  const [msg, setMsg] = React.useState('');
  const show = React.useCallback((text) => {
    setMsg(text);
    setTimeout(() => setMsg(''), 3000);
  }, []);
  const toastEl = msg ? React.createElement('div', { className: 'toast', role: 'status' }, msg) : null;
  return [toastEl, show];
}

/****************** UI Components ******************/
const Stars = ({ value, onChange }) => {
  return React.createElement('div', { className: 'flex gap-4' }, [...Array(SCORE_SCALE)].map((_, idx) => {
    const i = idx + 1;
    return React.createElement('span', {
      key: i,
      className: `star ${i <= value ? 'filled' : ''}`,
      role: 'button',
      tabIndex: 0,
      'aria-label': `${i} star`,
      onClick: () => onChange(i),
      onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') onChange(i); },
    }, '★');
  }));
};

const MetricRow = ({ sectionId, metric, score }) => {
  const { updateScore } = useReport();
  return React.createElement('div', { className: 'metric-row' },
    React.createElement('div', { className: 'metric-label' }, metric.name,
      ' ', React.createElement('a', { href: metric.link, target: '_blank', rel: 'noopener noreferrer' }, '🔗')
    ),
    React.createElement('span', { title: metric.description, style: { cursor: 'help' } }, 'ℹ️'),
    React.createElement(Stars, { value: score, onChange: (v) => updateScore(sectionId, metric.name, v) }),
  );
};

const SectionCard = ({ section }) => {
  const { state } = useReport();
  const [open, setOpen] = React.useState(false);
  const subtotal = section.metrics.reduce((sum, m) => {
    const val = (state.scores[section.id] && state.scores[section.id][m.name]) || 0;
    return sum + val;
  }, 0);

  return React.createElement('div', { className: 'section-card' },
    React.createElement('div', {
      className: 'section-header', role: 'button', tabIndex: 0,
      onClick: () => setOpen(!open),
      onKeyDown: (e) => { if (e.key === 'Enter') setOpen(!open); },
    },
      React.createElement('span', null, section.title),
      React.createElement('span', null, `${subtotal}/${section.metrics.length * SCORE_SCALE}`),
    ),
    open && React.createElement('div', { className: 'section-body' },
      section.metrics.map((m) => React.createElement(MetricRow, {
        key: m.name,
        sectionId: section.id,
        metric: m,
        score: (state.scores[section.id] && state.scores[section.id][m.name]) || 0,
      }))
    )
  );
};

const SummaryBox = () => {
  const { state } = useReport();
  const totals = calcTotals(state.scores);
  const [recommendation, setRecommendation] = React.useState('Consider improving SEO and diversifying content formats.');
  return React.createElement('div', {
    className: 'card mb-8',
    style: { padding: '16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' },
  },
    React.createElement('h3', null, `Overall Score: ${totals.percentage}/100 – ${totals.grade}`),
    React.createElement('textarea', {
      className: 'form-control mt-8',
      rows: 3,
      value: recommendation,
      onChange: (e) => setRecommendation(e.target.value),
    })
  );
};

/****************** Pages ******************/
const BrandInputPage = () => {
  const { state, updateBrand } = useReport();
  const navigate = useNavigate();
  const [form, setForm] = React.useState(state.brandInput);
  const [errors, setErrors] = React.useState({});
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('social_')) {
      const key = name.split('_')[1];
      setForm((f) => ({ ...f, socials: { ...f.socials, [key]: value } }));
    } else if (name === 'wantsEmail') setForm((f) => ({ ...f, wantsEmail: checked }));
    else setForm((f) => ({ ...f, [name]: value }));
  };
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!/^https?:\/\//i.test(form.website)) errs.website = 'Valid URL required';
    return errs;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) {
      updateBrand(form);
      navigate(form.wantsEmail ? '/signup' : '/report');
    }
  };
  return React.createElement('div', { className: 'page-wrapper' },
    React.createElement('h2', null, 'Brand Details'),
    React.createElement('form', { onSubmit, className: 'flex flex-col gap-16' },
      ['name', 'website', 'product'].map((field) => (
        React.createElement('div', { className: 'form-group', key: field },
          React.createElement('label', { className: 'form-label', htmlFor: field }, field.charAt(0).toUpperCase() + field.slice(1)),
          React.createElement('input', {
            id: field, name: field, className: 'form-control', value: form[field] || '',
            onChange: onChange, type: field === 'website' ? 'url' : 'text',
          }),
          errors[field] && React.createElement('div', { className: 'error-text' }, errors[field])
        )
      )),
      React.createElement('div', { className: 'form-group' },
        React.createElement('label', { className: 'form-label', htmlFor: 'industry' }, 'Industry'),
        React.createElement('select', { id: 'industry', name: 'industry', className: 'form-control', value: form.industry, onChange: onChange },
          React.createElement('option', { value: '' }, 'Select'),
          ['Retail', 'Finance', 'Healthcare', 'Technology'].map((ind) => React.createElement('option', { key: ind, value: ind }, ind))
        )
      ),
      React.createElement('h4', null, 'Social Profiles'),
      ['instagram', 'linkedin', 'youtube', 'x'].map((s) => React.createElement('div', { className: 'form-group', key: s },
        React.createElement('label', { className: 'form-label', htmlFor: `social_${s}` }, s.charAt(0).toUpperCase() + s.slice(1)),
        React.createElement('input', {
          id: `social_${s}`, name: `social_${s}`, className: 'form-control', type: 'url',
          value: form.socials[s] || '', onChange: onChange,
        })
      )),
      React.createElement('div', { className: 'flex items-center gap-8' },
        React.createElement('input', { id: 'wantsEmail', name: 'wantsEmail', type: 'checkbox', checked: form.wantsEmail, onChange: onChange }),
        React.createElement('label', { htmlFor: 'wantsEmail' }, 'Email me the report')
      ),
      React.createElement('button', { className: 'btn btn--primary', type: 'submit' }, 'Generate Health Check Report')
    )
  );
};

const SignupPage = () => {
  const { state, updateSignup } = useReport();
  const [form, setForm] = React.useState(state.signupInfo);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const validate = () => {
    const errs = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email';
    if (form.password.length < 6) errs.password = 'Min 6 chars';
    if (!form.name.trim()) errs.name = 'Name required';
    return errs;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        updateSignup(form);
        navigate('/report');
      }, 800);
    }
  };
  return React.createElement('div', { className: 'page-wrapper' },
    React.createElement('div', { className: 'flex gap-8 mb-8' },
      React.createElement('button', { className: 'btn btn--secondary', onClick: () => {} }, 'Signup')
    ),
    React.createElement('p', null, 'We’ll email your report once it’s generated'),
    loading ? React.createElement('p', null, 'Processing...') : React.createElement('form', { onSubmit, className: 'flex flex-col gap-16 mt-8' },
      ['name', 'email', 'password'].map((f) => React.createElement('div', { className: 'form-group', key: f },
        React.createElement('label', { className: 'form-label', htmlFor: f }, f.charAt(0).toUpperCase() + f.slice(1)),
        React.createElement('input', {
          id: f, name: f, className: 'form-control', type: f === 'password' ? 'password' : f === 'email' ? 'email' : 'text',
          value: form[f], onChange: handleChange,
        }),
        errors[f] && React.createElement('div', { className: 'error-text' }, errors[f])
      )),
      React.createElement('button', { className: 'btn btn--primary', type: 'submit' }, 'Continue')
    )
  );
};

const ReportPage = () => {
  const { state } = useReport();
  const navigate = useNavigate();
  const [toastEl, showToast] = useToast();

  React.useEffect(() => { if (!state.brandInput.name) navigate('/'); }, [state.brandInput, navigate]);

  const copyLink = () => { navigator.clipboard.writeText(window.location.href); showToast('Link copied!'); };
  const downloadPDF = () => { const el = document.getElementById('report-wrapper'); html2pdf().from(el).save('digital-health-check.pdf'); };
  const shareLinkedIn = () => { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank'); };

  return React.createElement('div', null,
    React.createElement('div', { className: 'header-sticky' },
      React.createElement('h4', null, `Digital Health Check Report for ${state.brandInput.name}`),
      React.createElement('div', { className: 'flex gap-8' },
        React.createElement('button', { className: 'header-btn', onClick: copyLink }, 'Copy Link'),
        React.createElement('button', { className: 'header-btn', onClick: downloadPDF }, 'Download PDF'),
        React.createElement('button', { className: 'header-btn', onClick: shareLinkedIn }, 'Share LinkedIn')
      )
    ),
    React.createElement('div', { className: 'page-wrapper', id: 'report-wrapper' },
      React.createElement(SummaryBox, null),
      SECTIONS.map((sec) => React.createElement(SectionCard, { key: sec.id, section: sec }))
    ),
    toastEl
  );
};

/****************** Routing ******************/
const AppRoutes = () => React.createElement(Routes, null,
  React.createElement(Route, { path: '/', element: React.createElement(BrandInputPage, null) }),
  React.createElement(Route, { path: '/signup', element: React.createElement(SignupPage, null) }),
  React.createElement(Route, { path: '/report', element: React.createElement(ReportPage, null) }),
  React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/' }) }),
);

const Root = () => React.createElement(ReportProvider, null, React.createElement(BrowserRouter, null, React.createElement(AppRoutes, null)));

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Root, null));