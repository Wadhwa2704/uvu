let marksInput = document.getElementById("input");
        let gradesOutput = document.getElementById("output");
        let btn = document.getElementById("calculate");
        
        btn.addEventListener("click", () => 
        {
            //converting string to int
            let marks = parseInt(marksInput.value);
            let grade;
            //used if-else to calculate grade
            if (marks >= 90 && marks <= 100) 
            {
                grade = "A";
            } 
            else if (marks >= 80 && marks < 90) 
            {
                grade = "B";
            } 
            else if (marks >= 70 && marks < 80) 
            {
                grade = "C";
            } 
            else if (marks >= 60 && marks < 70) 
            {
                grade = "D";
            }
             else if (marks >= 0 && marks < 60) 
            {
                grade = "F";
            }
             else 
            {
                grade = "Invalid input";
            }
            
            gradesOutput.value = grade;
        });
        //showing current data on footer
        let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

document.getElementById('footer').innerHTML += " | Date: " + formattedDate;