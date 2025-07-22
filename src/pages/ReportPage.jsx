import React, { useEffect, useState } from 'react'

function ReportPage() {
  const [report, setReport] = useState(null)

  useEffect(() => {
    const brandData = JSON.parse(localStorage.getItem('brandData'))

    async function fetchReport() {
      try {
        const response = await fetch('https://api.digital-health-check.ai/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(brandData)
        })

        const data = await response.json()
        setReport(data)
      } catch (error) {
        console.error('Failed to fetch report:', error)
        setReport({ brand: brandData?.brand || 'Unknown', sections: [] })
      }
    }

    if (brandData) {
      fetchReport()
    } else {
      setReport({ brand: 'Unknown', sections: [] })
    }
  }, [])

  if (!report) return <p className='p-4'>Generating report...</p>

  const handleExport = async (format) => {
    const res = await fetch(`https://api.digital-health-check.ai/export?format=${format}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    })
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `digital-health-report.${format}`
    a.click()
  }

  return (
    <div className='p-4'>
      <h2>Digital Health Report for {report.brand}</h2>
      {report.sections.map((section, index) => (
        <div key={index} className='mb-6'>
          <h3>{section.title} ({section.score}/5)</h3>
          <p>{section.summary}</p>
          <ul>
            {section.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className='mt-8 space-x-4'>
        <button onClick={() => handleExport('pdf')}>Export as PDF</button>
        <button onClick={() => handleExport('ppt')}>Export as PPT</button>
        <button onClick={() => handleExport('html')}>Get Shareable Link</button>
      </div>
    </div>
  )
}

export default ReportPage
