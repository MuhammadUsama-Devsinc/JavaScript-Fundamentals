const student  = [
    {
        name: "John",
        age: 5,
        institution: "UMT",
        degree: "BSCS",
    }
]

new_student = {
    name: "John 2",
    age: 6,
    institution: "UMT",
    degree: "BSCS",
}
student.push(new_student);
delete new_student;

console.log(student);