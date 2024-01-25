import React from 'react'
import { CourseList } from '../../helpers/CourseList';
import CourseItem from '../CourseItem';
import '../styles/Course.css';
function Education() {
  return (
    <div className='course'>
      <h1 className='courseTitle'>Eğitim Kataloğumuz</h1>
      <div className='courseList'>
        {CourseList.map((menuItem,key)=>{
          return <CourseItem key = {key} image={menuItem.image} 
            name={menuItem.name} price={menuItem.price} 
            instructor={menuItem.instructor} courseType={menuItem.courseType} />
      })}
      </div>
        

      
    </div>
    
  )
}

export default Education
