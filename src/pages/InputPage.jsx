import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function InputPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    brand: '',
    website: '',
    industry: '',
    social: { instagram: '', linkedin: '', youtube: '', x: '' },
    product: '',
    competitors: ['']
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('brandData', JSON.stringify(formData))
    navigate('/report')
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 space-y-4'>
      <input type='text' placeholder='Brand Name' value={formData.brand} onChange={e => setFormData({ ...formData, brand: e.target.value })} />
      <input type='url' placeholder='Website URL' value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} />
      <input type='text' placeholder='Industry' value={formData.industry} onChange={e => setFormData({ ...formData, industry: e.target.value })} />
      <input type='text' placeholder='Instagram' onChange={e => setFormData({ ...formData, social: { ...formData.social, instagram: e.target.value } })} />
      <input type='text' placeholder='LinkedIn' onChange={e => setFormData({ ...formData, social: { ...formData.social, linkedin: e.target.value } })} />
      <input type='text' placeholder='YouTube' onChange={e => setFormData({ ...formData, social: { ...formData.social, youtube: e.target.value } })} />
      <input type='text' placeholder='X (Twitter)' onChange={e => setFormData({ ...formData, social: { ...formData.social, x: e.target.value } })} />
      <input type='text' placeholder='Main Product/Service' value={formData.product} onChange={e => setFormData({ ...formData, product: e.target.value })} />
      <input type='text' placeholder='Competitor Brand/Websites' value={formData.competitors[0]} onChange={e => setFormData({ ...formData, competitors: [e.target.value] })} />
      <button type='submit'>Generate Report</button>
    </form>
  )
}

export default InputPage
