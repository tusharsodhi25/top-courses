
import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {
  if (!course || !course.image || !course.image.url) {
    return null;
  }

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      // already liked, removing
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // not liked, adding
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  };

  return (
    <div className="w-[300px] bg-[#28283d] bg-opacity-80 rounded-md overflow-hidden border">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-[1.2rem] leading-6">{course.title}</p>
        <p className="mt-2 text-white text-sm">
          {course.description && course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default Card;




