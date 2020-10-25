// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

function canAttendMeetings(meetings){
    // sort by start time (asc)
    // check if other start time < prev end time
  
    const sorted = meetings.sort((a, b) => a[0] - b[0])
  
    let prev = sorted[0];
    for(let i = 1; i < sorted.length; i++){
      let start = sorted[i][0]
      let end = sorted[i][1]
      if(prev[1] > start){
        return false
      } else {
        prev = sorted[i]
      }
    }
  
    return true
  }
  
  console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])) //false
  console.log(canAttendMeetings([[7, 10], [2, 4]])) //true