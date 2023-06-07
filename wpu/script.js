let mahasiswa = {
	nama 	: "Tom Cruse",
	nrp		: "41646846165486",
	email	: "Cruse@gmail.com"
}
console.log(JSON.stringify(mahasiswa));


//Mengakses JSON dengan vanilla js (javascript murni)
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState == 4 && xhr.status == 200){
		let mahasiswa = JSON.parse(this.responseText);
		console.log(mahasiswa);
	}
}

xhr.open('GET', 'coba.json', true);
xhr.send();


//Mengakses JSON dengan JQuery
$.getJSON('coba.json', function (data){
	console.log(data);
});