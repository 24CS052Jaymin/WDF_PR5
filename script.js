studentsJSON = '[{"name" : "Jaymin" , "Dept" : "CSE", "year" : "2nd", "rollno" : "24CS052"},{"name" : "John" , "Dept" : "ECE", "year" : "2nd", "rollno" : "24EC053"},{"name" : "Doe" , "Dept" : "ME", "year" : "2nd", "rollno" : "24ME054"},{ "name" : "Jane", "Dept" : "CSE", "year" : "2nd", "rollno" : "24CS055" },{ "name" : "Smith", "Dept" : "ECE", "year" : "2nd", "rollno" : "24EC056" },{ "name" : "Alex", "Dept" : "ME", "year" : "2nd", "rollno" : "24ME057" },{ "name" : "Mike", "Dept" : "CSE", "year" : "2nd", "rollno" : "24CS058" },{ "name" : "Lisa", "Dept" : "ECE", "year" : "2nd", "rollno" : "24EC059" },{ "name" : "Tom", "Dept" : "ME", "year" : "2nd", "rollno" : "24ME060" },{ "name" : "Anna", "Dept" : "CSE", "year" : "2nd", "rollno" : "24CS061" },{ "name" : "Bob", "Dept" : "ECE", "year" : "2nd", "rollno" : "24EC062" },{ "name" : "Charlie", "Dept" : "ME", "year" : "2nd", "rollno" : "24ME063" }]'

EventJSON = '[{"Event-Name" : "Robofest" , "Date" : "15 August"}, {"Event-Name" : "Robofest1.0" , "Date" : "16 August"}, {"Event-Name" : "Robofest2.0" , "Date" : "17 August"}, {"Event-Name" : "Robofest3.0" , "Date" : "18 August"}, {"Event-Name" : "Robofest4.0" , "Date" : "19 August"}, {"Event-Name" : "Robofest5.0" , "Date" : "20 August"}, {"Event-Name" : "Robofest6.0" , "Date" : "21 August"}, {"Event-Name" : "Robofest7.0" , "Date" : "22 August"}, {"Event-Name" : "Robofest8.0" , "Date" : "23 August"}, {"Event-Name" : "Robofest9.0" , "Date" : "24 August"}, {"Event-Name" : "Robofest10.0" , "Date" : "25 August"}, {"Event-Name" : "Robofest11.0" , "Date" : "26 August"}, {"Event-Name" : "Robofest12.0" , "Date" : "27 August"}, {"Event-Name" : "Robofest13.0" , "Date" : "28 August"}, {"Event-Name" : "Robofest14.0" , "Date" : "29 August"}, {"Event-Name" : "Robofest15.0" , "Date" : "30 August"} ,{"Event-Name" : "Robofest16.0" , "Date" : "31 August"},{"Event-Name" : "Robofest17.0" , "Date" : "32 August"}]'

const students = JSON.parse(studentsJSON)
let currentPage = 1
const itemsPerPage = 2
const studentContainer = document.getElementById('student-container')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

function pagination(students, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return students.slice(startIndex, endIndex)
}

function studentCard(student){
    const card = document.createElement('div')
    card.className = 'student-card' 
    card.innerHTML = `
        <h1>${student.name}</h1>
        Department : <h3>${student.Dept}</h3>
        Year : <h3>${student.year}</h3>
        Roll No : <h3>${student.rollno}</h3>
    `
    return card
}

next.addEventListener('click', () => {
    if ((currentPage * itemsPerPage) < students.length) {
        currentPage++
        renderStudents()
    }
    else {
        currentPage = 1
        renderStudents()
    }
})

prev.addEventListener('click', () => {
    if ((currentPage - 1) * itemsPerPage > 0) {
        currentPage--
        renderStudents()
    }
})
function renderStudents() {
    studentContainer.innerHTML = ''
    const paginatedStudents = pagination(students, currentPage, itemsPerPage)
    paginatedStudents.forEach(student => {
        const card = studentCard(student)
        studentContainer.appendChild(card)
    })
}           
renderStudents()
// Initial render


// For the event section
const events = JSON.parse(EventJSON)
let CPE = 1
let IPPE = 3
const EventContainer = document.getElementById('Upcoming-events')
const nextEvent = document.getElementById('next-event')
const prevEvent = document.getElementById('prev-event')

function eventCard(event){
    const card = document.createElement('div')
    card.className = 'student-card'
    card.innerHTML = `
        <h1>${event["Event-Name"]}</h1>
        Date : <h3>${event.Date}</h3>
    `
    return card
}

nextEvent.addEventListener('click', () => {
    if ((CPE * IPPE) < events.length) {
        CPE++
        renderEvent()
    }
    else {
        CPE = 1
        renderEvent()
    }
})

prevEvent.addEventListener('click', () => {
    if ((CPE - 1) * IPPE > 0) {
        CPE--
        renderEvent()
    }
    else{
        CPE = events.length / IPPE
        renderEvent()
    }
})

function renderEvent() {
    EventContainer.innerHTML = ''
    const paginatedEvent = pagination(events, CPE, IPPE)
    paginatedEvent.forEach(event => {
        const card = eventCard(event)
        EventContainer.appendChild(card)
    })
}
renderEvent()