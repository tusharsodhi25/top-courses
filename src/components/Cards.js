
import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category.toLowerCase() === "all") { 
      let allCourses = [];

      if (courses) {
        Object.values(courses).forEach((courseCategory) => {
          if (Array.isArray(courseCategory)) {
            courseCategory.forEach((course) => {
              allCourses.push(course);
            });
          }
        });
      }

      return allCourses;

    } else {

      return courses[category] ? courses[category] : [];
    }
  };

  const courseList = getCourses();

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {courseList.length > 0 ? (
        courseList.map((course, index) => (
          <Card
            key={index}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default Cards;














