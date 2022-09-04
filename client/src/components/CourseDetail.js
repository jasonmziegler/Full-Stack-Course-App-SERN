import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const axios = require('axios');

/// NEED to Pass details as props to update course to display already gathered info from API

const CourseDetail = () => {
        const params = useParams();
        console.log("Params", params);
        const [course, setCourse] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

        function fetchCourseDetailsHandler() {
            setIsLoading(true);
            setError(null);
            axios.get(`http://localhost:5000/api/courses/${params.id}`)
            .then( (response) => {
                // handle success
                console.log(response);
                setCourse(response.data);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                setError(error);
            })
            .then(function () {
                setIsLoading(false);
            });

        }
        //fetch data from API with Axios
        useEffect( () => {
            console.log('UseEffect');
            fetchCourseDetailsHandler();
        }, []);
        
        return (
            <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`update`}>Update Course</Link>
                    <button className="button" >Delete Course</button>
                <Link className="button button-secondary" to={'/'}>Return to List</Link>
                </div>
            </div>
            
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">
                                Course
                            </h3>
                            <h4 className="course--name">{ !isLoading && !error && course.title}
                                { isLoading && <p>Loading...</p>}</h4>
                            <p>By { !isLoading && !error && course.userId}
                                { isLoading && <p>Loading...</p>}</p>

                            <p>{ !isLoading && !error && course.description}
                                { isLoading && <p>Loading...</p>}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{ !isLoading && !error && course.estimatedTime}
                                { isLoading && <p>Loading...</p>}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                            { !isLoading && !error && course.materialsNeeded}
                                { isLoading && <p>Loading...</p>}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
        )
    }

export default CourseDetail;