// function autoChat()
// 	{
// 		alert("Hi")
// 	}
document.addEventListener("DOMContentLoaded",function(){
	document.querySelector(".autoChatIcon").addEventListener("click",function(){
		document.querySelector(".chatBot").classList.toggle("d-none");
		document.querySelector(".chatBot").classList.toggle("chatBoxAnimation");
	})
	const inputField = document.querySelector("#message") // CONSTANT VALUE GIVEN FOR INPUT FIELD
	inputField.addEventListener("keydown", function(event) {
    	if (event.code === "Enter")
    	{
    	    const input = inputField.value.toLowerCase();
    	    inputField.value = "";
    	    console.log(input.toLowerCase());
    	    // const greeting = ["hi","what's up", "hello"];
	    	    if (input === "hi"  || input === "hello" || input === "whats up") {
	    	    	alert("Hey man!!!");
	    	    }
	    	    else{
	    	    	console.log("Heyoo Man I couldn't understand ya. Please contact Nilaw :P")
	    	    }
   		}
  	});
})