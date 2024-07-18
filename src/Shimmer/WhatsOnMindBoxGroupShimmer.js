import React from 'react'
import WhatsOnMindBoxShimmer from './WhatsOnMindBoxShimmer'

const WhatsOnMindBoxGroupShimmer = () => {
    const array = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex gap-2">
    {
        array.map(item => <WhatsOnMindBoxShimmer key={item} />)
    }
</div>
  )
}

export default WhatsOnMindBoxGroupShimmer;