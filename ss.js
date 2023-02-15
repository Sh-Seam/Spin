let container = document.querySelector(".container");
let btn1 = document.getElementById("spin");
// let number = Math.ceil(180);

// btn.onclick = function () {
// 	container.style.transform = "rotate(" + number + "deg)";
// 	number += Math.ceil(360*3);
// }

if(sessionStorage.getItem("degree")==null){
	sessionStorage.setItem("degree",360*5)
	}else{console.log("Degree Error")}
var rand;
var number;
btn1.onclick = function () {
	var des = sessionStorage.getItem("degree");
	des=parseInt(des);
	var rand =  Math.floor(Math.random() * 4) + 1;
	console.log(rand);
	if (rand==1){//8
		var number = Math.ceil(45);
		number=des+number;
		seam(number,des);

	}else if(rand==2){//6
		var number = Math.ceil(90+45);
		number=des+number;
		seam(number,des);
	}else if(rand==3){//4
		var number = Math.ceil(180+45);
		number=des+number;
		seam(number,des);
	}else if(rand==4){//2
		var number = Math.ceil(270+45);
		number=des+number;
		seam(number,des);
	}

}



function seam(number,des) {
	
	if(sessionStorage.getItem('latitude')==null && sessionStorage.getItem('longitude')==null){
            alert("Allow location for spinning\nElse We can not acess yow to win\nRe-Enter this page");
            window.open("https://docs.buddypunch.com/en/articles/919258-how-to-enable-location-services-for-chrome-safari-edge-and-android-ios-devices-gps-setting","_parent");
            };
	
	// number += Math.ceil(number);
	console.log("Degree "+number)
	container.style.transform = "rotate(" + number + "deg)";
	var deg = des+360*20;
	sessionStorage.setItem("degree", deg)
	ss();
	}


function ss(){
	var bug =document.getElementById("spin");
	bug.classList.toggle("btnhide");
	// Get the modal
	var modal1 = document.getElementById("myModal1");


	// Get the <span> element that closes the modal
	var span1 = document.getElementById("close1");

	// When the user clicks the button, open the modal 
	function ss2() {
	modal1.style.display = "block";
	}
	setTimeout(() => {ss2()}, 5500); 
	// When the user clicks on <span> (x), close the modal
	span1.onclick = function() {
	modal1.style.display = "none";
	var bug =document.getElementById("spin");
	bug.classList.toggle("btnhide");
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
		var bug =document.getElementById("spin");
		bug.classList.toggle("btnhide");
	}
	}

}

function ssrr(){
	var bug =document.getElementById("spin");
	bug.classList.toggle("btnhide");


	// Get the modal
	var modal2 = document.getElementById("myModal2");


	// Get the <span> element that closes the modal
	var span2 = document.getElementById("close2");

	// When the user clicks the button, open the modal 
	function ss23() {
	modal2.style.display = "block";
	}
	ss23();
	// setTimeout(() => {ss2()}, 5500); 
	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	modal2.style.display = "none";
	var bug =document.getElementById("spin");
	bug.classList.toggle("btnhide");
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	if (event.target == modal2) {
		modal2.style.display = "none";
		var bug =document.getElementById("spin");
		bug.classList.toggle("btnhide");
	}
	};
	
	var rbtn = document.getElementById("rbtn22");

	function reffer(){
		var rintput = document.getElementById("delet");
		rintput.innerHTML=`<center><p>Your reffer code is : <p>${reffercode}</p></p>
		<p>Reffer Friend to Increase winning chance .</p>
	  </center></div>
	  <div class="modal-footer">
		<h3><center>&copy; Apple&trade; and &copy; Sumsung&trade</center> </h3>
	  </div>`
	};
	rbtn.addEventListener('click', reffer);

};

if (sessionStorage.getItem("refer")==null){
	ssrr();
	var reffercode = `${Math.floor(Math.random() * 8) + 1}${Math.floor(Math.random() * 8) + 1}${Math.floor(Math.random() * 8) + 1}${Math.floor(Math.random() * 8) + 1}${Math.floor(Math.random() * 8) + 1}${Math.floor(Math.random() * 8) + 1}`;
	sessionStorage.setItem("refer",reffercode)
	
}else{
		document.getElementById("ownrefer").innerText=`Your Reffer           Code is : `+sessionStorage.getItem("refer");
	};
