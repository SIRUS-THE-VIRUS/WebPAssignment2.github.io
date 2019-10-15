function calcgrade(){
				var test1 = document.getElementsByName("test1");
				var test2 = document.getElementsByName("test2");
				var finals = document.getElementsByName("finals");
				var lettergrade = document.getElementsByName("lettergrade");
				for(var i = 0; i < 8; i++){
					var sum = Number(test1[i].value)+Number(test2[i].value)+Number(finals[i].value);
					var average = parseInt(sum/3)
					if( average >=90 && average <=100)
						lettergrade[i].value = "A";
					if( average >=80 && average <=89)
						lettergrade[i].value = "B+";
					if( average >=70 && average <=79)
						lettergrade[i].value = "B";
					if( average >=60 && average <=69)
						lettergrade[i].value = "C+";
					if( average >=50 && average <=59)
						lettergrade[i].value = "C";
					if( average >=0 && average <=49)
						lettergrade[i].value = "D";
					if(average>100 || average<0)
						alert("Grade must be between 0 and 100 percent");
					//lettergrade[i].value = average;
				}

			}
function cancel(){
	document.getElementById("form").reset();
}
function exit(){
	var form = document.getElementById("form");
	var elements = form.elements;
	for (var i = 0, len = elements.length; i < len; ++i) {
		elements[i].disabled = true;
	}
	alert("goodbye.");
}
function save(){
	var name = document.getElementById("studname").value;
	var idnum= document.getElementById("idnum").value;
	alert("Saving file for "+name+"-"+idnum);
}
function email(){
		var location_of_button = document.getElementById("emailit");
		var parent_email = document.getElementById("Pemail").value;
		location_of_button.href = "mailto:"+parent_email+"?cc=info@cpe.edu.ag&subject=Report Card is Ready&body=Please see attachment.";
}




