var util=require(util);          
var People=require('./people.js');
function Student(){
	People.call(this);
	
	
	
}
util.inherits(Student,People);
Student.prototype.study=function(){
	console.log('I am learning')
}

module.exports=Student;