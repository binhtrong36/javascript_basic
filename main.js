// 4 Fetch

var courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(function (courses) {
        // console.log(courses);
        renderCourses(courses);
    });
}

start();

// get data
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    // block dùng để render ra
    var listCoursesBlock = document.querySelector("#list-courses");
}
