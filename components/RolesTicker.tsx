'use client'

import { useEffect, useRef, useState } from 'react'

const ROLES = [
  { label: 'AI Engineer',            dot: 'orange' },
  { label: 'Full Stack Developer',   dot: 'blue'   },
  { label: 'React Specialist',       dot: 'red'    },
  { label: 'Node.js Developer',      dot: 'orange' },
  { label: 'ML Enthusiast',          dot: 'blue'   },
  { label: 'Cloud Architect',        dot: 'red'    },
  { label: 'UI/UX Craftsman',        dot: 'orange' },
  { label: 'DevOps Engineer',        dot: 'blue'   },
  { label: 'Competitive Programmer', dot: 'red'    },
  { label: 'Freelance Developer',    dot: 'orange' },
]

// Duplicate for seamless loop
const TICKER_ITEMS = [...ROLES, ...ROLES]

export default function RolesTicker() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const contactEl = document.getElementById('contact')
    if (!contactEl) return

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(contactEl)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`roles-ticker-bar${hidden ? ' hidden-ticker' : ''}`}>
      <div className="roles-ticker-track">
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className="roles-ticker-item">
            <span className={`ticker-dot ${item.dot}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
