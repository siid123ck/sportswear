import React from 'react'

export default function RatingStar({rating}) {
    return (
        <div className="rating_star">
        <ion-icon className="icon-star"
         name={rating >=1? 'star'
         :rating >=0.5? 'star-half'
         :'star-outline'
         }>      
          </ion-icon>  
        <ion-icon className="icon-star"
         name={rating >=2? 'star'
         :rating >=1.5? 'star-half'
         :'star-outline'
         }>      
          </ion-icon>  
        <ion-icon className="icon-star"
         name={rating >=3? 'star'
         :rating >=2.5? 'star-half'
         :'star-outline'
         }>      
          </ion-icon>  
        <ion-icon className="icon-star"
         name={rating >=4? 'star'
         :rating >=3.5? 'star-half'
         :'star-outline'
         }>      
          </ion-icon>  
        <ion-icon className="icon-star"
         name={rating >=5? 'star'
         :rating >=4.5? 'star-half'
         :'star-outline'
         }>      
          </ion-icon> 
          {rating} 
        </div>
    )
}
